#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
program
.version('0.0.1')
.command('create <path>')
.action((path) => {
    if (path) {
      console.log(chalk.blue('正在从github下载luohongxin-vue-template2.0模板'));
      download('LuoHongXin/vue-template2.0', path, function (err) {
        if(!err){
            // 可以输出一些项目成功的信息
            console.log(chalk.green('模板下载成功'));
        }else{
            // 可以输出一些项目失败的信息
            console.log(chalk.red('模板下载失败'));
        }
      })
    }
  })
  program.parse(process.argv);


  