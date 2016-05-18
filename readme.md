开关选项jQuery插件
============================
开关按钮/单选按钮的表单输入框美化插件
prettify switch button or form radio input jQuery plugin.

[demo](http://demo.menglab.com/jquery.bool-switch/demo.html)

<pre>
useage:
$(function(){
    $.boolSwitch(
        '#is-enabled',  // 显示按钮的选择器，把开关选项按钮放入那个标签中
        1,              // 当前按钮状态，0）关闭/停用；1）打开/启用
        'hidden_name'   // 开关的状态需要同步到的输入框，不设置则不需要同步更新
    );
});
</pre>