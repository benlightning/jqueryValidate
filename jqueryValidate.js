/*!
 * jqueryValidate
 * 轻松解决网站表单验证
 * https://github.com/benlightning/jqueryValidate
 *
 * Copyright 2018, benlightning
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途
 */
(function ($, win) {
    var dataType = {
        "*": /[\w\W]+/,
        "*6-16": /^[\w\W]{6,16}$/,
        "n": /^\d+$/,
        "n6-16": /^\d{6,16}$/,
        "s": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
        "s6-18": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
        "p": /^[0-9]{6}$/,
        "m": /^(1[3|4|5|7|8]{1}\d{9})$/,
        "e": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "url": /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
        "qq": /[1-9][0-9]{4,14}$/,
        "str": /[a-zA-Z]/,
        "str2-20": /[a-zA-Z]{2,20}/,
        "num": /^(?:10|[1-9])$/,
        "len":/^[1-9]\d*$/,
        'id':/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/ //身份证
    };
    win.valid = function (callback) {
        var ret = true;
        $(document).find("*[data-rule]").each(function () {
            var type = $(this).attr('type');
            var val = $(this).val();
            if(type == 'radio'){
                val = $('[name="'+$(this).attr('name')+'"]').val();
            }
            if(type == 'checkbox'){
                val = $('[name="'+$(this).attr('name')+'"]:checked').length;
            }
            if (!dataType[$(this).attr('data-rule')].test(val)) {
                ret = false;
                var msg = $(this).attr('data-msg') || $(this).attr('placeholder')
                callback && callback(msg);
                return false;
            }
        });
        return ret;
    };
})(jQuery, window);
