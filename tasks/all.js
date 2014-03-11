module.exports = function (grunt) {


    return {
        dev: ['less'],

        watch: {
            files: [
                'src/all/*.less',
                'src/reset/*.less',
                'src/elements/**/*.less',
                'src/collections/**/*.less'
            ],
            tasks: ['<%=name%>']
        },

        clean: ['<%=asset%>'],

        less: {
            files: {
                '<%=asset%>/all.css': '<%=src%>/all.less'
            }
        },
        cssmin: {
            files: {
                '<%=asset%>/all.css': '<%=asset%>/all.css'
            }
        }
        
    };

};
