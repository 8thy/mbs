---
# 当前页面内容标题
title: k8s部署教程
# 当前页面图标
icon: java
# 分类
category:
  - 后端
  - java
# 标签
tag:
  - k8s部署教程
  - Centos7
  - Docker
  - kubectl
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---
# K8S（kubernetes）

## 1. 集群部署

### 1.1 集群规划

#### 1.1.1 软件环境


| OS      |         |
| ------- | ------- |
| Docker  | v24.0.7 |
| K8S     | v1.20.9 |
| Kubeadm | v1.20.9 |

#### 1.1.2 节点配置


| 主机       | 角色   | IP           | CPU | 内存 |
| ---------- | ------ | ------------ | --- | ---- |
| k8s-master | Master | 192.168.1.81 | 4H  | 40G  |
| k8s-node1  | Node   | 192.168.1.82 | 4H  | 40G  |
| k8s-node2  | Node   | 192.168.1.83 | 4H  | 40G  |

### 1.2 准备工作

#### 1.2.1 修改host配置

```bash
# vim /etc/hosts
192.168.1.81 k8s-master
192.168.1.82 k8s-node1
192.168.1.83 k8s-node2
```

#### 1.2.2 配置ssh免密登录

先生成公钥对，再把公钥远程复制到所有节点

```bash
[root@node1 ~]# ssh-keygen
[root@node1 ~]# ssh-copy-id k8s-node1
[root@node1 ~]# ssh-copy-id k8s-node2
[root@node1 ~]# ssh-copy-id node3
[root@node1 ~]# ssh node2
Last login: Mon Oct  2 17:18:39 2023 from 192.168.5.117

```

#### 1.2.3 关闭Swap分区

```bash
# 临时关闭，重启恢复
[root@node1 ~]# swapoff -a
# 永久关闭
echo vm.swappiness = 0 >> /etc/sysctl.conf
[root@node1 ~]# sysctl -p
[root@node1 ~]# cat /etc/fstab
/dev/mapper/centos-swap swap                    swap    defaults        0 0
```

#### 1.2.4 禁用SELinux

```bash
[root@node1 ~]# sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/sysconfig/selinux
```

#### 1.2.5 关闭防火墙

```bash
systemctl disable firewalld --now
```

修改内核参数

```bash
[root@node1 ~]# modprobe br_netfilter
[root@node1 ~]# echo "modprobe br_netfilter" >> /etc/profile
[root@node1 ~]# tee /etc/sysctl.d/k8s.conf << EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
# 重新加载配置
[root@node1 ~]# sysctl -p /etc/sysctl.d/k8s.conf
```

#### 1.2.6 配置集群时钟同步

Centos7默认使用Chrony工具而非NTP进行时间同步，修改硬件时钟为UTC，时区为本地时区，所有节点执行如下修改

```bash
# 硬件时钟设置为UTC
timedatectl set-local-rtc 0
# 设置本地时区，显示本地时间
timedatectl set-timezone Asia/Shanghai
# 手动加载RTC设置
hwclock --systohc
# 验证
[root@node1 ~]# timedatectl
      Local time: Tue 2023-10-03 11:26:44 CST
  Universal time: Tue 2023-10-03 03:26:44 UTC
        RTC time: Tue 2023-10-03 03:26:44
       Time zone: Asia/Shanghai (CST, +0800)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
```

### 1.3 安装软件

#### 1.3.1 安装docker

* 卸载docker

```bash
yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine
```

* 安装yum源

  ```bash
  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  yum-config-manager  --add-repo   https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  ```
* 安装docker

  ```bash
  yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
  ```
* 设置开机启动docker

  ```bash
  # 开机启动docker并立即启动
  systemctl enable docker --now
  # 查看docker运行状态
  systemctl status docker
  ```
* 配置docker镜像源

  ```bash
  sudo mkdir -p /etc/docker
  sudo tee /etc/docker/daemon.json <<-'EOF'
  {
    "registry-mirrors": ["https://92ycw303.mirror.aliyuncs.com"]
  }
  EOF
  sudo systemctl daemon-reload
  sudo systemctl restart docker
  ```

#### 1.3.2 安装三大组件 kubeadm、kubelet、kubectl

* 配置k8s的Yum源

  ```bash
  [root@node1 ~]# cat  /etc/yum.repos.d/kubernetes.repo
  [kubernetes]
  name=Kubernetes
  baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
  enabled=1
  gpgcheck=0
  ```
* 安装三大组件

  ```bash
  # 所有节点都安装
  [root@node1 ~]# yum install -y kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9
  # 所有节点设置开机启动
  [root@node1 ~]# systemctl enable kubelet --now
  ```
* 初始化k8s集群（初次安装不用执行）

  ```bash
  kubeadm reset
  rm -rf /etc/kubernetes & rm -rf /var/lib/etcd/ & rm -rf $HOME/.kube
  ```
* 初始化主节点

  ```bash
  # 所有节点添加
  echo "192.168.1.81  cluster-endpoint" >> /etc/hosts
  # 只在主节点执行
  kubeadm init \
  --apiserver-advertise-address=192.168.1.81 \
  --control-plane-endpoint=cluster-endpoint \
  --image-repository  registry.cn-hangzhou.aliyuncs.com/google_containers \
  --kubernetes-version v1.20.9 \
  --service-cidr=10.96.0.0/12 \
  --pod-network-cidr=192.168.0.0/16
  ```

  初始化主节点之后会生成一些命令提示(如下代码块)

  ```bash
  Your Kubernetes control-plane has initialized successfully!

  To start using your cluster, you need to run the following as a regular user:

    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config

  Alternatively, if you are the root user, you can run:

    export KUBECONFIG=/etc/kubernetes/admin.conf

  You should now deploy a pod network to the cluster.
  Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
    https://kubernetes.io/docs/concepts/cluster-administration/addons/

  You can now join any number of control-plane nodes by copying certificate authorities
  and service account keys on each node and then running the following as root:

    kubeadm join cluster-endpoint:6443 --token 1mopok.l0r7o5dhly1eyb4i \
      --discovery-token-ca-cert-hash sha256:d67770aa65d526b9e159b8d2b11d3ed2ce466b7e6b30153270415e1a252a5d20 \
      --control-plane

  Then you can join any number of worker nodes by running the following on each as root:

  kubeadm join cluster-endpoint:6443 --token 1mopok.l0r7o5dhly1eyb4i \
      --discovery-token-ca-cert-hash sha256:d67770aa65d526b9e159b8d2b11d3ed2ce466b7e6b30153270415e1a252a5d20
  ```

  根据输出提示要执行 如下命令：

  ```bash
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
  ```

#### 1.3.3 安装网络插件

* 下载`calico.yaml`并保存到本地

  ```bash
  curl https://docs.projectcalico.org/v3.15/manifests/calico.yaml -O
  ```
* 应用`calico.yaml`

  ```bash
   # 提交
   kubectl apply -f calico.yaml
   # 验证是否成功
  [root@node1 ~]# kubectl get pod -A | grep calico
  kube-system            calico-kube-controllers-577f77cb5c-s6zfl     1/1     Running   0          15h
  kube-system            calico-node-7gsfr                            1/1     Running   0          15h
  kube-system            calico-node-hb2k8                            1/1     Running   0          15h
  kube-system            calico-node-xt4bl                            1/1     Running   0          15h
  # 如果想要删除，执行如下命令：
  kubectl delete -f calico.yaml

  # 也可以修改配置
  #3888行             - name: CALICO_IPV4POOL_CIDR
  #3889行               value: "172.20.0.0/16"
  ```

#### 1.3.4 安装kubernetes-dashboard

* 通过kubectl命令安装

  ```bash
  kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
  ```
* 对外暴露访问端口

  ```bash
  # 对外暴露访问端口，由--type=ClusterIP修改为--type=NodePort
  kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard
  ```
* 查看端口：**32271**

  ```bash
  [root@k8s-master ~]# kubectl get svc -A | grep kubernetes-dashboard
  kubernetes-dashboard   dashboard-metrics-scraper   ClusterIP   10.100.244.187   <none>        8000/TCP                 5d13h
  kubernetes-dashboard   kubernetes-dashboard        NodePort    10.100.16.109    <none>        443:32271/TCP            5d13h

  ```
* 创建dashboard用户

  先创建一个`yaml`文件`vi k8s-dashboard-account.yaml` 加入如下配置：

  ```yaml
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    name: admin-user
    namespace: kube-system
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: admin-user
  roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: cluster-admin
  subjects:
  - kind: ServiceAccount
    name: admin-user
    namespace: kube-system
  ```

  再执行如下命令：

  ```bash
  [root@k8s-master ~]# kubectl create -f k8s-dashboard-account.yaml
  [root@k8s-master ~]# kubectl -n kube-system  create token admin-user
  [root@k8s-master ~]# kubectl get secret -n kube-system|grep  kubernetes-dashboard-token
  [root@k8s-master ~]# kubectl get secret -n kube-system|grep admin|awk '{print $1}'
  admin-user-token-jb4rc
  [root@k8s-master ~]#  kubectl describe secret admin-user-token-jb4rc  -n kube-system|awk '/^token/ {print $2}'
  eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCdTBkZ0pPaEZvX1RPOHEwUXZkZVBDTzE5VE1OTVNDOVd4c0hPQ2tjTGcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWpiNHJjIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyOTRmYTc4MC0wN2M5LTRkZDUtYjA5MS1iZTI3MWYzOGRmNGEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.H4e2f7SmgOkQ0YOEWMwKQ5uzXcQ-j1Q7zK44oKNCfZmkqOF63N55kho8ojCAQVbhFgwm3LqK5nLFd6CDK4H9lF9M1j36uRPwC9iO8wLdcOh_xmVCvw9AVMLVS8dzfnopFLPB-ImtbTJUAo0h3mF-ChHqUVlDeSXE9DaFSTpvKdDAGftKx4CjgRKgJWUhIqFytcilwjr6yErMK3SyzjaBgVYlryMD1-0t0ecoTraH5vE4l8lw7aTeW_pbwrvgpqpzNm9GtnC3OtHQQUZQOCiugZY9Ak9ff5zf7uVmjrL9Hcc3jgtd7KpEpUcPVhHDp_laaU4JTFg3Lco3ho-SJGSQEw
  ```

  登录 可以用集群的任意ip:端口访问 `https://192.168.1.82:32271`

  ![image-20231230171159244](../../../../.vuepress/public/assets/image/kubernetes/image-20231230171159244.png)


## 2. 集群实战

### 2.1 创建namespace

> ```
> namespace用来隔离资源，但并不隔离网络
> ```

![image-20231230173843993](../../../../.vuepress/public/assets/image/kubernetes/image-20231230173843993.png)

#### 2.1.1 命令行方式

```bash
# 创建namespace（ns）
kubectl create ns hello
# 删除namespace
kubectl delete ns hello
# 查看namespace
[root@k8s-master ~]# kubectl get ns
NAME                   STATUS   AGE
default                Active   5d15h
kube-node-lease        Active   5d15h
kube-public            Active   5d15h
kube-system            Active   5d15h
kubernetes-dashboard   Active   5d15h
# 查看应用 -A 所有namespace下的， 如果想看某个namespace下的 kubectl get pods -n kubernetes-dashboard
[root@k8s-master ~]# kubectl get pods -A
NAMESPACE              NAME                                         READY   STATUS    RESTARTS   AGE
kube-system            calico-kube-controllers-bc4f7c685-p4qm5      1/1     Running   2          5d15h
kube-system            calico-node-6rpfn                            1/1     Running   2          5d15h
kube-system            calico-node-gls67                            1/1     Running   2          5d15h
kube-system            calico-node-kwwf6                            1/1     Running   2          5d15h



```

#### 2.1.2 yaml方式

* 创建`hello.yaml`文件，写入如下

  ```yaml
  apiVersion: v1
  kind: Namespace
  metadata:
  	name: hello
  ```
* 应用 `hello.yaml`

  ```bash
  kubectl apply -f hello.yaml
  ```

### 2.2 Pod

> ```
> 运行中的一组容器，Pod是Kubernetes中应用的最小单位
> ```

![image-20231230183325709](../../../../.vuepress/public/assets/image/kubernetes/image-20231230183325709.png)

![image-20231230185633611](../../../../.vuepress/public/assets/image/kubernetes/image-20231230185633611.png)

#### 2.2.1 命令行方式

```bash
# 创建pod
[root@k8s-master ~]# kubectl run mynginx --image=nginx
pod/mynginx created
# 查看pod
[root@k8s-master ~]# kubectl get pod
NAME      READY   STATUS    RESTARTS   AGE
mynginx   1/1     Running   0          32s
# 查看 mynginx 创建过程
kubectl describe pod mynginx
[root@k8s-master ~]# kubectl describe pod mynginx
#################  ---------------------------查看描述开始--------------------------------   #######################
Name:         mynginx
Namespace:    default
Priority:     0
Node:         k8s-node1/192.168.1.82
Start Time:   Sat, 30 Dec 2023 19:04:05 +0800
Labels:       run=mynginx
Annotations:  cni.projectcalico.org/podIP: 192.168.36.65/32
              cni.projectcalico.org/podIPs: 192.168.36.65/32
Status:       Running
IP:           192.168.36.65
IPs:
  IP:  192.168.36.65
Containers:
  mynginx:
    Container ID:   docker://cc10dd32214787b1e9a8324efe2b28fdc77f80c24df689fe3855c16c0fbc5177
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:0d17b565c37bcbd895e9d92315a05c1c3c9a29f762b011a10c54a66cd53c9b31
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Sat, 30 Dec 2023 19:04:18 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-qp8t4 (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-qp8t4:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-qp8t4
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:  # 事件
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  3m58s  default-scheduler  Successfully assigned default/mynginx to k8s-node1
  Normal  Pulling    3m58s  kubelet            Pulling image "nginx"
  Normal  Pulled     3m47s  kubelet            Successfully pulled image "nginx" in 10.746888323s
  Normal  Created    3m47s  kubelet            Created container mynginx
  Normal  Started    3m46s  kubelet            Started container mynginx
#################  ---------------------------查看描述结束--------------------------------   #######################

# 删除pod
[root@k8s-master ~]# kubectl delete pod mynginx -n default
pod "mynginx" deleted
```

#### 2.2.2 yaml方式

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: mynginx
  name: mynginx # pod名字
spec:
  containers: # 容器
  - image: nginx # 镜像的名字
    name: mynginx # 容器的名字
```

创建pod

```bash
[root@k8s-master ~]# kubectl apply -f mynginxpod.yaml
pod/mynginx created
```

以yaml文件方式创建的pod 删除pod

```bash
[root@k8s-master ~]# kubectl delete -f mynginxpod.yaml
pod "mynginx" deleted
```

#### 2.2.3 可视化界面yaml方式

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: mynginx
  name: mynginx # pod名字
  namespace: default
spec:
  containers: # 容器
  - image: nginx # 镜像的名字
    name: mynginx # 容器的名字
```

查看pod 的日志

```bash
[root@k8s-master ~]# kubectl logs -f mynginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2023/12/30 11:32:34 [notice] 1#1: using the "epoll" event method
2023/12/30 11:32:34 [notice] 1#1: nginx/1.21.5
2023/12/30 11:32:34 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)
2023/12/30 11:32:34 [notice] 1#1: OS: Linux 3.10.0-1160.el7.x86_64
2023/12/30 11:32:34 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2023/12/30 11:32:34 [notice] 1#1: start worker processes
2023/12/30 11:32:34 [notice] 1#1: start worker process 31
2023/12/30 11:32:34 [notice] 1#1: start worker process 32
2023/12/30 11:32:34 [notice] 1#1: start worker process 33
2023/12/30 11:32:34 [notice] 1#1: start worker process 34
```

查看pod更完善的信息

```bash
#每个pod - k8s 都会分配一个ip 使用 kubectl get pod -owide查看
[root@k8s-master ~]# kubectl get pod -owide
NAME      READY   STATUS    RESTARTS   AGE     IP              NODE        NOMINATED NODE   READINESS GATES
mynginx   1/1     Running   0          6m27s   192.168.36.67   k8s-node1   <none>           <none>
```

如果想要更改里面的内容，需要进入里面 命令： `kubectl exec -it mynginx -- /bin/bash`sh

```bash
[root@k8s-master ~]# kubectl get pod
NAME      READY   STATUS    RESTARTS   AGE
mynginx   1/1     Running   0          11m

[root@k8s-master ~]# kubectl exec -it mynginx -- /bin/bash
root@mynginx:/# ls /usr/share/nginx/html/
50x.html  index.html
```

#### 2.2.4 多个应用

一个pod里部署多个应用

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: mulapply
  name: mulapply # pod名字
spec:
  containers: # 容器
  - image: nginx # 镜像的名字
    name: nginx # 容器的名字
  - image: tomcat:8.5.68 # 镜像的名字
    name: tomcat # 容器的名字
```

创建

```bash
[root@k8s-master ~]# kubectl apply -f mulapply.yaml
pod/mulapply created
```

每隔1s输出 pod

```bash
watch -n 1 kubectl get pod

Every 1.0s: kubectl get pod                                                                                                                                                                                                                                      Sat Dec 30 19:58:49 2023

NAME       READY   STATUS    RESTARTS   AGE
mulapply   2/2     Running   0          2m8s
mynginx    1/1     Running   0          26m

```

### 2.3 Deployment

> ```
> 控制Pod，使Pod拥有多副本，自愈，扩缩容等能力
> ```

#### 2.3.1 使用命令的方式创建

```bash
# 先创建pod 和创建deployment作对比
 kubectl run mynginx --image=nginx

 # 创建deployment
 kubectl create deployment mytomcat --image=tomcat:8.5.68

#####  多副本的创建方式
[root@k8s-master ~]# kubectl create deployment mynginxMul --image=nginx --replicas=3
deployment.apps/mytomcat created
# 查看 pod
[root@k8s-master ~]# kubectl get pod
NAME                        READY   STATUS    RESTARTS   AGE
mytomcat-6f5f895f4f-bw2vf   1/1     Running   0          31s
mytomcat-6f5f895f4f-grshf   1/1     Running   0          31s
mytomcat-6f5f895f4f-n89z5   1/1     Running   0          31s

# 查看 deploy
[root@k8s-master ~]# kubectl get deploy
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
mynginx-mul   3/3     3            3           52s

# 删除deployment
kubectl delete deploy mytomcat



```

#### 2.3.2 可视化界面创建

```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: my-deploy
  name: my-deploy # Deployment名字
spec:
  replicas: 3 # 副本数量
  selector:
    matchLabels:
      app: my-deploy
  template:
    metadata:
      labels:
       app: my-deploy
    spec:
      containers: # 容器
      - image: nginx # 镜像的名字
        name: nginx # 容器的名字
```

#### 2.3.3 扩缩容

```bash
# 扩容
[root@k8s-master ~]# kubectl scale --replicas=5 deploy/my-deploy
deployment.apps/my-deploy scaled
# 缩容
[root@k8s-master ~]# kubectl scale --replicas=2 deploy/my-deploy
deployment.apps/my-deploy scale
```

也可以用以下的命令：

```bash
[root@k8s-master ~]# kubectl edit deploy my-deploy
deployment.apps/my-deploy edited
```

#### 2.3.4 自愈&故障转移

```bash
# k8s提供的监控
[root@k8s-master ~]# kubectl get pod -w
NAME                         READY   STATUS    RESTARTS   AGE
my-deploy-779ddd99b6-2scgh   1/1     Running   1          4m51s
my-deploy-779ddd99b6-kk768   1/1     Running   0          17m
my-deploy-779ddd99b6-kssvh   1/1     Running   0          21m
my-deploy-779ddd99b6-2scgh   1/1     Terminating   1          9m9s
my-deploy-779ddd99b6-7jfbg   0/1     Pending       0          0s
my-deploy-779ddd99b6-7jfbg   0/1     Pending       0          0s
my-deploy-779ddd99b6-7jfbg   0/1     ContainerCreating   0          0s
my-deploy-779ddd99b6-7jfbg   0/1     ContainerCreating   0          1s
my-deploy-779ddd99b6-7jfbg   1/1     Running             0          17s
```

#### 2.3.5 滚动更新

```bash
# 查看部署使用的是什么镜像
[root@k8s-master ~]# kubectl get deploy my-deploy -oyaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app":"my-deploy"},"name":"my-deploy","namespace":"default"},"spec":{"replicas":3,"selector":{"matchLabels":{"app":"my-deploy"}},"template":{"metadata":{"labels":{"app":"my-deploy"}},"spec":{"containers":[{"image":"nginx","name":"nginx"}]}}}}
  creationTimestamp: "2023-12-30T12:42:13Z"
  generation: 4
  labels:
    app: my-deploy
  managedFields:
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:metadata:
        f:annotations:
          .: {}
          f:kubectl.kubernetes.io/last-applied-configuration: {}
        f:labels:
          .: {}
          f:app: {}
      f:spec:
        f:progressDeadlineSeconds: {}
        f:revisionHistoryLimit: {}
        f:selector: {}
        f:strategy:
          f:rollingUpdate:
            .: {}
            f:maxSurge: {}
            f:maxUnavailable: {}
          f:type: {}
        f:template:
          f:metadata:
            f:labels:
              .: {}
              f:app: {}
          f:spec:
            f:containers:
              k:{"name":"nginx"}:
                .: {}
                f:image: {}
                f:imagePullPolicy: {}
                f:name: {}
                f:resources: {}
                f:terminationMessagePath: {}
                f:terminationMessagePolicy: {}
            f:dnsPolicy: {}
            f:restartPolicy: {}
            f:schedulerName: {}
            f:securityContext: {}
            f:terminationGracePeriodSeconds: {}
    manager: kubectl-client-side-apply
    operation: Update
    time: "2023-12-30T12:42:13Z"
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:spec:
        f:replicas: {}
    manager: kubectl-edit
    operation: Update
    time: "2023-12-30T12:48:19Z"
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:metadata:
        f:annotations:
          f:deployment.kubernetes.io/revision: {}
      f:status:
        f:availableReplicas: {}
        f:conditions:
          .: {}
          k:{"type":"Available"}:
            .: {}
            f:lastTransitionTime: {}
            f:lastUpdateTime: {}
            f:message: {}
            f:reason: {}
            f:status: {}
            f:type: {}
          k:{"type":"Progressing"}:
            .: {}
            f:lastTransitionTime: {}
            f:lastUpdateTime: {}
            f:message: {}
            f:reason: {}
            f:status: {}
            f:type: {}
        f:observedGeneration: {}
        f:readyReplicas: {}
        f:replicas: {}
        f:updatedReplicas: {}
    manager: kube-controller-manager
    operation: Update
    time: "2023-12-30T13:07:58Z"
  name: my-deploy
  namespace: default
  resourceVersion: "33077"
  uid: 1ab50694-431d-4a1f-a4ff-a0c2ded647db
spec:
  progressDeadlineSeconds: 600
  replicas: 3
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: my-deploy
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: my-deploy
    spec:
      containers:
      - image: nginx
        imagePullPolicy: Always
        name: nginx
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 3
  conditions:
  - lastTransitionTime: "2023-12-30T12:42:13Z"
    lastUpdateTime: "2023-12-30T12:42:33Z"
    message: ReplicaSet "my-deploy-779ddd99b6" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  - lastTransitionTime: "2023-12-30T13:07:58Z"
    lastUpdateTime: "2023-12-30T13:07:58Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  observedGeneration: 4
  readyReplicas: 3
  replicas: 3
  updatedReplicas: 3
```

**滚动更新**

```bash
kubectl set image deployment/my-deploy nginx=nginx:1.16.1 --record

kubectl rollout status deployment/my-deploy
```

````bash
[root@k8s-master ~]# watch -n 1 kubectl get pod -owide
[root@k8s-master ~]# kubectl get pod -w
NAME                         READY   STATUS    RESTARTS   AGE
my-deploy-779ddd99b6-7jfbg   1/1     Running   0          8m10s
my-deploy-779ddd99b6-kk768   1/1     Running   0          30m
my-deploy-779ddd99b6-kssvh   1/1     Running   0          33m

my-deploy-577584cf55-xrssd   0/1     Pending   0          0s
my-deploy-577584cf55-xrssd   0/1     Pending   0          0s
my-deploy-577584cf55-xrssd   0/1     ContainerCreating   0          0s
my-deploy-577584cf55-xrssd   0/1     ContainerCreating   0          1s
my-deploy-577584cf55-xrssd   1/1     Running             0          25s
my-deploy-779ddd99b6-7jfbg   1/1     Terminating         0          8m49s
my-deploy-577584cf55-mxgvg   0/1     Pending             0          0s
my-deploy-577584cf55-mxgvg   0/1     Pending             0          0s
my-deploy-577584cf55-mxgvg   0/1     ContainerCreating   0          0s
my-deploy-577584cf55-mxgvg   0/1     ContainerCreating   0          1s
my-deploy-779ddd99b6-7jfbg   0/1     Terminating         0          8m51s
my-deploy-577584cf55-mxgvg   1/1     Running             0          2s
my-deploy-779ddd99b6-kk768   1/1     Terminating         0          31m
my-deploy-577584cf55-7k9fs   0/1     Pending             0          0s
my-deploy-577584cf55-7k9fs   0/1     Pending             0          0s
my-deploy-577584cf55-7k9fs   0/1     ContainerCreating   0          0s
my-deploy-779ddd99b6-7jfbg   0/1     Terminating         0          8m52s
my-deploy-779ddd99b6-7jfbg   0/1     Terminating         0          8m52s
my-deploy-577584cf55-7k9fs   0/1     ContainerCreating   0          1s
my-deploy-779ddd99b6-kk768   0/1     Terminating         0          31m
my-deploy-577584cf55-7k9fs   1/1     Running             0          2s
my-deploy-779ddd99b6-kssvh   1/1     Terminating         0          34m
my-deploy-779ddd99b6-kk768   0/1     Terminating         0          31m
my-deploy-779ddd99b6-kk768   0/1     Terminating         0          31m
my-deploy-779ddd99b6-kssvh   0/1     Terminating         0          34m
my-deploy-779ddd99b6-kssvh   0/1     Terminating         0          34m
my-deploy-779ddd99b6-kssvh   0/1     Terminating         0          34m

````

#### 2.3.6 版本回退

```bash
# 历史记录
kubectl rollout history deployment/my-deploy

# 查看某个历史详情
kubectl rollout history deployment/my-deploy --revision=1

# 回滚(回到上次)
kubectl rollout undo deployment/my-deploy

# 回滚(回到指定版本)
[root@k8s-master ~]# kubectl rollout undo deployment/my-deploy --to-revision=1
deployment.apps/my-deploy rolled back
```

### 2.4 工作负载

> ```
> 除了Deployment，k8s还有
> ```
>
> `StatefulSet`，`DaemonSet`，`Job`等类型资源。我们称为`工作负载`。
>
> 有状态应用使用`StatefulSet`部署，无状态应用使用`Deployment`部署
>
> https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/

![image-20231230214836030](../../../../.vuepress/public/assets/image/kubernetes/image-20231230214836030.png)

Deployment：无状态应用部署，比如微服务，提供多副本等功能
StatefulSet:	有状态应用部署，比如redis，提供稳定的存储，网络等功能
DaemonSet:	守护型应用部署，比如日志收集组件，在每个机器都能运行一份
Job/CronJob:	定时任务部署，比如垃圾清理组件，可以在指定时间运行

### 2.5 Service

> ```
> 将一组Pods公开为网络服务的抽象方法
> ```

```bash
# 暴露Deploy
[root@k8s-master ~]# kubectl expose deployment my-deploy --port=8080 --target-port=80 --type=NodePort #
[root@k8s-master ~]# kubectl expose deployment my-deploy --port=8080 --target-port=80 --type=ClusterIP
service/my-deploy exposed
[root@k8s-master ~]# kubectl get service
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP    5d19h
my-deploy    ClusterIP   10.98.22.102   <none>        8080/TCP   20s
[root@k8s-master ~]# ^C
[root@k8s-master ~]# curl 10.98.22.102:8080
2222
[root@k8s-master ~]# curl 10.98.22.102:8080
1111
[root@k8s-master ~]# curl 10.98.22.102:8080
3333
[root@k8s-master ~]# curl 10.98.22.102:8080
2222
[root@k8s-master ~]# curl 10.98.22.102:8080
1111
[root@k8s-master ~]# curl 10.98.22.102:8080
3333
[root@k8s-master ~]# curl 10.98.22.102:8080
1111
[root@k8s-master ~]# curl 10.98.22.102:8080
3333
[root@k8s-master ~]# curl 10.98.22.102:8080
2222
[root@k8s-master ~]# curl 10.98.22.102:8080
2222
[root@k8s-master ~]# curl 10.98.22.102:8080
1111
[root@k8s-master ~]# curl 10.98.22.102:8080
2222

# 使用标签检索pod
kubectl get pod -l app=mydeploy
```

yaml方式暴露

```bash
apiVersion: v1
kind: Sevice
metadata:
  labels:
    app: my-deploy
  name: my-deploy
spec:
  selector:
    app: my-deploy
   ports:
   - port: 8080
     protocol: TCP
     targetPort: 80
```

**服务名.所在名称空间.svc**

### 2.6 Ingress

```yaml
curl upload.thylove.cn/k8s/ingress.yaml
```

```bash
[root@k8s-master ~]# kubectl get svc -A
NAMESPACE              NAME                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
default                kubernetes                           ClusterIP   10.96.0.1        <none>        443/TCP                      6d15h
ingress-nginx          ingress-nginx-controller             NodePort    10.97.173.198    <none>        80:30070/TCP,443:32128/TCP   6m59s
ingress-nginx          ingress-nginx-controller-admission   ClusterIP   10.108.83.243    <none>        443/TCP                      6m59s
kube-system            kube-dns                             ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP       6d15h
kubernetes-dashboard   dashboard-metrics-scraper            ClusterIP   10.100.244.187   <none>        8000/TCP                     6d15h
kubernetes-dashboard   kubernetes-dashboard                 NodePort    10.100.16.109    <none>        443:32271/TCP                6d15h

```

http://192.168.1.81:30070/

http://192.168.1.81:32128/

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: thylove-prototype
spec:
  replicas: 3
  selector:
    matchLabels:
      app: thylove-prototype
  template:
    metadata:
      labels:
        app: thylove-prototype
    spec:
      containers:
      - name: thylove-prototype
        image: registry.cn-qingdao.aliyuncs.com/docker_dsq/thylove-prototype:v1
        ports:
        - containnerPort: 8080
---
apiVersion: apps/v1
kind: Service
metadata:
  labels:
        app: thylove-prototype
  name: thylove-prototype
spec:
  selector:
    app: thylove-prototype
  ports:
  - port: 8080
    protocol: TCP
    targetProt: 8080

```

**域名访问：**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-host-bar
spec:
  ingressClassName: nginx
  rules:
  - host: "thylove.prototype.cn"
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: thylove-prototype
            port:
              number: 8080
```
