/**
 * jquery.bool-switch
 * 
 * @author erzh
 * @license MIT
 * @link https://github.com/erzh/jquery.bool-switch
 */
;(function($, window, document, undefined) {
    /**
     * @param string displaySelector 显示按钮的选择器，把开关选项按钮放入那个标签中
     * @param int inputVal 当前按钮状态，0）关闭/停用；1）打开/启用
     * @param string inputName 开关的状态需要同步到的输入框，不设置则不需要同步更新
     */
    $.boolSwitch = function(displaySelector, inputVal, inputName) {
	    var inputName = inputName || null;
	    var html = [
		  '<a href="javascript:;" class="bool-switch-wp bool-switch-' + (inputVal == 0 ? 'off' : 'on') + '">',
		  '  <span class="bool-switch-icon"></span>',
		  '  <span class="bool-switch-text text-to-on">启用</span>',
		  '  <span class="bool-switch-text text-on">已启用</span>',
		  '  <span class="bool-switch-text text-to-off">禁用</span>',
		  '  <span class="bool-switch-text text-off">已禁用</span>',
		  '</a>'
	    ].join('');
	
	    if(inputName) {
	    	var inputId = 'input[name="' + inputName + '"]';
	        if($(inputId).length == 0) {
	        	html += '<input type="hidden" name="' + inputName + '" value="' + inputVal + '" />';
	        } else {
	        	$(inputId).val(inputVal);
	        }
	    }
	    
	    $(displaySelector).html(html);
	    
	    $(displaySelector).click(function() {
	        if($(this).find('.bool-switch-wp').hasClass('bool-switch-on')) {
	            $(this).find('.bool-switch-wp').removeClass('bool-switch-on').addClass('bool-switch-off');
	        	if(inputName) {
	        		$(inputId).val(0);
	        	}
	        } else {
	            $(this).find('.bool-switch-wp').removeClass('bool-switch-off').addClass('bool-switch-on');
	        	if(inputName) {
		        	$(inputId).val(1);
	        	}
	        }
	    });
    }
    return $;
})(jQuery, window, document);