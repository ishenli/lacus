module.exports = function (grunt) {


    return {
        dev: ['less'],

        watch: {
            files: ['<%=src%>/../demo'],
            tasks: ['<%=name%>']
        },

        clean: ['<%=asset%>'],

        less: {
            files: {
                '<%=src%>/../../test/demo/demo.css': '<%=src%>/demo.less'
            }
        },
        cssmin: {
            files: {
                '<%=asset%>/box.css': '<%=asset%>/box.css'
            }
        }
        
    };

};
