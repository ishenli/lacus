module.exports = function (grunt) {


    return {
        dev: ['less'],

        watch: {
            files: ['<%=src%>/**'],
            tasks: ['<%=name%>']
        },

        clean: ['<%=asset%>'],

        less: {
            files: {
                '<%=asset%>/font.css': '<%=src%>/../elements/font.less'
            }
        },
        cssmin: {
            files: {
                '<%=asset%>/font.css': '<%=asset%>/font.css'
            }
        }
        
    };

};
