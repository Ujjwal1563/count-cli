const chalk = require('chalk');
const {Command}= require('commander');
const fs = require('fs')
const program= new Command();
program
.name('Counting')
.description('Cli to count the no of words in file')
.version('0.8.0')
program.command('count')
.description('Count the number of lines')
.argument('<file>', ' This is file to count')
.action ((file)=>{
    fs.readFile(file, 'utf-8' ,(err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            const lines = data.split(' ').length;
            console.log(`There are ${lines} lines in ${file}`);
        }
    });
});

program.parse();