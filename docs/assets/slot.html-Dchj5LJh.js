import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as i,a as n,b as s,d as t,f as e}from"./app-ps5zxqTQ.js";const c={},u=n("h1",{id:"插槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插槽"},[n("span",null,"插槽")])],-1),d={href:"http://www.vueshop.com.cn/index.php?http_referer=vuejs",target:"_blank",rel:"noopener noreferrer"},r={href:"https://cn.vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"v-slot",-1),k=n("code",null,"slot",-1),g=n("code",null,"slot-scope",-1),m={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"},h={id:"插槽内容",tabindex:"-1"},q={class:"header-anchor",href:"#插槽内容"},_={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"<slot>",-1),E=e(`<p>它允许你像这样合成组件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigation-link url=&quot;/profile&quot;&gt;
  Your Profile
&lt;/navigation-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你在 <code>&lt;navigation-link&gt;</code> 的模板中可能会写为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;a
  v-bind:href=&quot;url&quot;
  class=&quot;nav-link&quot;
&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当组件渲染的时候，<code>&lt;slot&gt;&lt;/slot&gt;</code> 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigation-link url=&quot;/profile&quot;&gt;
  &lt;!-- 添加一个 Font Awesome 图标 --&gt;
  &lt;span class=&quot;fa fa-user&quot;&gt;&lt;/span&gt;
  Your Profile
&lt;/navigation-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至其它的组件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigation-link url=&quot;/profile&quot;&gt;
  &lt;!-- 添加一个图标的组件 --&gt;
  &lt;font-awesome-icon name=&quot;user&quot;&gt;&lt;/font-awesome-icon&gt;
  Your Profile
&lt;/navigation-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>&lt;navigation-link&gt;</code> 的 <code>template</code> 中<strong>没有</strong>包含一个 <code>&lt;slot&gt;</code> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。</p>`,9),A={id:"编译作用域",tabindex:"-1"},B={class:"header-anchor",href:"#编译作用域"},P={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F",target:"_blank",rel:"noopener noreferrer"},y=e(`<p>当你想在一个插槽中使用数据时，例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigation-link url=&quot;/profile&quot;&gt;
  Logged in as {{ user.name }}
&lt;/navigation-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而<strong>不能</strong>访问 <code>&lt;navigation-link&gt;</code> 的作用域。例如 <code>url</code> 是访问不到的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;navigation-link url=&quot;/profile&quot;&gt;
  Clicking here will send you to: {{ url }}
  &lt;!--
  这里的 \`url\` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ &lt;navigation-link&gt; 的而不是
  在 &lt;navigation-link&gt; 组件*内部*定义的。
  --&gt;
&lt;/navigation-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作为一条规则，请记住：</p><blockquote><p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p></blockquote>`,6),F={id:"后备内容",tabindex:"-1"},N={class:"header-anchor",href:"#后备内容"},D={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%90%8E%E5%A4%87%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},C=e(`<p>有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 <code>&lt;submit-button&gt;</code> 组件中：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button type=&quot;submit&quot;&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可能希望这个 <code>&lt;button&gt;</code> 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 <code>&lt;slot&gt;</code> 标签内：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button type=&quot;submit&quot;&gt;
  &lt;slot&gt;Submit&lt;/slot&gt;
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在当我在一个父级组件中使用 <code>&lt;submit-button&gt;</code> 并且不提供任何插槽内容时：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;submit-button&gt;&lt;/submit-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后备内容“Submit”将会被渲染：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button type=&quot;submit&quot;&gt;
  Submit
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果我们提供内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;submit-button&gt;
  Save
&lt;/submit-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则这个提供的内容将会被渲染从而取代后备内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button type=&quot;submit&quot;&gt;
  Save
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),S={id:"具名插槽",tabindex:"-1"},H={class:"header-anchor",href:"#具名插槽"},j={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"slot",-1),w={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},T=e(`<p>有时我们需要多个插槽。例如对于一个带有如下模板的 <code>&lt;base-layout&gt;</code> 组件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;!-- 我们希望把页头放这里 --&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;!-- 我们希望把主要内容放这里 --&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;!-- 我们希望把页脚放这里 --&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这样的情况，<code>&lt;slot&gt;</code> 元素有一个特殊的 attribute：<code>name</code>。这个 attribute 可以用来定义额外的插槽：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个不带 <code>name</code> 的 <code>&lt;slot&gt;</code> 出口会带有隐含的名字“default”。</p><p>在向具名插槽提供内容的时候，我们可以在一个 <code>&lt;template&gt;</code> 元素上使用 <code>v-slot</code> 指令，并以 <code>v-slot</code> 的参数的形式提供其名称：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template v-slot:footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 <code>&lt;template&gt;</code> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 <code>v-slot</code> 的 <code>&lt;template&gt;</code> 中的内容都会被视为默认插槽的内容。</p><p>然而，如果你希望更明确一些，仍然可以在一个 <code>&lt;template&gt;</code> 中包裹默认插槽的内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;template v-slot:default&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/template&gt;

  &lt;template v-slot:footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何一种写法都会渲染出：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),z=n("strong",null,[n("code",null,"v-slot"),s(" 只能添加在 "),n("code",null,"<template>"),s(" 上")],-1),J={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"slot",-1),I={id:"作用域插槽",tabindex:"-1"},Y={class:"header-anchor",href:"#作用域插槽"},O={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"slot-scope",-1),M={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},U=e(`<p>有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 <code>&lt;current-user&gt;</code> 组件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;span&gt;
  &lt;slot&gt;{{ user.lastName }}&lt;/slot&gt;
&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可能想换掉备用内容，用名而非姓来显示。如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而上述代码不会正常工作，因为只有 <code>&lt;current-user&gt;</code> 组件可以访问到 <code>user</code> 而我们提供的内容是在父级渲染的。</p><p>为了让 <code>user</code> 在父级的插槽内容中可用，我们可以将 <code>user</code> 作为 <code>&lt;slot&gt;</code> 元素的一个 attribute 绑定上去：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;span&gt;
  &lt;slot v-bind:user=&quot;user&quot;&gt;
    {{ user.lastName }}
  &lt;/slot&gt;
&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定在 <code>&lt;slot&gt;</code> 元素上的 attribute 被称为<strong>插槽 prop</strong>。现在在父级作用域中，我们可以使用带值的 <code>v-slot</code> 来定义我们提供的插槽 prop 的名字：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user&gt;
  &lt;template v-slot:default=&quot;slotProps&quot;&gt;
    {{ slotProps.user.firstName }}
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 <code>slotProps</code>，但你也可以使用任意你喜欢的名字。</p>`,10),G={id:"独占默认插槽的缩写语法",tabindex:"-1"},Z={class:"header-anchor",href:"#独占默认插槽的缩写语法"},K={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},Q=e(`<p>在上述情况下，当被提供的内容<em>只有</em>默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 <code>v-slot</code> 直接用在组件上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user v-slot:default=&quot;slotProps&quot;&gt;
  {{ slotProps.user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 <code>v-slot</code> 被假定对应默认插槽：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user v-slot=&quot;slotProps&quot;&gt;
  {{ slotProps.user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意默认插槽的缩写语法<strong>不能</strong>和具名插槽混用，因为它会导致作用域不明确：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 无效，会导致警告 --&gt;
&lt;current-user v-slot=&quot;slotProps&quot;&gt;
  {{ slotProps.user.firstName }}
  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;
    slotProps is NOT available here
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要出现多个插槽，请始终为<em>所有的</em>插槽使用完整的基于 <code>&lt;template&gt;</code> 的语法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user&gt;
  &lt;template v-slot:default=&quot;slotProps&quot;&gt;
    {{ slotProps.user.firstName }}
  &lt;/template&gt;

  &lt;template v-slot:other=&quot;otherSlotProps&quot;&gt;
    ...
  &lt;/template&gt;
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),X={id:"解构插槽-prop",tabindex:"-1"},$={class:"header-anchor",href:"#解构插槽-prop"},nn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E8%A7%A3%E6%9E%84%E6%8F%92%E6%A7%BD-Prop",target:"_blank",rel:"noopener noreferrer"},sn=e(`<p>作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function (slotProps) {
  // 插槽内容
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an=n("code",null,"v-slot",-1),tn={href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"},en={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},pn=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user v-slot=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 <code>user</code> 重命名为 <code>person</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user v-slot=&quot;{ user: person }&quot;&gt;
  {{ person.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user v-slot=&quot;{ user = { firstName: &#39;Guest&#39; } }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),on={id:"动态插槽名",tabindex:"-1"},cn={class:"header-anchor",href:"#动态插槽名"},un={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},dn=n("blockquote",null,[n("p",null,"2.6.0 新增")],-1),rn={href:"https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},vn=n("code",null,"v-slot",-1),kn=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;template v-slot:[dynamicSlotName]&gt;
    ...
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),gn={id:"具名插槽的缩写",tabindex:"-1"},mn={class:"header-anchor",href:"#具名插槽的缩写"},bn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99",target:"_blank",rel:"noopener noreferrer"},hn=e(`<blockquote><p>2.6.0 新增</p></blockquote><p>跟 <code>v-on</code> 和 <code>v-bind</code> 一样，<code>v-slot</code> 也有缩写，即把参数之前的所有内容 (<code>v-slot:</code>) 替换为字符 <code>#</code>。例如 <code>v-slot:header</code> 可以被重写为 <code>#header</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;template #header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template #footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 这样会触发一个警告 --&gt;
&lt;current-user #=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;current-user #default=&quot;{ user }&quot;&gt;
  {{ user.firstName }}
&lt;/current-user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),qn={id:"其它示例",tabindex:"-1"},_n={class:"header-anchor",href:"#其它示例"},xn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},fn=e(`<p>**插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。**这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。</p><p>例如，我们要实现一个 <code>&lt;todo-list&gt;</code> 组件，它是一个列表且包含布局和过滤逻辑：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li
    v-for=&quot;todo in filteredTodos&quot;
    v-bind:key=&quot;todo.id&quot;
  &gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 <code>todo</code> 作为一个插槽 prop 进行绑定：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li
    v-for=&quot;todo in filteredTodos&quot;
    v-bind:key=&quot;todo.id&quot;
  &gt;
    &lt;!--
    我们为每个 todo 准备了一个插槽，
    将 \`todo\` 对象作为一个插槽的 prop 传入。
    --&gt;
    &lt;slot name=&quot;todo&quot; v-bind:todo=&quot;todo&quot;&gt;
      &lt;!-- 后备内容 --&gt;
      {{ todo.text }}
    &lt;/slot&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在当我们使用 <code>&lt;todo-list&gt;</code> 组件的时候，我们可以选择为 todo 定义一个不一样的 <code>&lt;template&gt;</code> 作为替代方案，并且可以从子组件获取数据：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;todo-list v-bind:todos=&quot;todos&quot;&gt;
  &lt;template v-slot:todo=&quot;{ todo }&quot;&gt;
    &lt;span v-if=&quot;todo.isComplete&quot;&gt;✓&lt;/span&gt;
    {{ todo.text }}
  &lt;/template&gt;
&lt;/todo-list&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),En={href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"},An={href:"https://github.com/posva/vue-promised",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://github.com/LinusBorg/portal-vue",target:"_blank",rel:"noopener noreferrer"},Pn={id:"废弃了的语法",tabindex:"-1"},yn={class:"header-anchor",href:"#废弃了的语法"},Fn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},Nn=n("code",null,"v-slot",-1),Dn=n("code",null,"slot",-1),Cn=n("code",null,"slot-scope",-1),Sn=n("code",null,"v-slot",-1),Hn={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"slot",-1),Vn=n("code",null,"slot-scope",-1),wn={id:"带有-slot-attribute-的具名插槽",tabindex:"-1"},Tn={class:"header-anchor",href:"#带有-slot-attribute-的具名插槽"},zn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-attribute-%E7%9A%84%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},Jn=n("code",null,"slot",-1),Ln={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},Rn=n("code",null,"<template>",-1),In=n("code",null,"slot",-1),Yn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},On=n("code",null,"<base-layout>",-1),Wn=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;template slot=&quot;header&quot;&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template slot=&quot;footer&quot;&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接把 <code>slot</code> attribute 用在一个普通元素上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;base-layout&gt;
  &lt;h1 slot=&quot;header&quot;&gt;Here might be a page title&lt;/h1&gt;

  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;p slot=&quot;footer&quot;&gt;Here&#39;s some contact info&lt;/p&gt;
&lt;/base-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里其实还有一个未命名插槽，也就是<strong>默认插槽</strong>，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Here&#39;s some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),Mn={id:"带有-slot-scope-attribute-的作用域插槽",tabindex:"-1"},Un={class:"header-anchor",href:"#带有-slot-scope-attribute-的作用域插槽"},Gn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-scope-attribute-%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},Zn=n("code",null,"slot-scope",-1),Kn={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},Qn=n("code",null,"<template>",-1),Xn=n("code",null,"slot-scope",-1),$n={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},ns=n("code",null,"<slot-example>",-1),ss=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;slot-example&gt;
  &lt;template slot=&quot;default&quot; slot-scope=&quot;slotProps&quot;&gt;
    {{ slotProps.msg }}
  &lt;/template&gt;
&lt;/slot-example&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>slot-scope</code> 声明了被接收的 prop 对象会作为 <code>slotProps</code> 变量存在于 <code>&lt;template&gt;</code> 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 <code>slotProps</code>。</p><p>这里的 <code>slot=&quot;default&quot;</code> 可以被忽略为隐性写法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;slot-example&gt;
  &lt;template slot-scope=&quot;slotProps&quot;&gt;
    {{ slotProps.msg }}
  &lt;/template&gt;
&lt;/slot-example&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>slot-scope</code> attribute 也可以直接用于非 <code>&lt;template&gt;</code> 元素 (包括组件)：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;slot-example&gt;
  &lt;span slot-scope=&quot;slotProps&quot;&gt;
    {{ slotProps.msg }}
  &lt;/span&gt;
&lt;/slot-example&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),as=n("code",null,"slot-scope",-1),ts={href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"},es={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},ls={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},ps=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;slot-example&gt;
  &lt;span slot-scope=&quot;{ msg }&quot;&gt;
    {{ msg }}
  &lt;/span&gt;
&lt;/slot-example&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),os={href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},is=n("code",null,"<todo-list>",-1),cs=n("code",null,"slot-scope",-1),us=e(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>todos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ todo }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>✓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">&gt;</span></span>插槽
VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 &gt;
该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。

在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。新语法的由来可查阅这份 RFC。

插槽内容
Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 元素作为承载分发内容的出口。

它允许你像这样合成组件：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Your Profile
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-link</span><span class="token punctuation">&gt;</span></span>
然后你在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span><span class="token punctuation">&gt;</span></span> 的模板中可能会写为：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
  <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
当组件渲染的时候，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span> 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 添加一个 Font Awesome 图标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  Your Profile
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-link</span><span class="token punctuation">&gt;</span></span>
甚至其它的组件：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 添加一个图标的组件 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font-awesome-icon</span><span class="token punctuation">&gt;</span></span>
  Your Profile
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-link</span><span class="token punctuation">&gt;</span></span>
如果 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span><span class="token punctuation">&gt;</span></span> 的 template 中没有包含一个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

编译作用域
当你想在一个插槽中使用数据时，例如：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Logged in as {{ user.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-link</span><span class="token punctuation">&gt;</span></span>
该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而不能访问 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span><span class="token punctuation">&gt;</span></span> 的作用域。例如 url 是访问不到的：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-link</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/profile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Clicking here will send you to: {{ url }}
  <span class="token comment">&lt;!--
  这里的 \`url\` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ &lt;navigation-link&gt; 的而不是
  在 &lt;navigation-link&gt; 组件*内部*定义的。
  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-link</span><span class="token punctuation">&gt;</span></span>
作为一条规则，请记住：

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

后备内容
有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit-button</span><span class="token punctuation">&gt;</span></span> 组件中：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
我们可能希望这个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span> 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 标签内：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
现在当我在一个父级组件中使用 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit-button</span><span class="token punctuation">&gt;</span></span> 并且不提供任何插槽内容时：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit-button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>submit-button</span><span class="token punctuation">&gt;</span></span>
后备内容“Submit”将会被渲染：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Submit
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
但是如果我们提供内容：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>submit-button</span><span class="token punctuation">&gt;</span></span>
  Save
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>submit-button</span><span class="token punctuation">&gt;</span></span>
则这个提供的内容将会被渲染从而取代后备内容：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Save
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
具名插槽
自 2.6.0 起有所更新。已废弃的使用 slot attribute 的语法在这里。

有时我们需要多个插槽。例如对于一个带有如下模板的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span> 组件：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我们希望把页头放这里 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我们希望把主要内容放这里 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我们希望把页脚放这里 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
对于这样的情况，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
一个不带 name 的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，我们可以在一个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
现在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 中的内容都会被视为默认插槽的内容。

然而，如果你希望更明确一些，仍然可以在一个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 中包裹默认插槽的内容：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
任何一种写法都会渲染出：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
注意 v-slot 只能添加在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 上 (只有一种例外情况)，这一点和已经废弃的 slot attribute 不同。

作用域插槽
自 2.6.0 起有所更新。已废弃的使用 slot-scope attribute 的语法在这里。

有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span> 组件：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>{{ user.lastName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
我们可能想换掉备用内容，用名而非姓来显示。如下：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
然而上述代码不会正常工作，因为只有 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span> 组件可以访问到 user 而我们提供的内容是在父级渲染的。

为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 元素的一个 attribute 绑定上去：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ user.lastName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
绑定在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 slotProps，但你也可以使用任意你喜欢的名字。

独占默认插槽的缩写语法
在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 v-slot 被假定对应默认插槽：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：

<span class="token comment">&lt;!-- 无效，会导致警告 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>otherSlotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    slotProps is NOT available here
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
只要出现多个插槽，请始终为所有的插槽使用完整的基于 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 的语法：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>otherSlotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
解构插槽 Prop
作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：

function (slotProps) {
  // 插槽内容
}
这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 (单文件组件或现代浏览器)，你也可以使用 ES2015 解构来传入具体的插槽 prop，如下：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 user 重命名为 person：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user: person }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ person.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user = { firstName: &#39;Guest&#39; } }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
动态插槽名
2.6.0 新增

动态指令参数也可以用在 v-slot 上，来定义动态的插槽名：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>[dynamicSlotName]</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
具名插槽的缩写
2.6.0 新增

跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：

<span class="token comment">&lt;!-- 这样会触发一个警告 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">#</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ user }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
其它示例
插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。

例如，我们要实现一个 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span><span class="token punctuation">&gt;</span></span> 组件，它是一个列表且包含布局和过滤逻辑：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in filteredTodos<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-bind:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 todo 作为一个插槽 prop 进行绑定：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in filteredTodos<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-bind:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
    我们为每个 todo 准备了一个插槽，
    将 \`todo\` 对象作为一个插槽的 prop 传入。
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 后备内容 --&gt;</span>
      {{ todo.text }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
现在当我们使用 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span><span class="token punctuation">&gt;</span></span> 组件的时候，我们可以选择为 todo 定义一个不一样的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 作为替代方案，并且可以从子组件获取数据：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>todos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ todo }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>✓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">&gt;</span></span>
这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 Vue Virtual Scroller、Vue Promised 和 Portal Vue 等库。

废弃了的语法
v-slot 指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope attribute 的 API 替代方案。v-slot 完整的由来参见这份 RFC。在接下来所有的 2.x 版本中 slot 和 slot-scope attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。

带有 slot attribute 的具名插槽
自 2.6.0 起被废弃。新推荐的语法请查阅这里。

在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 上使用特殊的 slot attribute，可以将内容从父级传给具名插槽 (把这里提到过的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span> 组件作为示例)：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
或者直接把 slot attribute 用在一个普通元素上：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
这里其实还有一个未命名插槽，也就是默认插槽，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here&#39;s some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
带有 slot-scope attribute 的作用域插槽
自 2.6.0 起被废弃。新推荐的语法请查阅这里。

在 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 上使用特殊的 slot-scope attribute，可以接收传递给插槽的 prop (把这里提到过的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span> 组件作为示例)：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.msg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot-example</span><span class="token punctuation">&gt;</span></span>
这里的 slot-scope 声明了被接收的 prop 对象会作为 slotProps 变量存在于 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 slotProps。

这里的 slot=&quot;default&quot; 可以被忽略为隐性写法：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.msg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot-example</span><span class="token punctuation">&gt;</span></span>
slot-scope attribute 也可以直接用于非 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> 元素 (包括组件)：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.msg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot-example</span><span class="token punctuation">&gt;</span></span>
slot-scope 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 (单文件组件或现代浏览器)，你也可以在表达式中使用 ES2015 解构，如下：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ msg }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ msg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot-example</span><span class="token punctuation">&gt;</span></span>
使用这里描述过的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span><span class="token punctuation">&gt;</span></span> 作为示例，与它等价的使用 slot-scope 的代码是：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>todos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ todo }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>✓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function ds(rs,vs){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[n("a",d,[s("VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 >"),t(a)])]),n("blockquote",null,[n("p",null,[s("该页面假设你已经阅读过了"),n("a",r,[s("组件基础"),t(a)]),s("。如果你还对组件不太了解，推荐你先阅读它。")])]),n("blockquote",null,[n("p",null,[s("在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 "),v,s(" 指令)。它取代了 "),k,s(" 和 "),g,s(" 这两个目前已被废弃但未被移除且仍在"),n("a",m,[s("文档中"),t(a)]),s("的 attribute。新语法的由来可查阅这份 "),n("a",b,[s("RFC"),t(a)]),s("。")])]),n("h2",h,[n("a",q,[n("span",null,[n("a",_,[s("插槽内容"),t(a)])])])]),n("p",null,[s("Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 "),n("a",x,[s("Web Components 规范草案"),t(a)]),s("，将 "),f,s(" 元素作为承载分发内容的出口。")]),E,n("h2",A,[n("a",B,[n("span",null,[n("a",P,[s("编译作用域"),t(a)])])])]),y,n("h2",F,[n("a",N,[n("span",null,[n("a",D,[s("后备内容"),t(a)])])])]),C,n("h2",S,[n("a",H,[n("span",null,[n("a",j,[s("具名插槽"),t(a)])])])]),n("blockquote",null,[n("p",null,[s("自 2.6.0 起有所更新。已废弃的使用 "),V,s(" attribute 的语法在"),n("a",w,[s("这里"),t(a)]),s("。")])]),T,n("p",null,[s("注意 "),z,s(" (只有"),n("a",J,[s("一种例外情况"),t(a)]),s(")，这一点和已经废弃的 "),n("a",L,[R,s(" attribute"),t(a)]),s(" 不同。")]),n("h2",I,[n("a",Y,[n("span",null,[n("a",O,[s("作用域插槽"),t(a)])])])]),n("blockquote",null,[n("p",null,[s("自 2.6.0 起有所更新。已废弃的使用 "),W,s(" attribute 的语法在"),n("a",M,[s("这里"),t(a)]),s("。")])]),U,n("h3",G,[n("a",Z,[n("span",null,[n("a",K,[s("独占默认插槽的缩写语法"),t(a)])])])]),Q,n("h3",X,[n("a",$,[n("span",null,[n("a",nn,[s("解构插槽 Prop"),t(a)])])])]),sn,n("p",null,[s("这意味着 "),an,s(" 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 ("),n("a",tn,[s("单文件组件"),t(a)]),s("或"),n("a",en,[s("现代浏览器"),t(a)]),s(")，你也可以使用 "),n("a",ln,[s("ES2015 解构"),t(a)]),s("来传入具体的插槽 prop，如下：")]),pn,n("h2",on,[n("a",cn,[n("span",null,[n("a",un,[s("动态插槽名"),t(a)])])])]),dn,n("p",null,[n("a",rn,[s("动态指令参数"),t(a)]),s("也可以用在 "),vn,s(" 上，来定义动态的插槽名：")]),kn,n("h2",gn,[n("a",mn,[n("span",null,[n("a",bn,[s("具名插槽的缩写"),t(a)])])])]),hn,n("h2",qn,[n("a",_n,[n("span",null,[n("a",xn,[s("其它示例"),t(a)])])])]),fn,n("p",null,[s("这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 "),n("a",En,[s("Vue Virtual Scroller"),t(a)]),s("、"),n("a",An,[s("Vue Promised"),t(a)]),s(" 和 "),n("a",Bn,[s("Portal Vue"),t(a)]),s(" 等库。")]),n("h2",Pn,[n("a",yn,[n("span",null,[n("a",Fn,[s("废弃了的语法"),t(a)])])])]),n("blockquote",null,[n("p",null,[Nn,s(" 指令自 Vue 2.6.0 起被引入，提供更好的支持 "),Dn,s(" 和 "),Cn,s(" attribute 的 API 替代方案。"),Sn,s(" 完整的由来参见这份 "),n("a",Hn,[s("RFC"),t(a)]),s("。在接下来所有的 2.x 版本中 "),jn,s(" 和 "),Vn,s(" attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。")])]),n("h3",wn,[n("a",Tn,[n("span",null,[n("a",zn,[s("带有 "),Jn,s(" attribute 的具名插槽"),t(a)])])])]),n("blockquote",null,[n("p",null,[s("自 2.6.0 起被废弃。新推荐的语法请查阅"),n("a",Ln,[s("这里"),t(a)]),s("。")])]),n("p",null,[s("在 "),Rn,s(" 上使用特殊的 "),In,s(" attribute，可以将内容从父级传给具名插槽 (把"),n("a",Yn,[s("这里"),t(a)]),s("提到过的 "),On,s(" 组件作为示例)：")]),Wn,n("h3",Mn,[n("a",Un,[n("span",null,[n("a",Gn,[s("带有 "),Zn,s(" attribute 的作用域插槽"),t(a)])])])]),n("blockquote",null,[n("p",null,[s("自 2.6.0 起被废弃。新推荐的语法请查阅"),n("a",Kn,[s("这里"),t(a)]),s("。")])]),n("p",null,[s("在 "),Qn,s(" 上使用特殊的 "),Xn,s(" attribute，可以接收传递给插槽的 prop (把"),n("a",$n,[s("这里"),t(a)]),s("提到过的 "),ns,s(" 组件作为示例)：")]),ss,n("p",null,[as,s(" 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 ("),n("a",ts,[s("单文件组件"),t(a)]),s("或"),n("a",es,[s("现代浏览器"),t(a)]),s(")，你也可以在表达式中使用 "),n("a",ls,[s("ES2015 解构"),t(a)]),s("，如下：")]),ps,n("p",null,[s("使用"),n("a",os,[s("这里"),t(a)]),s("描述过的 "),is,s(" 作为示例，与它等价的使用 "),cs,s(" 的代码是：")]),us])}const ms=l(c,[["render",ds],["__file","slot.html.vue"]]),bs=JSON.parse('{"path":"/zh/codenotes/front-end/vue/slot.html","title":"插槽","lang":"zh-CN","frontmatter":{"title":"插槽","icon":"vue","category":["前端","vue","slot"],"tag":["vue","slot"],"sticky":false,"star":false,"article":false,"timeline":false,"description":"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/codenotes/front-end/vue/slot.html"}],["meta",{"property":"og:site_name","content":"代码笔记"}],["meta",{"property":"og:title","content":"插槽"}],["meta",{"property":"og:description","content":"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T18:37:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Bing"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"slot"}],["meta",{"property":"article:modified_time","content":"2024-04-20T18:37:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"插槽\\",\\"description\\":\\"插槽 VUEshop 中国免费商城系统 - 搜豹商城系统 - 免费50小时 Vue 视频教程 立即查看 > 该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它。 在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被...\\"}"]]},"headers":[{"level":2,"title":"插槽内容","slug":"插槽内容","link":"#插槽内容","children":[]},{"level":2,"title":"编译作用域","slug":"编译作用域","link":"#编译作用域","children":[]},{"level":2,"title":"后备内容","slug":"后备内容","link":"#后备内容","children":[]},{"level":2,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[]},{"level":2,"title":"作用域插槽","slug":"作用域插槽","link":"#作用域插槽","children":[{"level":3,"title":"独占默认插槽的缩写语法","slug":"独占默认插槽的缩写语法","link":"#独占默认插槽的缩写语法","children":[]},{"level":3,"title":"解构插槽 Prop","slug":"解构插槽-prop","link":"#解构插槽-prop","children":[]}]},{"level":2,"title":"动态插槽名","slug":"动态插槽名","link":"#动态插槽名","children":[]},{"level":2,"title":"具名插槽的缩写","slug":"具名插槽的缩写","link":"#具名插槽的缩写","children":[]},{"level":2,"title":"其它示例","slug":"其它示例","link":"#其它示例","children":[]},{"level":2,"title":"废弃了的语法","slug":"废弃了的语法","link":"#废弃了的语法","children":[{"level":3,"title":"带有 slot attribute 的具名插槽","slug":"带有-slot-attribute-的具名插槽","link":"#带有-slot-attribute-的具名插槽","children":[]},{"level":3,"title":"带有 slot-scope attribute 的作用域插槽","slug":"带有-slot-scope-attribute-的作用域插槽","link":"#带有-slot-scope-attribute-的作用域插槽","children":[]}]}],"git":{"createdTime":1713638264000,"updatedTime":1713638264000,"contributors":[{"name":"thylove-dsq","email":"wbthylove@163.com","commits":1}]},"readingTime":{"minutes":22.18,"words":6655},"filePathRelative":"zh/codenotes/front-end/vue/slot.md","localizedDate":"2024年4月21日","autoDesc":true}');export{ms as comp,bs as data};
