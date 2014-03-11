module.exports = function (grunt) {


    return {
        dev: ['clean', 'less'],

        watch: {
            files: ['<%=src%>/**'],
            tasks: ['<%=name%>']
        },

        clean: ['<%=asset%>'],

        less: {
            files: {
                '<%=asset%>/reset.css': '<%=src%>/reset.less'
            }
        },
        cssmin: {
            files: {
                '<%=asset%>/reset.css': '<%=asset%>/reset.css'
            }
        }
        
    };

};
