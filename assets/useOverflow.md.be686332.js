import"./index.97b01244.js";const a='{"title":"useOverflow","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u573A\u666F","slug":"\u4F7F\u7528\u573A\u666F"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"API","slug":"api"},{"level":2,"title":"DEMO","slug":"demo"}],"relativePath":"useOverflow.md","createTime":1657172189000,"lastUpdated":1657172189000}';var n=()=>`<h1 id="useoverflow" tabindex="-1">useOverflow <a class="header-anchor" href="#useoverflow" aria-hidden="true">#</a></h1>
<h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2>
<p>\u5F53\u4F7F\u7528\u6A2A\u5411\u63A7\u4EF6\u7EC4\uFF0C\u5BB9\u5668\u5BBD\u5EA6\u672A\u77E5\uFF0C\u53C8\u4E0D\u5E0C\u671B\u63A7\u4EF6\u8D85\u51FA\u5BB9\u5668\u8303\u56F4\u6216\u6362\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>useOverflow</code> \u6765\u8BA9\u63A7\u4EF6\u81EA\u52A8\u8C03\u6574\u5BBD\u5EA6\u3002</p>
<p>\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u5982\uFF1A</p>
<ul>
<li>\u6807\u7B7E\u7EC4\u81EA\u52A8\u7F29\u7565</li>
<li>\u6309\u94AE\u7EC4\u5BBD\u5EA6\u4E0D\u591F\u7F29\u7565\u4E3A\u66F4\u591A</li>
</ul>
<p><img src="images/button-demo.png" alt="">
<img src="images/tag-demo.png" alt=""></p>
<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2>
<div class="language-sh"><pre><code>npm install @zreact/use-overflow
</code></pre>
</div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2>
<div class="language-jsx"><pre><code><span class="token comment">// count \u4E3A\u5F53\u524D\u4F7F\u7528\u7684\u6D4B\u91CF\u6570\u91CF</span>
<span class="token comment">// measuredCount \u4E3A\u7ECF\u8FC7\u6D4B\u91CF\u540E\u6700\u7EC8\u5F97\u5230\u7684\u5408\u9002\u7684\u6570</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> measuredCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useOverflow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">containerRef</span><span class="token operator">:</span> containerRef<span class="token punctuation">,</span> <span class="token comment">// \u5916\u5C42\u5BB9\u5668\u7684 ref</span>
    <span class="token literal-property property">total</span><span class="token operator">:</span> tags<span class="token punctuation">.</span>length <span class="token comment">// \u9879\u76EE\u7684\u603B\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2>
<h2 id="demo" tabindex="-1">DEMO <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>
<p>\u7B80\u5355\u573A\u666F</p>
<iframe src="https://codesandbox.io/embed/use-overflow-demo-3wf8c4?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="use-overflow demo"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<p>\u5185\u5BB9\u53EF\u53D8\u573A\u666F</p>
<iframe src="https://codesandbox.io/embed/use-overflow-demo-editable-4eb7ky?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="use-overflow demo editable"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<p>\u5185\u5BB9\u53EF\u7F16\u8F91\u573A\u666F</p>
<iframe src="https://codesandbox.io/embed/use-overflow-demo-inputable-pzsde4?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="use-overflow demo inputable"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<p>\u6309\u94AE\u7EC4</p>
<iframe src="https://codesandbox.io/embed/use-overflow-button-demo-0eby5y?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="use-overflow button demo"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
`;export{a as __pageData,n as default};
