---
# 当前页面内容标题
title: Git使用教程
# 当前页面图标
icon: git
---




## branch

### 1.1 push时的问题


![image-20210731143401460](../../../../.vuepress/public/assets/image/git/git.png)

[//]: # (![image-20210731143401460]&#40;D:\office\mbs\my-docs\src\.vuepress\public\assets\image\docker\image-20210731143401460.png&#41;)





```bash
Logon failed, use ctrl+c to cancel basic credential prompt.
Username for 'https://github.com': wbthylove
No refs in common and none specified; doing nothing.
Perhaps you should specify a branch such as 'master'.
Everything up-to-date
```

> ​	`git push origin master`

* 1、git push origin master 指定远程仓库名和分支名。

* 2、git push 不指定远程仓库名和分支名。

  * 不特定指出“远程仓库名和分支名”，一般是使用默认配置，配置文件(.git/config)相关内容为：

    ```bash
    [branch "master"]
        remote = origin
        merge = refs/heads/master
    ```

  * 如果不想或者不会编辑config文件的话，可以在bush上输入如下命令行：

    ```bash
    $ git config branch.master.remote origin
    $ git config branch.master.merge refs/heads/master
    ```

* 3、这两者的区别：git push是git push origin master的一种简写形式

  * 当你关联了两个多个仓库、有多个分支时，git push可能会报错，因为它不知道要上传代码到哪里去；而git push origin master指定仓库和分支，就不会报错。
  * 如果本地分支都有关联远程仓库，而且有两个远程仓库，那么如果使用git push ，默认是使用你最近使用的那个远程仓库

* 4、建议使用 git push origin master

  ```bash
  # 查看远程仓库的数量（简单信息）
  git remote -v

  # 查看某个远程仓库的具体信息，以origin为例：
  git remote show origin

  # 查看分支信息
  git branch
  ```

  ### 1.2 、创建分支切换

```bash
#创建分支 并切换到新分支
$ git checkout -b iss53
Switched to a new branch "iss53"
```

这是由下面的两条的简写：

```bash
#创建分支
$ git branch iss53
#切换分支
$ git checkout iss53
```

### 1.3、删除分支

你可以使用带 `-d` 选项的 `git branch` 命令来删除分支：

```bash
$ git branch -d hotfix
Deleted branch hotfix (3a0874c).
```

### 1.4、合并分支

你在 `hotfix` 分支上所做的工作并没有包含到 `iss53` 分支中。 如果你需要拉取 `hotfix` 所做的修改，你可以使用 `git merge master` 命令将 `master` 分支合并入 `iss53` 分支，或者你也可以等到 `iss53` 分支完成其使命，再将其合并回 `master` 分支。

### 分支的合并

假设你已经修正了 #53 问题，并且打算将你的工作合并入 `master` 分支。 为此，你需要合并 `iss53` 分支到 `master` 分支，这和之前你合并 `hotfix` 分支所做的工作差不多。 你只需要检出到你想合并入的分支，然后运行 `git merge` 命令：

```bash
$ git checkout master
Switched to branch 'master'
$ git merge iss53
Merge made by the 'recursive' strategy.
index.html |    1 +
1 file changed, 1 insertion(+)
```
