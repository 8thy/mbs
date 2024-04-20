import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-BbDFX5O9.js";const t="/my-docs-new/assets/image-20231230171159244-PPvcuvkQ.png",i="/my-docs-new/assets/image-20231230173843993-fCRPGgWk.png",l="/my-docs-new/assets/image-20231230183325709-CKI5ir6r.png",p="/my-docs-new/assets/image-20231230185633611-G-cHUuvH.png",c="/my-docs-new/assets/image-20231230214836030-_2S9o6zh.png",o={},d=e(`<h1 id="k8s-kubernetes" tabindex="-1"><a class="header-anchor" href="#k8s-kubernetes"><span>K8S（kubernetes）</span></a></h1><h2 id="_1-集群部署" tabindex="-1"><a class="header-anchor" href="#_1-集群部署"><span>1. 集群部署</span></a></h2><h3 id="_1-1-集群规划" tabindex="-1"><a class="header-anchor" href="#_1-1-集群规划"><span>1.1 集群规划</span></a></h3><h4 id="_1-1-1-软件环境" tabindex="-1"><a class="header-anchor" href="#_1-1-1-软件环境"><span>1.1.1 软件环境</span></a></h4><table><thead><tr><th>OS</th><th></th></tr></thead><tbody><tr><td>Docker</td><td>v24.0.7</td></tr><tr><td>K8S</td><td>v1.20.9</td></tr><tr><td>Kubeadm</td><td>v1.20.9</td></tr></tbody></table><h4 id="_1-1-2-节点配置" tabindex="-1"><a class="header-anchor" href="#_1-1-2-节点配置"><span>1.1.2 节点配置</span></a></h4><table><thead><tr><th>主机</th><th>角色</th><th>IP</th><th>CPU</th><th>内存</th></tr></thead><tbody><tr><td>k8s-master</td><td>Master</td><td>192.168.1.81</td><td>4H</td><td>40G</td></tr><tr><td>k8s-node1</td><td>Node</td><td>192.168.1.82</td><td>4H</td><td>40G</td></tr><tr><td>k8s-node2</td><td>Node</td><td>192.168.1.83</td><td>4H</td><td>40G</td></tr></tbody></table><h3 id="_1-2-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-2-准备工作"><span>1.2 准备工作</span></a></h3><h4 id="_1-2-1-修改host配置" tabindex="-1"><a class="header-anchor" href="#_1-2-1-修改host配置"><span>1.2.1 修改host配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/hosts</span>
<span class="token number">192.168</span>.1.81 k8s-master
<span class="token number">192.168</span>.1.82 k8s-node1
<span class="token number">192.168</span>.1.83 k8s-node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-配置ssh免密登录" tabindex="-1"><a class="header-anchor" href="#_1-2-2-配置ssh免密登录"><span>1.2.2 配置ssh免密登录</span></a></h4><p>先生成公钥对，再把公钥远程复制到所有节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id k8s-node1</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id k8s-node2</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id node3</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ssh node2</span>
Last login: Mon Oct  <span class="token number">2</span> <span class="token number">17</span>:18:39 <span class="token number">2023</span> from <span class="token number">192.168</span>.5.117

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-3-关闭swap分区" tabindex="-1"><a class="header-anchor" href="#_1-2-3-关闭swap分区"><span>1.2.3 关闭Swap分区</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 临时关闭，重启恢复</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># swapoff -a</span>
<span class="token comment"># 永久关闭</span>
<span class="token builtin class-name">echo</span> vm.swappiness <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># sysctl -p</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/fstab</span>
/dev/mapper/centos-swap swap                    swap    defaults        <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-4-禁用selinux" tabindex="-1"><a class="header-anchor" href="#_1-2-4-禁用selinux"><span>1.2.4 禁用SELinux</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># sed -i &#39;s/SELINUX=enforcing/SELINUX=disabled/&#39; /etc/sysconfig/selinux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-5-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_1-2-5-关闭防火墙"><span>1.2.5 关闭防火墙</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl disable firewalld <span class="token parameter variable">--now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改内核参数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># modprobe br_netfilter</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;modprobe br_netfilter&quot; &gt;&gt; /etc/profile</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># tee /etc/sysctl.d/k8s.conf &lt;&lt; EOF</span>
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
EOF
<span class="token comment"># 重新加载配置</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># sysctl -p /etc/sysctl.d/k8s.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-6-配置集群时钟同步" tabindex="-1"><a class="header-anchor" href="#_1-2-6-配置集群时钟同步"><span>1.2.6 配置集群时钟同步</span></a></h4><p>Centos7默认使用Chrony工具而非NTP进行时间同步，修改硬件时钟为UTC，时区为本地时区，所有节点执行如下修改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 硬件时钟设置为UTC</span>
timedatectl set-local-rtc <span class="token number">0</span>
<span class="token comment"># 设置本地时区，显示本地时间</span>
timedatectl set-timezone Asia/Shanghai
<span class="token comment"># 手动加载RTC设置</span>
hwclock <span class="token parameter variable">--systohc</span>
<span class="token comment"># 验证</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># timedatectl</span>
      Local time: Tue <span class="token number">2023</span>-10-03 <span class="token number">11</span>:26:44 CST
  Universal time: Tue <span class="token number">2023</span>-10-03 03:26:44 UTC
        RTC time: Tue <span class="token number">2023</span>-10-03 03:26:44
       Time zone: Asia/Shanghai <span class="token punctuation">(</span>CST, +0800<span class="token punctuation">)</span>
     NTP enabled: <span class="token function">yes</span>
NTP synchronized: <span class="token function">yes</span>
 RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
      DST active: n/a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装软件" tabindex="-1"><a class="header-anchor" href="#_1-3-安装软件"><span>1.3 安装软件</span></a></h3><h4 id="_1-3-1-安装docker" tabindex="-1"><a class="header-anchor" href="#_1-3-1-安装docker"><span>1.3.1 安装docker</span></a></h4><ul><li>卸载docker</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
    docker-client <span class="token punctuation">\\</span>
    docker-client-latest <span class="token punctuation">\\</span>
    docker-common <span class="token punctuation">\\</span>
    docker-latest <span class="token punctuation">\\</span>
    docker-latest-logrotate <span class="token punctuation">\\</span>
    docker-logrotate <span class="token punctuation">\\</span>
    docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>安装yum源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
yum-config-manager  --add-repo   https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置开机启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开机启动docker并立即启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token parameter variable">--now</span>
<span class="token comment"># 查看docker运行状态</span>
systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置docker镜像源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://92ycw303.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_1-3-2-安装三大组件-kubeadm、kubelet、kubectl" tabindex="-1"><a class="header-anchor" href="#_1-3-2-安装三大组件-kubeadm、kubelet、kubectl"><span>1.3.2 安装三大组件 kubeadm、kubelet、kubectl</span></a></h4><ul><li><p>配置k8s的Yum源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># cat  /etc/yum.repos.d/kubernetes.repo</span>
<span class="token punctuation">[</span>kubernetes<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Kubernetes
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装三大组件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 所有节点都安装</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># yum install -y kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9</span>
<span class="token comment"># 所有节点设置开机启动</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable kubelet --now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>初始化k8s集群（初次安装不用执行）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubeadm reset
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/kubernetes <span class="token operator">&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/etcd/ <span class="token operator">&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token environment constant">$HOME</span>/.kube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>初始化主节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 所有节点添加</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.81  cluster-endpoint&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
<span class="token comment"># 只在主节点执行</span>
kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.1.81 <span class="token punctuation">\\</span>
--control-plane-endpoint<span class="token operator">=</span>cluster-endpoint <span class="token punctuation">\\</span>
--image-repository  registry.cn-hangzhou.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.20.9 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">192.168</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化主节点之后会生成一些命令提示(如下代码块)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Your Kubernetes control-plane has initialized successfully<span class="token operator">!</span>

To start using your cluster, you need to run the following as a regular user:

  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
  <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
  <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

Alternatively, <span class="token keyword">if</span> you are the root user, you can run:

  <span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run <span class="token string">&quot;kubectl apply -f [podnetwork].yaml&quot;</span> with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now <span class="token function">join</span> any number of control-plane nodes by copying certificate authorities
and <span class="token function">service</span> account keys on each <span class="token function">node</span> and <span class="token keyword">then</span> running the following as root:

  kubeadm <span class="token function">join</span> cluster-endpoint:6443 <span class="token parameter variable">--token</span> 1mopok.l0r7o5dhly1eyb4i <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:d67770aa65d526b9e159b8d2b11d3ed2ce466b7e6b30153270415e1a252a5d20 <span class="token punctuation">\\</span>
    --control-plane

Then you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:

kubeadm <span class="token function">join</span> cluster-endpoint:6443 <span class="token parameter variable">--token</span> 1mopok.l0r7o5dhly1eyb4i <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:d67770aa65d526b9e159b8d2b11d3ed2ce466b7e6b30153270415e1a252a5d20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据输出提示要执行 如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_1-3-3-安装网络插件" tabindex="-1"><a class="header-anchor" href="#_1-3-3-安装网络插件"><span>1.3.3 安装网络插件</span></a></h4><ul><li><p>下载<code>calico.yaml</code>并保存到本地</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://docs.projectcalico.org/v3.15/manifests/calico.yaml <span class="token parameter variable">-O</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>应用<code>calico.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token comment"># 提交</span>
 kubectl apply <span class="token parameter variable">-f</span> calico.yaml
 <span class="token comment"># 验证是否成功</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -A | grep calico</span>
kube-system            calico-kube-controllers-577f77cb5c-s6zfl     <span class="token number">1</span>/1     Running   <span class="token number">0</span>          15h
kube-system            calico-node-7gsfr                            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          15h
kube-system            calico-node-hb2k8                            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          15h
kube-system            calico-node-xt4bl                            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          15h
<span class="token comment"># 如果想要删除，执行如下命令：</span>
kubectl delete <span class="token parameter variable">-f</span> calico.yaml

<span class="token comment"># 也可以修改配置</span>
<span class="token comment">#3888行             - name: CALICO_IPV4POOL_CIDR</span>
<span class="token comment">#3889行               value: &quot;172.20.0.0/16&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_1-3-4-安装kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#_1-3-4-安装kubernetes-dashboard"><span>1.3.4 安装kubernetes-dashboard</span></a></h4><ul><li><p>通过kubectl命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>对外暴露访问端口</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 对外暴露访问端口，由--type=ClusterIP修改为--type=NodePort</span>
kubectl edit svc kubernetes-dashboard <span class="token parameter variable">-n</span> kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看端口：<strong>32271</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -A | grep kubernetes-dashboard</span>
kubernetes-dashboard   dashboard-metrics-scraper   ClusterIP   <span class="token number">10.100</span>.244.187   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP                 5d13h
kubernetes-dashboard   kubernetes-dashboard        NodePort    <span class="token number">10.100</span>.16.109    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32271/TCP            5d13h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建dashboard用户</p><p>先创建一个<code>yaml</code>文件<code>vi k8s-dashboard-account.yaml</code> 加入如下配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f k8s-dashboard-account.yaml</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl -n kube-system  create token admin-user</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get secret -n kube-system|grep  kubernetes-dashboard-token</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get secret -n kube-system|grep admin|awk &#39;{print $1}&#39;</span>
admin-user-token-jb4rc
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment">#  kubectl describe secret admin-user-token-jb4rc  -n kube-system|awk &#39;/^token/ {print $2}&#39;</span>
eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCdTBkZ0pPaEZvX1RPOHEwUXZkZVBDTzE5VE1OTVNDOVd4c0hPQ2tjTGcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWpiNHJjIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIyOTRmYTc4MC0wN2M5LTRkZDUtYjA5MS1iZTI3MWYzOGRmNGEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.H4e2f7SmgOkQ0YOEWMwKQ5uzXcQ-j1Q7zK44oKNCfZmkqOF63N55kho8ojCAQVbhFgwm3LqK5nLFd6CDK4H9lF9M1j36uRPwC9iO8wLdcOh_xmVCvw9AVMLVS8dzfnopFLPB-ImtbTJUAo0h3mF-ChHqUVlDeSXE9DaFSTpvKdDAGftKx4CjgRKgJWUhIqFytcilwjr6yErMK3SyzjaBgVYlryMD1-0t0ecoTraH5vE4l8lw7aTeW_pbwrvgpqpzNm9GtnC3OtHQQUZQOCiugZY9Ak9ff5zf7uVmjrL9Hcc3jgtd7KpEpUcPVhHDp_laaU4JTFg3Lco3ho-SJGSQEw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录 可以用集群的任意ip:端口访问 <code>https://192.168.1.82:32271</code></p><figure><img src="`+t+`" alt="image-20231230171159244" tabindex="0" loading="lazy"><figcaption>image-20231230171159244</figcaption></figure></li></ul><h2 id="_2-集群实战" tabindex="-1"><a class="header-anchor" href="#_2-集群实战"><span>2. 集群实战</span></a></h2><h3 id="_2-1-创建namespace" tabindex="-1"><a class="header-anchor" href="#_2-1-创建namespace"><span>2.1 创建namespace</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>namespace用来隔离资源，但并不隔离网络
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><figure><img src="`+i+`" alt="image-20231230173843993" tabindex="0" loading="lazy"><figcaption>image-20231230173843993</figcaption></figure><h4 id="_2-1-1-命令行方式" tabindex="-1"><a class="header-anchor" href="#_2-1-1-命令行方式"><span>2.1.1 命令行方式</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建namespace（ns）</span>
kubectl create ns hello
<span class="token comment"># 删除namespace</span>
kubectl delete ns hello
<span class="token comment"># 查看namespace</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ns</span>
NAME                   STATUS   AGE
default                Active   5d15h
kube-node-lease        Active   5d15h
kube-public            Active   5d15h
kube-system            Active   5d15h
kubernetes-dashboard   Active   5d15h
<span class="token comment"># 查看应用 -A 所有namespace下的， 如果想看某个namespace下的 kubectl get pods -n kubernetes-dashboard</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -A</span>
NAMESPACE              NAME                                         READY   STATUS    RESTARTS   AGE
kube-system            calico-kube-controllers-bc4f7c685-p4qm5      <span class="token number">1</span>/1     Running   <span class="token number">2</span>          5d15h
kube-system            calico-node-6rpfn                            <span class="token number">1</span>/1     Running   <span class="token number">2</span>          5d15h
kube-system            calico-node-gls67                            <span class="token number">1</span>/1     Running   <span class="token number">2</span>          5d15h
kube-system            calico-node-kwwf6                            <span class="token number">1</span>/1     Running   <span class="token number">2</span>          5d15h



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-yaml方式" tabindex="-1"><a class="header-anchor" href="#_2-1-2-yaml方式"><span>2.1.2 yaml方式</span></a></h4><ul><li><p>创建<code>hello.yaml</code>文件，写入如下</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
	<span class="token key atrule">name</span><span class="token punctuation">:</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用 <code>hello.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> hello.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_2-2-pod" tabindex="-1"><a class="header-anchor" href="#_2-2-pod"><span>2.2 Pod</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>运行中的一组容器，Pod是Kubernetes中应用的最小单位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><figure><img src="`+l+'" alt="image-20231230183325709" tabindex="0" loading="lazy"><figcaption>image-20231230183325709</figcaption></figure><figure><img src="'+p+`" alt="image-20231230185633611" tabindex="0" loading="lazy"><figcaption>image-20231230185633611</figcaption></figure><h4 id="_2-2-1-命令行方式" tabindex="-1"><a class="header-anchor" href="#_2-2-1-命令行方式"><span>2.2.1 命令行方式</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl run mynginx --image=nginx</span>
pod/mynginx created
<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod</span>
NAME      READY   STATUS    RESTARTS   AGE
mynginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          32s
<span class="token comment"># 查看 mynginx 创建过程</span>
kubectl describe pod mynginx
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod mynginx</span>
<span class="token comment">#################  ---------------------------查看描述开始--------------------------------   #######################</span>
Name:         mynginx
Namespace:    default
Priority:     <span class="token number">0</span>
Node:         k8s-node1/192.168.1.82
Start Time:   Sat, <span class="token number">30</span> Dec <span class="token number">2023</span> <span class="token number">19</span>:04:05 +0800
Labels:       <span class="token assign-left variable">run</span><span class="token operator">=</span>mynginx
Annotations:  cni.projectcalico.org/podIP: <span class="token number">192.168</span>.36.65/32
              cni.projectcalico.org/podIPs: <span class="token number">192.168</span>.36.65/32
Status:       Running
IP:           <span class="token number">192.168</span>.36.65
IPs:
  IP:  <span class="token number">192.168</span>.36.65
Containers:
  mynginx:
    Container ID:   docker://cc10dd32214787b1e9a8324efe2b28fdc77f80c24df689fe3855c16c0fbc5177
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:0d17b565c37bcbd895e9d92315a05c1c3c9a29f762b011a10c54a66cd53c9b31
    Port:           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Host Port:      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    State:          Running
      Started:      Sat, <span class="token number">30</span> Dec <span class="token number">2023</span> <span class="token number">19</span>:04:18 +0800
    Ready:          True
    Restart Count:  <span class="token number">0</span>
    Environment:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-qp8t4 <span class="token punctuation">(</span>ro<span class="token punctuation">)</span>
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-qp8t4:
    Type:        Secret <span class="token punctuation">(</span>a volume populated by a Secret<span class="token punctuation">)</span>
    SecretName:  default-token-qp8t4
    Optional:    <span class="token boolean">false</span>
QoS Class:       BestEffort
Node-Selectors:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Tolerations:     node.kubernetes.io/not-ready:NoExecute <span class="token assign-left variable">op</span><span class="token operator">=</span>Exists <span class="token keyword">for</span> 300s
                 node.kubernetes.io/unreachable:NoExecute <span class="token assign-left variable">op</span><span class="token operator">=</span>Exists <span class="token keyword">for</span> 300s
Events:  <span class="token comment"># 事件</span>
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  3m58s  default-scheduler  Successfully assigned default/mynginx to k8s-node1
  Normal  Pulling    3m58s  kubelet            Pulling image <span class="token string">&quot;nginx&quot;</span>
  Normal  Pulled     3m47s  kubelet            Successfully pulled image <span class="token string">&quot;nginx&quot;</span> <span class="token keyword">in</span> <span class="token number">10</span>.746888323s
  Normal  Created    3m47s  kubelet            Created container mynginx
  Normal  Started    3m46s  kubelet            Started container mynginx
<span class="token comment">#################  ---------------------------查看描述结束--------------------------------   #######################</span>

<span class="token comment"># 删除pod</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod mynginx -n default</span>
pod <span class="token string">&quot;mynginx&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-yaml方式" tabindex="-1"><a class="header-anchor" href="#_2-2-2-yaml方式"><span>2.2.2 yaml方式</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> mynginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mynginx <span class="token comment"># pod名字</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment"># 容器</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx <span class="token comment"># 镜像的名字</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mynginx <span class="token comment"># 容器的名字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pod</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f mynginxpod.yaml</span>
pod/mynginx created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以yaml文件方式创建的pod 删除pod</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f mynginxpod.yaml</span>
pod <span class="token string">&quot;mynginx&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-可视化界面yaml方式" tabindex="-1"><a class="header-anchor" href="#_2-2-3-可视化界面yaml方式"><span>2.2.3 可视化界面yaml方式</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> mynginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mynginx <span class="token comment"># pod名字</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment"># 容器</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx <span class="token comment"># 镜像的名字</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mynginx <span class="token comment"># 容器的名字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看pod 的日志</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl logs -f mynginx</span>
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking <span class="token keyword">for</span> shell scripts <span class="token keyword">in</span> /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
<span class="token number">10</span>-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
<span class="token number">10</span>-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 <span class="token keyword">in</span> /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete<span class="token punctuation">;</span> ready <span class="token keyword">for</span> start up
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: using the &quot;epoll&quot; event method</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: nginx/1.21.5</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: OS: Linux 3.10.0-1160.el7.x86_64</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: start worker processes</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: start worker process 31</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: start worker process 32</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: start worker process 33</span>
<span class="token number">2023</span>/12/30 <span class="token number">11</span>:32:34 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> <span class="token number">1</span><span class="token comment">#1: start worker process 34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看pod更完善的信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#每个pod - k8s 都会分配一个ip 使用 kubectl get pod -owide查看</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -owide</span>
NAME      READY   STATUS    RESTARTS   AGE     IP              NODE        NOMINATED NODE   READINESS GATES
mynginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          6m27s   <span class="token number">192.168</span>.36.67   k8s-node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要更改里面的内容，需要进入里面 命令： <code>kubectl exec -it mynginx -- /bin/bash</code>sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod</span>
NAME      READY   STATUS    RESTARTS   AGE
mynginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          11m

<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it mynginx -- /bin/bash</span>
root@mynginx:/<span class="token comment"># ls /usr/share/nginx/html/</span>
50x.html  index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-多个应用" tabindex="-1"><a class="header-anchor" href="#_2-2-4-多个应用"><span>2.2.4 多个应用</span></a></h4><p>一个pod里部署多个应用</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> mulapply
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mulapply <span class="token comment"># pod名字</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment"># 容器</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx <span class="token comment"># 镜像的名字</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx <span class="token comment"># 容器的名字</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>8.5.68 <span class="token comment"># 镜像的名字</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat <span class="token comment"># 容器的名字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f mulapply.yaml</span>
pod/mulapply created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>每隔1s输出 pod</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> kubectl get pod

Every <span class="token number">1</span>.0s: kubectl get pod                                                                                                                                                                                                                                      Sat Dec <span class="token number">30</span> <span class="token number">19</span>:58:49 <span class="token number">2023</span>

NAME       READY   STATUS    RESTARTS   AGE
mulapply   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          2m8s
mynginx    <span class="token number">1</span>/1     Running   <span class="token number">0</span>          26m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-deployment" tabindex="-1"><a class="header-anchor" href="#_2-3-deployment"><span>2.3 Deployment</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>控制Pod，使Pod拥有多副本，自愈，扩缩容等能力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="_2-3-1-使用命令的方式创建" tabindex="-1"><a class="header-anchor" href="#_2-3-1-使用命令的方式创建"><span>2.3.1 使用命令的方式创建</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 先创建pod 和创建deployment作对比</span>
 kubectl run mynginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx

 <span class="token comment"># 创建deployment</span>
 kubectl create deployment mytomcat <span class="token parameter variable">--image</span><span class="token operator">=</span>tomcat:8.5.68

<span class="token comment">#####  多副本的创建方式</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl create deployment mynginxMul --image=nginx --replicas=3</span>
deployment.apps/mytomcat created
<span class="token comment"># 查看 pod</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod</span>
NAME                        READY   STATUS    RESTARTS   AGE
mytomcat-6f5f895f4f-bw2vf   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s
mytomcat-6f5f895f4f-grshf   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s
mytomcat-6f5f895f4f-n89z5   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s

<span class="token comment"># 查看 deploy</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy</span>
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
mynginx-mul   <span class="token number">3</span>/3     <span class="token number">3</span>            <span class="token number">3</span>           52s

<span class="token comment"># 删除deployment</span>
kubectl delete deploy mytomcat



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-可视化界面创建" tabindex="-1"><a class="header-anchor" href="#_2-3-2-可视化界面创建"><span>2.3.2 可视化界面创建</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: my-deploy
  name: my-deploy <span class="token comment"># Deployment名字</span>
spec:
  replicas: <span class="token number">3</span> <span class="token comment"># 副本数量</span>
  selector:
    matchLabels:
      app: my-deploy
  template:
    metadata:
      labels:
       app: my-deploy
    spec:
      containers: <span class="token comment"># 容器</span>
      - image: nginx <span class="token comment"># 镜像的名字</span>
        name: nginx <span class="token comment"># 容器的名字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-3-扩缩容" tabindex="-1"><a class="header-anchor" href="#_2-3-3-扩缩容"><span>2.3.3 扩缩容</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 扩容</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl scale --replicas=5 deploy/my-deploy</span>
deployment.apps/my-deploy scaled
<span class="token comment"># 缩容</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl scale --replicas=2 deploy/my-deploy</span>
deployment.apps/my-deploy scale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用以下的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl edit deploy my-deploy</span>
deployment.apps/my-deploy edited
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-4-自愈-故障转移" tabindex="-1"><a class="header-anchor" href="#_2-3-4-自愈-故障转移"><span>2.3.4 自愈&amp;故障转移</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># k8s提供的监控</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -w</span>
NAME                         READY   STATUS    RESTARTS   AGE
my-deploy-779ddd99b6-2scgh   <span class="token number">1</span>/1     Running   <span class="token number">1</span>          4m51s
my-deploy-779ddd99b6-kk768   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          17m
my-deploy-779ddd99b6-kssvh   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          21m
my-deploy-779ddd99b6-2scgh   <span class="token number">1</span>/1     Terminating   <span class="token number">1</span>          9m9s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     Pending       <span class="token number">0</span>          0s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     Pending       <span class="token number">0</span>          0s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          1s
my-deploy-779ddd99b6-7jfbg   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          17s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-5-滚动更新" tabindex="-1"><a class="header-anchor" href="#_2-3-5-滚动更新"><span>2.3.5 滚动更新</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看部署使用的是什么镜像</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy my-deploy -oyaml</span>
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: <span class="token string">&quot;1&quot;</span>
    kubectl.kubernetes.io/last-applied-configuration: <span class="token operator">|</span>
      <span class="token punctuation">{</span><span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;apps/v1&quot;</span>,<span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Deployment&quot;</span>,<span class="token string">&quot;metadata&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;annotations&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>,<span class="token string">&quot;labels&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;app&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;my-deploy&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;my-deploy&quot;</span>,<span class="token string">&quot;namespace&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;spec&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;replicas&quot;</span>:3,<span class="token string">&quot;selector&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;matchLabels&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;app&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;my-deploy&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token string">&quot;template&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;metadata&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;labels&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;app&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;my-deploy&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token string">&quot;spec&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;containers&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;image&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;nginx&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;nginx&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
  creationTimestamp: <span class="token string">&quot;2023-12-30T12:42:13Z&quot;</span>
  generation: <span class="token number">4</span>
  labels:
    app: my-deploy
  managedFields:
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:metadata:
        f:annotations:
          .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          f:kubectl.kubernetes.io/last-applied-configuration: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:labels:
          .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          f:app: <span class="token punctuation">{</span><span class="token punctuation">}</span>
      f:spec:
        f:progressDeadlineSeconds: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:revisionHistoryLimit: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:selector: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:strategy:
          f:rollingUpdate:
            .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:maxSurge: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:maxUnavailable: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          f:type: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:template:
          f:metadata:
            f:labels:
              .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
              f:app: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          f:spec:
            f:containers:
              k:<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;nginx&quot;</span><span class="token punctuation">}</span>:
                .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:image: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:imagePullPolicy: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:name: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:resources: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:terminationMessagePath: <span class="token punctuation">{</span><span class="token punctuation">}</span>
                f:terminationMessagePolicy: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:dnsPolicy: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:restartPolicy: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:schedulerName: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:securityContext: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:terminationGracePeriodSeconds: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    manager: kubectl-client-side-apply
    operation: Update
    time: <span class="token string">&quot;2023-12-30T12:42:13Z&quot;</span>
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:spec:
        f:replicas: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    manager: kubectl-edit
    operation: Update
    time: <span class="token string">&quot;2023-12-30T12:48:19Z&quot;</span>
  - apiVersion: apps/v1
    fieldsType: FieldsV1
    fieldsV1:
      f:metadata:
        f:annotations:
          f:deployment.kubernetes.io/revision: <span class="token punctuation">{</span><span class="token punctuation">}</span>
      f:status:
        f:availableReplicas: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:conditions:
          .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          k:<span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Available&quot;</span><span class="token punctuation">}</span>:
            .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:lastTransitionTime: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:lastUpdateTime: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:message: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:reason: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:status: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:type: <span class="token punctuation">{</span><span class="token punctuation">}</span>
          k:<span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Progressing&quot;</span><span class="token punctuation">}</span>:
            .: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:lastTransitionTime: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:lastUpdateTime: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:message: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:reason: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:status: <span class="token punctuation">{</span><span class="token punctuation">}</span>
            f:type: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:observedGeneration: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:readyReplicas: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:replicas: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        f:updatedReplicas: <span class="token punctuation">{</span><span class="token punctuation">}</span>
    manager: kube-controller-manager
    operation: Update
    time: <span class="token string">&quot;2023-12-30T13:07:58Z&quot;</span>
  name: my-deploy
  namespace: default
  resourceVersion: <span class="token string">&quot;33077&quot;</span>
  uid: 1ab50694-431d-4a1f-a4ff-a0c2ded647db
spec:
  progressDeadlineSeconds: <span class="token number">600</span>
  replicas: <span class="token number">3</span>
  revisionHistoryLimit: <span class="token number">10</span>
  selector:
    matchLabels:
      app: my-deploy
  strategy:
    rollingUpdate:
      maxSurge: <span class="token number">25</span>%
      maxUnavailable: <span class="token number">25</span>%
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
        resources: <span class="token punctuation">{</span><span class="token punctuation">}</span>
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: <span class="token punctuation">{</span><span class="token punctuation">}</span>
      terminationGracePeriodSeconds: <span class="token number">30</span>
status:
  availableReplicas: <span class="token number">3</span>
  conditions:
  - lastTransitionTime: <span class="token string">&quot;2023-12-30T12:42:13Z&quot;</span>
    lastUpdateTime: <span class="token string">&quot;2023-12-30T12:42:33Z&quot;</span>
    message: ReplicaSet <span class="token string">&quot;my-deploy-779ddd99b6&quot;</span> has successfully progressed.
    reason: NewReplicaSetAvailable
    status: <span class="token string">&quot;True&quot;</span>
    type: Progressing
  - lastTransitionTime: <span class="token string">&quot;2023-12-30T13:07:58Z&quot;</span>
    lastUpdateTime: <span class="token string">&quot;2023-12-30T13:07:58Z&quot;</span>
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: <span class="token string">&quot;True&quot;</span>
    type: Available
  observedGeneration: <span class="token number">4</span>
  readyReplicas: <span class="token number">3</span>
  replicas: <span class="token number">3</span>
  updatedReplicas: <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>滚动更新</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">set</span> image deployment/my-deploy <span class="token assign-left variable">nginx</span><span class="token operator">=</span>nginx:1.16.1 <span class="token parameter variable">--record</span>

kubectl rollout status deployment/my-deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># watch -n 1 kubectl get pod -owide</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -w</span>
NAME                         READY   STATUS    RESTARTS   AGE
my-deploy-779ddd99b6-7jfbg   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8m10s
my-deploy-779ddd99b6-kk768   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          30m
my-deploy-779ddd99b6-kssvh   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          33m

my-deploy-577584cf55-xrssd   <span class="token number">0</span>/1     Pending   <span class="token number">0</span>          0s
my-deploy-577584cf55-xrssd   <span class="token number">0</span>/1     Pending   <span class="token number">0</span>          0s
my-deploy-577584cf55-xrssd   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
my-deploy-577584cf55-xrssd   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          1s
my-deploy-577584cf55-xrssd   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          25s
my-deploy-779ddd99b6-7jfbg   <span class="token number">1</span>/1     Terminating         <span class="token number">0</span>          8m49s
my-deploy-577584cf55-mxgvg   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
my-deploy-577584cf55-mxgvg   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
my-deploy-577584cf55-mxgvg   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
my-deploy-577584cf55-mxgvg   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          1s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          8m51s
my-deploy-577584cf55-mxgvg   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
my-deploy-779ddd99b6-kk768   <span class="token number">1</span>/1     Terminating         <span class="token number">0</span>          31m
my-deploy-577584cf55-7k9fs   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
my-deploy-577584cf55-7k9fs   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
my-deploy-577584cf55-7k9fs   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          8m52s
my-deploy-779ddd99b6-7jfbg   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          8m52s
my-deploy-577584cf55-7k9fs   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          1s
my-deploy-779ddd99b6-kk768   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          31m
my-deploy-577584cf55-7k9fs   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
my-deploy-779ddd99b6-kssvh   <span class="token number">1</span>/1     Terminating         <span class="token number">0</span>          34m
my-deploy-779ddd99b6-kk768   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          31m
my-deploy-779ddd99b6-kk768   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          31m
my-deploy-779ddd99b6-kssvh   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m
my-deploy-779ddd99b6-kssvh   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m
my-deploy-779ddd99b6-kssvh   <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-6-版本回退" tabindex="-1"><a class="header-anchor" href="#_2-3-6-版本回退"><span>2.3.6 版本回退</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 历史记录</span>
kubectl rollout <span class="token function">history</span> deployment/my-deploy

<span class="token comment"># 查看某个历史详情</span>
kubectl rollout <span class="token function">history</span> deployment/my-deploy <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 回滚(回到上次)</span>
kubectl rollout undo deployment/my-deploy

<span class="token comment"># 回滚(回到指定版本)</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout undo deployment/my-deploy --to-revision=1</span>
deployment.apps/my-deploy rolled back
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-工作负载" tabindex="-1"><a class="header-anchor" href="#_2-4-工作负载"><span>2.4 工作负载</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>除了Deployment，k8s还有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>StatefulSet</code>，<code>DaemonSet</code>，<code>Job</code>等类型资源。我们称为<code>工作负载</code>。</p><p>有状态应用使用<code>StatefulSet</code>部署，无状态应用使用<code>Deployment</code>部署</p><p>https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/</p></blockquote><figure><img src="`+c+`" alt="image-20231230214836030" tabindex="0" loading="lazy"><figcaption>image-20231230214836030</figcaption></figure><p>Deployment：无状态应用部署，比如微服务，提供多副本等功能 StatefulSet: 有状态应用部署，比如redis，提供稳定的存储，网络等功能 DaemonSet: 守护型应用部署，比如日志收集组件，在每个机器都能运行一份 Job/CronJob: 定时任务部署，比如垃圾清理组件，可以在指定时间运行</p><h3 id="_2-5-service" tabindex="-1"><a class="header-anchor" href="#_2-5-service"><span>2.5 Service</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>将一组Pods公开为网络服务的抽象方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 暴露Deploy</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl expose deployment my-deploy --port=8080 --target-port=80 --type=NodePort #</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl expose deployment my-deploy --port=8080 --target-port=80 --type=ClusterIP</span>
service/my-deploy exposed
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get service</span>
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>    AGE
kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP    5d19h
my-deploy    ClusterIP   <span class="token number">10.98</span>.22.102   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8080</span>/TCP   20s
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># ^C</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">2222</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">1111</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">3333</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">2222</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">1111</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">3333</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">1111</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">3333</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">2222</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">2222</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">1111</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># curl 10.98.22.102:8080</span>
<span class="token number">2222</span>

<span class="token comment"># 使用标签检索pod</span>
kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>mydeploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yaml方式暴露</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: v1
kind: Sevice
metadata:
  labels:
    app: my-deploy
  name: my-deploy
spec:
  selector:
    app: my-deploy
   ports:
   - port: <span class="token number">8080</span>
     protocol: TCP
     targetPort: <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务名.所在名称空间.svc</strong></p><h3 id="_2-6-ingress" tabindex="-1"><a class="header-anchor" href="#_2-6-ingress"><span>2.6 Ingress</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>curl upload.thylove.cn/k8s/ingress.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -A</span>
NAMESPACE              NAME                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
default                kubernetes                           ClusterIP   <span class="token number">10.96</span>.0.1        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      6d15h
ingress-nginx          ingress-nginx-controller             NodePort    <span class="token number">10.97</span>.173.198    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30070/TCP,443:32128/TCP   6m59s
ingress-nginx          ingress-nginx-controller-admission   ClusterIP   <span class="token number">10.108</span>.83.243    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      6m59s
kube-system            kube-dns                             ClusterIP   <span class="token number">10.96</span>.0.10       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP,9153/TCP       6d15h
kubernetes-dashboard   dashboard-metrics-scraper            ClusterIP   <span class="token number">10.100</span>.244.187   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>/TCP                     6d15h
kubernetes-dashboard   kubernetes-dashboard                 NodePort    <span class="token number">10.100</span>.16.109    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>:32271/TCP                6d15h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http://192.168.1.81:30070/</p><p>http://192.168.1.81:32128/</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>qingdao.aliyuncs.com/docker_dsq/thylove<span class="token punctuation">-</span>prototype<span class="token punctuation">:</span>v1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containnerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
  <span class="token key atrule">name</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetProt</span><span class="token punctuation">:</span> <span class="token number">8080</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>域名访问：</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>host<span class="token punctuation">-</span>bar
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;thylove.prototype.cn&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> thylove<span class="token punctuation">-</span>prototype
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,107),u=[d];function r(m,v){return s(),a("div",null,u)}const g=n(o,[["render",r],["__file","kubernetes.html.vue"]]),h=JSON.parse('{"path":"/zh/codenotes/back-end/kubernetes/kubernetes.html","title":"k8s部署教程","lang":"zh-CN","frontmatter":{"title":"k8s部署教程","icon":"java","category":["后端","java"],"tag":["k8s部署教程","Centos7","Docker","kubectl"],"sticky":false,"star":false,"article":false,"timeline":false,"description":"K8S（kubernetes） 1. 集群部署 1.1 集群规划 1.1.1 软件环境 1.1.2 节点配置 1.2 准备工作 1.2.1 修改host配置 1.2.2 配置ssh免密登录 先生成公钥对，再把公钥远程复制到所有节点 1.2.3 关闭Swap分区 1.2.4 禁用SELinux 1.2.5 关闭防火墙 修改内核参数 1.2.6 配置集群时...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs-new/zh/codenotes/back-end/kubernetes/kubernetes.html"}],["meta",{"property":"og:site_name","content":"代码笔记"}],["meta",{"property":"og:title","content":"k8s部署教程"}],["meta",{"property":"og:description","content":"K8S（kubernetes） 1. 集群部署 1.1 集群规划 1.1.1 软件环境 1.1.2 节点配置 1.2 准备工作 1.2.1 修改host配置 1.2.2 配置ssh免密登录 先生成公钥对，再把公钥远程复制到所有节点 1.2.3 关闭Swap分区 1.2.4 禁用SELinux 1.2.5 关闭防火墙 修改内核参数 1.2.6 配置集群时..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T18:37:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Bing"}],["meta",{"property":"article:tag","content":"k8s部署教程"}],["meta",{"property":"article:tag","content":"Centos7"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"kubectl"}],["meta",{"property":"article:modified_time","content":"2024-04-20T18:37:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"k8s部署教程\\",\\"description\\":\\"K8S（kubernetes） 1. 集群部署 1.1 集群规划 1.1.1 软件环境 1.1.2 节点配置 1.2 准备工作 1.2.1 修改host配置 1.2.2 配置ssh免密登录 先生成公钥对，再把公钥远程复制到所有节点 1.2.3 关闭Swap分区 1.2.4 禁用SELinux 1.2.5 关闭防火墙 修改内核参数 1.2.6 配置集群时...\\"}"]]},"headers":[{"level":2,"title":"1. 集群部署","slug":"_1-集群部署","link":"#_1-集群部署","children":[{"level":3,"title":"1.1 集群规划","slug":"_1-1-集群规划","link":"#_1-1-集群规划","children":[]},{"level":3,"title":"1.2 准备工作","slug":"_1-2-准备工作","link":"#_1-2-准备工作","children":[]},{"level":3,"title":"1.3 安装软件","slug":"_1-3-安装软件","link":"#_1-3-安装软件","children":[]}]},{"level":2,"title":"2. 集群实战","slug":"_2-集群实战","link":"#_2-集群实战","children":[{"level":3,"title":"2.1 创建namespace","slug":"_2-1-创建namespace","link":"#_2-1-创建namespace","children":[]},{"level":3,"title":"2.2 Pod","slug":"_2-2-pod","link":"#_2-2-pod","children":[]},{"level":3,"title":"2.3 Deployment","slug":"_2-3-deployment","link":"#_2-3-deployment","children":[]},{"level":3,"title":"2.4 工作负载","slug":"_2-4-工作负载","link":"#_2-4-工作负载","children":[]},{"level":3,"title":"2.5 Service","slug":"_2-5-service","link":"#_2-5-service","children":[]},{"level":3,"title":"2.6 Ingress","slug":"_2-6-ingress","link":"#_2-6-ingress","children":[]}]}],"git":{"createdTime":1713638264000,"updatedTime":1713638264000,"contributors":[{"name":"thylove-dsq","email":"wbthylove@163.com","commits":1}]},"readingTime":{"minutes":13.21,"words":3963},"filePathRelative":"zh/codenotes/back-end/kubernetes/kubernetes.md","localizedDate":"2024年4月21日","autoDesc":true}');export{g as comp,h as data};
