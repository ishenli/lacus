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
                '<%=asset%>/box.css': '<%=src%>/box.less'
            }
        },
        cssmin: {
            files: {
                '<%=asset%>/box.css': '<%=asset%>/box.css'
            }
        }
        
    };

};
