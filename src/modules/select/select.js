/**
 * @file 下拉选项，基于moye select
 * @author shenli <shenli03@baidu.com>
 */
define(function (require) {

    var lib = require('moye/lib');
    var Select = require('moye/Select');

    var selectList = [];

    function init(options) {

        var mains = lib.q('mp-select-cnt');
        var targets = lib.q('mp-select-target');

        lib.each(mains, function (main, i) {
            var select = new Select({
                prefix: 'mp-select',
                main:main,
                target:targets[i],
                maxLength:8,
                cols:i<2?3:1,
                offset:{
                    y:-1
                },
                onChange:options.callback
            }).render();

            select.lastItem = options.defaultItem[i];

            selectList.push(select);
        });
    }

    function reset() {
        lib.each(selectList,function(select) {
            select.reset();
        });
    }

    function getSelects(index) {
        return selectList[index];
    }

    return {
        init:init,
        reset:reset,
        getSelects:getSelects
    }
});
