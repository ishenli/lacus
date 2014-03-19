var fs = require('fs');
var path = require('path');
var _ = require('underscore');

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');
    Object.keys(pkg.devDependencies).forEach(
        function (name) {
            if (
                name.indexOf('grunt-') === 0
                && name.indexOf('grunt-template') < 0
            ) {
                grunt.loadNpmTasks(name);
            }
        }
    );

    var configs = {
        pkg: pkg,
        meta: {
            src: 'src',
            dep: 'dep',
            asset: 'asset',
            tasks: 'tasks'
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            }
        },

        lesslint: {
            all: ['<%=meta.src%>/**/*.less']
        }


    };


    // 针对任务名，增加 :name
    var appendKey = function (list, name) {
        return list.map(function (item) {

            // 包含 $ 时替换为当前文件名
            if (~item.indexOf('$')) {
                item = item.replace(/\$/g, name);
            }

            // 如果已包含 :，不再附加当前文件名
            if (~item.indexOf(':')) {
                return item;
            }

            return item + ':' + name; 
        });
    };

    // 针对配置键名，把 $ 替换为当前文件名
    var fixKey = function (key, name) {
            // 包含 $ 时替换为当前文件名
            if (~key.indexOf('$')) {
                key = key.replace(/\$/g, name);
            }

            return key; 
    };

    var registTask = function (name, config) {
        if (config.dev instanceof Array) {
            grunt.registerTask(name, appendKey(config.dev, name));
            delete config.dev;
        }

        if (config.pub instanceof Array) {
            grunt.registerTask(name + '-pub', appendKey(config.pub, name));
            delete config.pub;
        }
    };
    
    // 为了在子 task 中可使用元数据模板
    grunt.initConfig(configs);


    // 读取所有子 task 文件
    fs.readdirSync(configs.meta.tasks).forEach(
        function (file) {
            file = path.resolve(configs.meta.tasks, file);
            var ext = '.js';
            if (fs.statSync(file).isFile()
                && path.extname(file).toLowerCase() === ext
            ) {
                var name = path.basename(file, ext);
                var config = require(file)(grunt);
                var meta = configs.meta;
                var templateData = {
                    name: name,
                    srcRoot: meta.src,
                    dep: meta.dep,
                    src: path.join(meta.src, name),
                    assetRoot: meta.asset,
                    asset: path.join(meta.asset, name)
                };
                config = JSON.parse(
                    grunt.template.process(
                        JSON.stringify(config), 
                        {
                            data: templateData
                        }
                    )
                );

                grunt.config(
                    'lesslint.' + name,
                    {
                        src: [templateData.src + '/**/*.less']
                    }
                );


                // 扩展的自定义 tasks
                var tasks = config.tasks;
                if (tasks) {
                    for (var key in tasks) {
                        grunt.registerTask(
                            fixKey(key, name),
                            appendKey(tasks[key], name)
                        );
                    }
                    delete config.tasks;                   
                }

                for (var key in config) {

                    registTask(name, config);
                    grunt.config(key + '.' + name, config[key]);

                }
            }
        }
    );
};
