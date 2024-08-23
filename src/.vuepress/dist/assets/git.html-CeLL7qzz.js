import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-BonI-dzh.js";const n="/assets/git-CxGXp0Ig.png",h={},t=e('<h2 id="branch" tabindex="-1"><a class="header-anchor" href="#branch"><span>branch</span></a></h2><h3 id="_1-1-push时的问题" tabindex="-1"><a class="header-anchor" href="#_1-1-push时的问题"><span>1.1 push时的问题</span></a></h3><figure><img src="'+n+`" alt="image-20210731143401460" tabindex="0" loading="lazy"><figcaption>image-20210731143401460</figcaption></figure><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Logon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> failed,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ctrl+c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cancel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> basic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> credential</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prompt.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Username</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https://github.com&#39;:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wbthylove</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> refs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> common</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> none</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> specified</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">doing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nothing.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Perhaps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> should</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> specify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;master&#39;.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Everything</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up-to-date</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>​ <code>git push origin master</code></p></blockquote><ul><li><p>1、git push origin master 指定远程仓库名和分支名。</p></li><li><p>2、git push 不指定远程仓库名和分支名。</p><ul><li><p>不特定指出“远程仓库名和分支名”，一般是使用默认配置，配置文件(.git/config)相关内容为：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[branch </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> refs/heads/master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果不想或者不会编辑config文件的话，可以在bush上输入如下命令行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch.master.remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch.master.merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> refs/heads/master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>3、这两者的区别：git push是git push origin master的一种简写形式</p><ul><li>当你关联了两个多个仓库、有多个分支时，git push可能会报错，因为它不知道要上传代码到哪里去；而git push origin master指定仓库和分支，就不会报错。</li><li>如果本地分支都有关联远程仓库，而且有两个远程仓库，那么如果使用git push ，默认是使用你最近使用的那个远程仓库</li></ul></li><li><p>4、建议使用 git push origin master</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看远程仓库的数量（简单信息）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看某个远程仓库的具体信息，以origin为例：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看分支信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-、创建分支切换" tabindex="-1"><a class="header-anchor" href="#_1-2-、创建分支切换"><span>1.2 、创建分支切换</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#创建分支 并切换到新分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iss53</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Switched</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;iss53&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是由下面的两条的简写：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#创建分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iss53</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#切换分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iss53</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、删除分支" tabindex="-1"><a class="header-anchor" href="#_1-3、删除分支"><span>1.3、删除分支</span></a></h3><p>你可以使用带 <code>-d</code> 选项的 <code>git branch</code> 命令来删除分支：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hotfix</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Deleted</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hotfix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (3a0874c).</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、合并分支" tabindex="-1"><a class="header-anchor" href="#_1-4、合并分支"><span>1.4、合并分支</span></a></h3><p>你在 <code>hotfix</code> 分支上所做的工作并没有包含到 <code>iss53</code> 分支中。 如果你需要拉取 <code>hotfix</code> 所做的修改，你可以使用 <code>git merge master</code> 命令将 <code>master</code> 分支合并入 <code>iss53</code> 分支，或者你也可以等到 <code>iss53</code> 分支完成其使命，再将其合并回 <code>master</code> 分支。</p><h3 id="分支的合并" tabindex="-1"><a class="header-anchor" href="#分支的合并"><span>分支的合并</span></a></h3><p>假设你已经修正了 #53 问题，并且打算将你的工作合并入 <code>master</code> 分支。 为此，你需要合并 <code>iss53</code> 分支到 <code>master</code> 分支，这和之前你合并 <code>hotfix</code> 分支所做的工作差不多。 你只需要检出到你想合并入的分支，然后运行 <code>git merge</code> 命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Switched</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;master&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iss53</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> made</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;recursive&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> strategy.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |    </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> changed,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> insertion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function k(p,r){return a(),s("div",null,l)}const c=i(h,[["render",k],["__file","git.html.vue"]]),o=JSON.parse('{"path":"/zh/codenotes/back-end/git/git.html","title":"Git使用教程","lang":"zh-CN","frontmatter":{"title":"Git使用教程","icon":"git","description":"branch 1.1 push时的问题 image-20210731143401460image-20210731143401460 ​ git push origin master 1、git push origin master 指定远程仓库名和分支名。 2、git push 不指定远程仓库名和分支名。 不特定指出“远程仓库名和分支名”，一般是使用...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/codenotes/back-end/git/git.html"}],["meta",{"property":"og:site_name","content":"代码笔记"}],["meta",{"property":"og:title","content":"Git使用教程"}],["meta",{"property":"og:description","content":"branch 1.1 push时的问题 image-20210731143401460image-20210731143401460 ​ git push origin master 1、git push origin master 指定远程仓库名和分支名。 2、git push 不指定远程仓库名和分支名。 不特定指出“远程仓库名和分支名”，一般是使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T11:08:57.000Z"}],["meta",{"property":"article:author","content":"Mr.Bing"}],["meta",{"property":"article:modified_time","content":"2024-08-23T11:08:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git使用教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-23T11:08:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Bing\\",\\"url\\":\\"https://thylove.cn\\"}]}"]]},"headers":[{"level":2,"title":"branch","slug":"branch","link":"#branch","children":[{"level":3,"title":"1.1 push时的问题","slug":"_1-1-push时的问题","link":"#_1-1-push时的问题","children":[]},{"level":3,"title":"1.3、删除分支","slug":"_1-3、删除分支","link":"#_1-3、删除分支","children":[]},{"level":3,"title":"1.4、合并分支","slug":"_1-4、合并分支","link":"#_1-4、合并分支","children":[]},{"level":3,"title":"分支的合并","slug":"分支的合并","link":"#分支的合并","children":[]}]}],"git":{"createdTime":1724411337000,"updatedTime":1724411337000,"contributors":[{"name":"dsq","email":"93787944@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"zh/codenotes/back-end/git/git.md","localizedDate":"2024年8月23日","autoDesc":true}');export{c as comp,o as data};
