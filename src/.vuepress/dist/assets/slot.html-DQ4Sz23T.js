import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,e as a}from"./app-BonI-dzh.js";const l={},e=a(`<h1 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h1><p><a href="http://www.vueshop.com.cn/index.php?http_referer=vuejs" target="_blank" rel="noopener noreferrer">VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 &gt;</a></p><blockquote><p>该页面假设你已经阅读过了<a href="https://cn.vuejs.org/v2/guide/components.html" target="_blank" rel="noopener noreferrer">组件基础</a>。如果你还对组件不太了解，推荐你先阅读它。</p></blockquote><blockquote><p>在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 <code>v-slot</code> 指令)。它取代了 <code>slot</code> 和 <code>slot-scope</code> 这两个目前已被废弃但未被移除且仍在<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">文档中</a>的 attribute。新语法的由来可查阅这份 <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md" target="_blank" rel="noopener noreferrer">RFC</a>。</p></blockquote><h2 id="插槽内容" tabindex="-1"><a class="header-anchor" href="#插槽内容"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9" target="_blank" rel="noopener noreferrer">插槽内容</a></span></a></h2><p>Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 <a href="https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md" target="_blank" rel="noopener noreferrer">Web Components 规范草案</a>，将 <code>&lt;slot&gt;</code> 元素作为承载分发内容的出口。</p><p>它允许你像这样合成组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span>  Your Profile</span></span>
<span class="line"><span>&lt;/navigation-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你在 <code>&lt;navigation-link&gt;</code> 的模板中可能会写为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;a</span></span>
<span class="line"><span>  v-bind:href=&quot;url&quot;</span></span>
<span class="line"><span>  class=&quot;nav-link&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>  &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/a&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当组件渲染的时候，<code>&lt;slot&gt;&lt;/slot&gt;</code> 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 添加一个 Font Awesome 图标 --&gt;</span></span>
<span class="line"><span>  &lt;span class=&quot;fa fa-user&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  Your Profile</span></span>
<span class="line"><span>&lt;/navigation-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至其它的组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 添加一个图标的组件 --&gt;</span></span>
<span class="line"><span>  &lt;font-awesome-icon name=&quot;user&quot;&gt;&lt;/font-awesome-icon&gt;</span></span>
<span class="line"><span>  Your Profile</span></span>
<span class="line"><span>&lt;/navigation-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>&lt;navigation-link&gt;</code> 的 <code>template</code> 中<strong>没有</strong>包含一个 <code>&lt;slot&gt;</code> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。</p><h2 id="编译作用域" tabindex="-1"><a class="header-anchor" href="#编译作用域"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noopener noreferrer">编译作用域</a></span></a></h2><p>当你想在一个插槽中使用数据时，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span>  Logged in as {{ user.name }}</span></span>
<span class="line"><span>&lt;/navigation-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而<strong>不能</strong>访问 <code>&lt;navigation-link&gt;</code> 的作用域。例如 <code>url</code> 是访问不到的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span>  Clicking here will send you to: {{ url }}</span></span>
<span class="line"><span>  &lt;!--</span></span>
<span class="line"><span>  这里的 \`url\` 会是 undefined，因为其 (指该插槽的) 内容是</span></span>
<span class="line"><span>  _传递给_ &lt;navigation-link&gt; 的而不是</span></span>
<span class="line"><span>  在 &lt;navigation-link&gt; 组件*内部*定义的。</span></span>
<span class="line"><span>  --&gt;</span></span>
<span class="line"><span>&lt;/navigation-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作为一条规则，请记住：</p><blockquote><p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p></blockquote><h2 id="后备内容" tabindex="-1"><a class="header-anchor" href="#后备内容"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%90%8E%E5%A4%87%E5%86%85%E5%AE%B9" target="_blank" rel="noopener noreferrer">后备内容</a></span></a></h2><p>有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 <code>&lt;submit-button&gt;</code> 组件中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>  &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可能希望这个 <code>&lt;button&gt;</code> 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 <code>&lt;slot&gt;</code> 标签内：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>  &lt;slot&gt;Submit&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在当我在一个父级组件中使用 <code>&lt;submit-button&gt;</code> 并且不提供任何插槽内容时：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;submit-button&gt;&lt;/submit-button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>后备内容“Submit”将会被渲染：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>  Submit</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果我们提供内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;submit-button&gt;</span></span>
<span class="line"><span>  Save</span></span>
<span class="line"><span>&lt;/submit-button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则这个提供的内容将会被渲染从而取代后备内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>  Save</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">具名插槽</a></span></a></h2><blockquote><p>自 2.6.0 起有所更新。已废弃的使用 <code>slot</code> attribute 的语法在<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">这里</a>。</p></blockquote><p>有时我们需要多个插槽。例如对于一个带有如下模板的 <code>&lt;base-layout&gt;</code> 组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;!-- 我们希望把页头放这里 --&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main&gt;</span></span>
<span class="line"><span>    &lt;!-- 我们希望把主要内容放这里 --&gt;</span></span>
<span class="line"><span>  &lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;!-- 我们希望把页脚放这里 --&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这样的情况，<code>&lt;slot&gt;</code> 元素有一个特殊的 attribute：<code>name</code>。这个 attribute 可以用来定义额外的插槽：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个不带 <code>name</code> 的 <code>&lt;slot&gt;</code> 出口会带有隐含的名字“default”。</p><p>在向具名插槽提供内容的时候，我们可以在一个 <code>&lt;template&gt;</code> 元素上使用 <code>v-slot</code> 指令，并以 <code>v-slot</code> 的参数的形式提供其名称：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 <code>&lt;template&gt;</code> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 <code>v-slot</code> 的 <code>&lt;template&gt;</code> 中的内容都会被视为默认插槽的内容。</p><p>然而，如果你希望更明确一些，仍然可以在一个 <code>&lt;template&gt;</code> 中包裹默认插槽的内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template v-slot:default&gt;</span></span>
<span class="line"><span>    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何一种写法都会渲染出：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main&gt;</span></span>
<span class="line"><span>    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 <strong><code>v-slot</code> 只能添加在 <code>&lt;template&gt;</code> 上</strong> (只有<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">一种例外情况</a>)，这一点和已经废弃的 <a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer"><code>slot</code> attribute</a> 不同。</p><h2 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">作用域插槽</a></span></a></h2><blockquote><p>自 2.6.0 起有所更新。已废弃的使用 <code>slot-scope</code> attribute 的语法在<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">这里</a>。</p></blockquote><p>有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 <code>&lt;current-user&gt;</code> 组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;span&gt;</span></span>
<span class="line"><span>  &lt;slot&gt;{{ user.lastName }}&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可能想换掉备用内容，用名而非姓来显示。如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user&gt;</span></span>
<span class="line"><span>  {{ user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而上述代码不会正常工作，因为只有 <code>&lt;current-user&gt;</code> 组件可以访问到 <code>user</code> 而我们提供的内容是在父级渲染的。</p><p>为了让 <code>user</code> 在父级的插槽内容中可用，我们可以将 <code>user</code> 作为 <code>&lt;slot&gt;</code> 元素的一个 attribute 绑定上去：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;span&gt;</span></span>
<span class="line"><span>  &lt;slot v-bind:user=&quot;user&quot;&gt;</span></span>
<span class="line"><span>    {{ user.lastName }}</span></span>
<span class="line"><span>  &lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定在 <code>&lt;slot&gt;</code> 元素上的 attribute 被称为<strong>插槽 prop</strong>。现在在父级作用域中，我们可以使用带值的 <code>v-slot</code> 来定义我们提供的插槽 prop 的名字：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{ slotProps.user.firstName }}</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 <code>slotProps</code>，但你也可以使用任意你喜欢的名字。</p><h3 id="独占默认插槽的缩写语法" tabindex="-1"><a class="header-anchor" href="#独占默认插槽的缩写语法"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">独占默认插槽的缩写语法</a></span></a></h3><p>在上述情况下，当被提供的内容<em>只有</em>默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 <code>v-slot</code> 直接用在组件上：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 <code>v-slot</code> 被假定对应默认插槽：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意默认插槽的缩写语法<strong>不能</strong>和具名插槽混用，因为它会导致作用域不明确：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 无效，会导致警告 --&gt;</span></span>
<span class="line"><span>&lt;current-user v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span>  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;</span></span>
<span class="line"><span>    slotProps is NOT available here</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要出现多个插槽，请始终为<em>所有的</em>插槽使用完整的基于 <code>&lt;template&gt;</code> 的语法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{ slotProps.user.firstName }}</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构插槽-prop" tabindex="-1"><a class="header-anchor" href="#解构插槽-prop"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E8%A7%A3%E6%9E%84%E6%8F%92%E6%A7%BD-Prop" target="_blank" rel="noopener noreferrer">解构插槽 Prop</a></span></a></h3><p>作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function (slotProps) {</span></span>
<span class="line"><span>  // 插槽内容</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着 <code>v-slot</code> 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 (<a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank" rel="noopener noreferrer">单文件组件</a>或<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9" target="_blank" rel="noopener noreferrer">现代浏览器</a>)，你也可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1" target="_blank" rel="noopener noreferrer">ES2015 解构</a>来传入具体的插槽 prop，如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user v-slot=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span>  {{ user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 <code>user</code> 重命名为 <code>person</code>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user v-slot=&quot;{ user: person }&quot;&gt;</span></span>
<span class="line"><span>  {{ person.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user v-slot=&quot;{ user = { firstName: &#39;Guest&#39; } }&quot;&gt;</span></span>
<span class="line"><span>  {{ user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态插槽名" tabindex="-1"><a class="header-anchor" href="#动态插槽名"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" target="_blank" rel="noopener noreferrer">动态插槽名</a></span></a></h2><blockquote><p>2.6.0 新增</p></blockquote><p><a href="https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">动态指令参数</a>也可以用在 <code>v-slot</code> 上，来定义动态的插槽名：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:[dynamicSlotName]&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="具名插槽的缩写" tabindex="-1"><a class="header-anchor" href="#具名插槽的缩写"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99" target="_blank" rel="noopener noreferrer">具名插槽的缩写</a></span></a></h2><blockquote><p>2.6.0 新增</p></blockquote><p>跟 <code>v-on</code> 和 <code>v-bind</code> 一样，<code>v-slot</code> 也有缩写，即把参数之前的所有内容 (<code>v-slot:</code>) 替换为字符 <code>#</code>。例如 <code>v-slot:header</code> 可以被重写为 <code>#header</code>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;template #header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template #footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 这样会触发一个警告 --&gt;</span></span>
<span class="line"><span>&lt;current-user #=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span>  {{ user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;current-user #default=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span>  {{ user.firstName }}</span></span>
<span class="line"><span>&lt;/current-user&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它示例" tabindex="-1"><a class="header-anchor" href="#其它示例"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">其它示例</a></span></a></h2><p>**插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。**这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。</p><p>例如，我们要实现一个 <code>&lt;todo-list&gt;</code> 组件，它是一个列表且包含布局和过滤逻辑：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>  &lt;li</span></span>
<span class="line"><span>    v-for=&quot;todo in filteredTodos&quot;</span></span>
<span class="line"><span>    v-bind:key=&quot;todo.id&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    {{ todo.text }}</span></span>
<span class="line"><span>  &lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 <code>todo</code> 作为一个插槽 prop 进行绑定：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>  &lt;li</span></span>
<span class="line"><span>    v-for=&quot;todo in filteredTodos&quot;</span></span>
<span class="line"><span>    v-bind:key=&quot;todo.id&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;!--</span></span>
<span class="line"><span>    我们为每个 todo 准备了一个插槽，</span></span>
<span class="line"><span>    将 \`todo\` 对象作为一个插槽的 prop 传入。</span></span>
<span class="line"><span>    --&gt;</span></span>
<span class="line"><span>    &lt;slot name=&quot;todo&quot; v-bind:todo=&quot;todo&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 后备内容 --&gt;</span></span>
<span class="line"><span>      {{ todo.text }}</span></span>
<span class="line"><span>    &lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在当我们使用 <code>&lt;todo-list&gt;</code> 组件的时候，我们可以选择为 todo 定义一个不一样的 <code>&lt;template&gt;</code> 作为替代方案，并且可以从子组件获取数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;todo-list v-bind:todos=&quot;todos&quot;&gt;</span></span>
<span class="line"><span>  &lt;template v-slot:todo=&quot;{ todo }&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-if=&quot;todo.isComplete&quot;&gt;✓&lt;/span&gt;</span></span>
<span class="line"><span>    {{ todo.text }}</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/todo-list&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 <a href="https://github.com/Akryum/vue-virtual-scroller" target="_blank" rel="noopener noreferrer">Vue Virtual Scroller</a>、<a href="https://github.com/posva/vue-promised" target="_blank" rel="noopener noreferrer">Vue Promised</a> 和 <a href="https://github.com/LinusBorg/portal-vue" target="_blank" rel="noopener noreferrer">Portal Vue</a> 等库。</p><h2 id="废弃了的语法" tabindex="-1"><a class="header-anchor" href="#废弃了的语法"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">废弃了的语法</a></span></a></h2><blockquote><p><code>v-slot</code> 指令自 Vue 2.6.0 起被引入，提供更好的支持 <code>slot</code> 和 <code>slot-scope</code> attribute 的 API 替代方案。<code>v-slot</code> 完整的由来参见这份 <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md" target="_blank" rel="noopener noreferrer">RFC</a>。在接下来所有的 2.x 版本中 <code>slot</code> 和 <code>slot-scope</code> attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。</p></blockquote><h3 id="带有-slot-attribute-的具名插槽" tabindex="-1"><a class="header-anchor" href="#带有-slot-attribute-的具名插槽"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-attribute-%E7%9A%84%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">带有 <code>slot</code> attribute 的具名插槽</a></span></a></h3><blockquote><p>自 2.6.0 起被废弃。新推荐的语法请查阅<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">这里</a>。</p></blockquote><p>在 <code>&lt;template&gt;</code> 上使用特殊的 <code>slot</code> attribute，可以将内容从父级传给具名插槽 (把<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">这里</a>提到过的 <code>&lt;base-layout&gt;</code> 组件作为示例)：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;template slot=&quot;header&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template slot=&quot;footer&quot;&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接把 <code>slot</code> attribute 用在一个普通元素上：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;base-layout&gt;</span></span>
<span class="line"><span>  &lt;h1 slot=&quot;header&quot;&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;p slot=&quot;footer&quot;&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/base-layout&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里其实还有一个未命名插槽，也就是<strong>默认插槽</strong>，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main&gt;</span></span>
<span class="line"><span>    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有-slot-scope-attribute-的作用域插槽" tabindex="-1"><a class="header-anchor" href="#带有-slot-scope-attribute-的作用域插槽"><span><a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-scope-attribute-%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">带有 <code>slot-scope</code> attribute 的作用域插槽</a></span></a></h3><blockquote><p>自 2.6.0 起被废弃。新推荐的语法请查阅<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">这里</a>。</p></blockquote><p>在 <code>&lt;template&gt;</code> 上使用特殊的 <code>slot-scope</code> attribute，可以接收传递给插槽的 prop (把<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">这里</a>提到过的 <code>&lt;slot-example&gt;</code> 组件作为示例)：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;slot-example&gt;</span></span>
<span class="line"><span>  &lt;template slot=&quot;default&quot; slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{ slotProps.msg }}</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/slot-example&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>slot-scope</code> 声明了被接收的 prop 对象会作为 <code>slotProps</code> 变量存在于 <code>&lt;template&gt;</code> 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 <code>slotProps</code>。</p><p>这里的 <code>slot=&quot;default&quot;</code> 可以被忽略为隐性写法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;slot-example&gt;</span></span>
<span class="line"><span>  &lt;template slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{ slotProps.msg }}</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/slot-example&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>slot-scope</code> attribute 也可以直接用于非 <code>&lt;template&gt;</code> 元素 (包括组件)：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;slot-example&gt;</span></span>
<span class="line"><span>  &lt;span slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>    {{ slotProps.msg }}</span></span>
<span class="line"><span>  &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/slot-example&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>slot-scope</code> 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 (<a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank" rel="noopener noreferrer">单文件组件</a>或<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9" target="_blank" rel="noopener noreferrer">现代浏览器</a>)，你也可以在表达式中使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1" target="_blank" rel="noopener noreferrer">ES2015 解构</a>，如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;slot-example&gt;</span></span>
<span class="line"><span>  &lt;span slot-scope=&quot;{ msg }&quot;&gt;</span></span>
<span class="line"><span>    {{ msg }}</span></span>
<span class="line"><span>  &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/slot-example&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">这里</a>描述过的 <code>&lt;todo-list&gt;</code> 作为示例，与它等价的使用 <code>slot-scope</code> 的代码是：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">todo-list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v-bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">todos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">todos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot=&quot;todo&quot; slot-scope=&quot;{ todo }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;span v-if=&quot;todo.isComplete&quot;&gt;✓&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ todo.text }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">todo-list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 &gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。新语法的由来可查阅这份 RFC。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">插槽内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; 元素作为承载分发内容的出口。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">它允许你像这样合成组件：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Your Profile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/navigation-link&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">然后你在 &lt;navigation-link&gt; 的模板中可能会写为：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;a</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  v-bind:href=&quot;url&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  class=&quot;nav-link&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;slot&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">当组件渲染的时候，&lt;slot&gt;&lt;/slot&gt; 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;!-- 添加一个 Font Awesome 图标 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;span class=&quot;fa fa-user&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Your Profile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/navigation-link&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">甚至其它的组件：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;!-- 添加一个图标的组件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;font-awesome-icon name=&quot;user&quot;&gt;&lt;/font-awesome-icon&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Your Profile</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/navigation-link&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">如果 &lt;navigation-link&gt; 的 template 中没有包含一个 &lt;slot&gt; 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">编译作用域</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">当你想在一个插槽中使用数据时，例如：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Logged in as {{ user.name }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/navigation-link&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而不能访问 &lt;navigation-link&gt; 的作用域。例如 url 是访问不到的：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;navigation-link url=&quot;/profile&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Clicking here will send you to: {{ url }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;!--</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  这里的 \`url\` 会是 undefined，因为其 (指该插槽的) 内容是</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  _传递给_ &lt;navigation-link&gt; 的而不是</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  在 &lt;navigation-link&gt; 组件*内部*定义的。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/navigation-link&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">作为一条规则，请记住：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">后备内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 &lt;submit-button&gt; 组件中：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">我们可能希望这个 &lt;button&gt; 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 &lt;slot&gt; 标签内：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;slot&gt;Submit&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">现在当我在一个父级组件中使用 &lt;submit-button&gt; 并且不提供任何插槽内容时：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;submit-button&gt;&lt;/submit-button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">后备内容“Submit”将会被渲染：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Submit</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">但是如果我们提供内容：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;submit-button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Save</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/submit-button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">则这个提供的内容将会被渲染从而取代后备内容：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;button type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Save</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">具名插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">自 2.6.0 起有所更新。已废弃的使用 slot attribute 的语法在这里。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">有时我们需要多个插槽。例如对于一个带有如下模板的 &lt;base-layout&gt; 组件：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;!-- 我们希望把页头放这里 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;!-- 我们希望把主要内容放这里 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;!-- 我们希望把页脚放这里 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">对于这样的情况，&lt;slot&gt; 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">一个不带 name 的 &lt;slot&gt; 出口会带有隐含的名字“default”。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在向具名插槽提供内容的时候，我们可以在一个 &lt;template&gt; 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">现在 &lt;template&gt; 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 &lt;template&gt; 中的内容都会被视为默认插槽的内容。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">然而，如果你希望更明确一些，仍然可以在一个 &lt;template&gt; 中包裹默认插槽的内容：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:default&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">任何一种写法都会渲染出：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">注意 v-slot 只能添加在 &lt;template&gt; 上 (只有一种例外情况)，这一点和已经废弃的 slot attribute 不同。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">作用域插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">自 2.6.0 起有所更新。已废弃的使用 slot-scope attribute 的语法在这里。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 &lt;current-user&gt; 组件：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;slot&gt;{{ user.lastName }}&lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">我们可能想换掉备用内容，用名而非姓来显示。如下：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">然而上述代码不会正常工作，因为只有 &lt;current-user&gt; 组件可以访问到 user 而我们提供的内容是在父级渲染的。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 &lt;slot&gt; 元素的一个 attribute 绑定上去：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;slot v-bind:user=&quot;user&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ user.lastName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">绑定在 &lt;slot&gt; 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ slotProps.user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 slotProps，但你也可以使用任意你喜欢的名字。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">独占默认插槽的缩写语法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 v-slot 被假定对应默认插槽：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!-- 无效，会导致警告 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ slotProps.user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    slotProps is NOT available here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">只要出现多个插槽，请始终为所有的插槽使用完整的基于 &lt;template&gt; 的语法：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:default=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ slotProps.user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">解构插槽 Prop</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">function (slotProps) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  // 插槽内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 (单文件组件或现代浏览器)，你也可以使用 ES2015 解构来传入具体的插槽 prop，如下：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 user 重命名为 person：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot=&quot;{ user: person }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ person.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user v-slot=&quot;{ user = { firstName: &#39;Guest&#39; } }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">动态插槽名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">2.6.0 新增</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">动态指令参数也可以用在 v-slot 上，来定义动态的插槽名：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:[dynamicSlotName]&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">具名插槽的缩写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">2.6.0 新增</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template #header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template #footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!-- 这样会触发一个警告 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user #=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;current-user #default=&quot;{ user }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {{ user.firstName }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/current-user&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">其它示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">例如，我们要实现一个 &lt;todo-list&gt; 组件，它是一个列表且包含布局和过滤逻辑：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;li</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    v-for=&quot;todo in filteredTodos&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    v-bind:key=&quot;todo.id&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ todo.text }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 todo 作为一个插槽 prop 进行绑定：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;li</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    v-for=&quot;todo in filteredTodos&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    v-bind:key=&quot;todo.id&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;!--</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    我们为每个 todo 准备了一个插槽，</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    将 \`todo\` 对象作为一个插槽的 prop 传入。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;slot name=&quot;todo&quot; v-bind:todo=&quot;todo&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;!-- 后备内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      {{ todo.text }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">现在当我们使用 &lt;todo-list&gt; 组件的时候，我们可以选择为 todo 定义一个不一样的 &lt;template&gt; 作为替代方案，并且可以从子组件获取数据：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;todo-list v-bind:todos=&quot;todos&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template v-slot:todo=&quot;{ todo }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;span v-if=&quot;todo.isComplete&quot;&gt;✓&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ todo.text }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/todo-list&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 Vue Virtual Scroller、Vue Promised 和 Portal Vue 等库。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">废弃了的语法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">v-slot 指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope attribute 的 API 替代方案。v-slot 完整的由来参见这份 RFC。在接下来所有的 2.x 版本中 slot 和 slot-scope attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">带有 slot attribute 的具名插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">自 2.6.0 起被废弃。新推荐的语法请查阅这里。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在 &lt;template&gt; 上使用特殊的 slot attribute，可以将内容从父级传给具名插槽 (把这里提到过的 &lt;base-layout&gt; 组件作为示例)：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot=&quot;footer&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">或者直接把 slot attribute 用在一个普通元素上：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;h1 slot=&quot;header&quot;&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;p slot=&quot;footer&quot;&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/base-layout&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这里其实还有一个未命名插槽，也就是默认插槽，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;h1&gt;Here might be a page title&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/header&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;And another one.&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/main&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">带有 slot-scope attribute 的作用域插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">自 2.6.0 起被废弃。新推荐的语法请查阅这里。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">在 &lt;template&gt; 上使用特殊的 slot-scope attribute，可以接收传递给插槽的 prop (把这里提到过的 &lt;slot-example&gt; 组件作为示例)：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot=&quot;default&quot; slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ slotProps.msg }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这里的 slot-scope 声明了被接收的 prop 对象会作为 slotProps 变量存在于 &lt;template&gt; 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 slotProps。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">这里的 slot=&quot;default&quot; 可以被忽略为隐性写法：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ slotProps.msg }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">slot-scope attribute 也可以直接用于非 &lt;template&gt; 元素 (包括组件)：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;span slot-scope=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ slotProps.msg }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">slot-scope 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 (单文件组件或现代浏览器)，你也可以在表达式中使用 ES2015 解构，如下：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;span slot-scope=&quot;{ msg }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ msg }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/slot-example&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">使用这里描述过的 &lt;todo-list&gt; 作为示例，与它等价的使用 slot-scope 的代码是：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;todo-list v-bind:todos=&quot;todos&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;template slot=&quot;todo&quot; slot-scope=&quot;{ todo }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;span v-if=&quot;todo.isComplete&quot;&gt;✓&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {{ todo.text }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/todo-list&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,124),t=[e];function p(d,r){return i(),n("div",null,t)}const o=s(l,[["render",p],["__file","slot.html.vue"]]),v=JSON.parse('{"path":"/zh/codenotes/front-end/vue/slot.html","title":"插槽","lang":"zh-CN","frontmatter":{"title":"插槽","icon":"vue","category":["前端","vue","slot"],"tag":["vue","slot"],"sticky":false,"star":false,"article":false,"timeline":false,"description":"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/codenotes/front-end/vue/slot.html"}],["meta",{"property":"og:site_name","content":"代码笔记"}],["meta",{"property":"og:title","content":"插槽"}],["meta",{"property":"og:description","content":"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T11:08:57.000Z"}],["meta",{"property":"article:author","content":"Mr.Bing"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"slot"}],["meta",{"property":"article:modified_time","content":"2024-08-23T11:08:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"插槽\\",\\"description\\":\\"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被...\\"}"]]},"headers":[{"level":2,"title":"插槽内容","slug":"插槽内容","link":"#插槽内容","children":[]},{"level":2,"title":"编译作用域","slug":"编译作用域","link":"#编译作用域","children":[]},{"level":2,"title":"后备内容","slug":"后备内容","link":"#后备内容","children":[]},{"level":2,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[]},{"level":2,"title":"作用域插槽","slug":"作用域插槽","link":"#作用域插槽","children":[{"level":3,"title":"独占默认插槽的缩写语法","slug":"独占默认插槽的缩写语法","link":"#独占默认插槽的缩写语法","children":[]},{"level":3,"title":"解构插槽 Prop","slug":"解构插槽-prop","link":"#解构插槽-prop","children":[]}]},{"level":2,"title":"动态插槽名","slug":"动态插槽名","link":"#动态插槽名","children":[]},{"level":2,"title":"具名插槽的缩写","slug":"具名插槽的缩写","link":"#具名插槽的缩写","children":[]},{"level":2,"title":"其它示例","slug":"其它示例","link":"#其它示例","children":[]},{"level":2,"title":"废弃了的语法","slug":"废弃了的语法","link":"#废弃了的语法","children":[{"level":3,"title":"带有 slot attribute 的具名插槽","slug":"带有-slot-attribute-的具名插槽","link":"#带有-slot-attribute-的具名插槽","children":[]},{"level":3,"title":"带有 slot-scope attribute 的作用域插槽","slug":"带有-slot-scope-attribute-的作用域插槽","link":"#带有-slot-scope-attribute-的作用域插槽","children":[]}]}],"git":{"createdTime":1724411337000,"updatedTime":1724411337000,"contributors":[{"name":"dsq","email":"93787944@qq.com","commits":1}]},"readingTime":{"minutes":22.18,"words":6655},"filePathRelative":"zh/codenotes/front-end/vue/slot.md","localizedDate":"2024年8月23日","autoDesc":true}');export{o as comp,v as data};
