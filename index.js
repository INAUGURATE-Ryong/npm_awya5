#!/usr/bin/env node

console.log(`


 ██░ ██ ▓█████  ██▓     ██▓     ▒█████      ██▀███ ▓██   ██▓ ▒█████   ███▄    █   ▄████ 
▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    ▒██▒  ██▒   ▓██ ▒ ██▒▒██  ██▒▒██▒  ██▒ ██ ▀█   █  ██▒ ▀█▒
▒██▀▀██░▒███   ▒██░    ▒██░    ▒██░  ██▒   ▓██ ░▄█ ▒ ▒██ ██░▒██░  ██▒▓██  ▀█ ██▒▒██░▄▄▄░
░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    ▒██   ██░   ▒██▀▀█▄   ░ ▐██▓░▒██   ██░▓██▒  ▐▌██▒░▓█  ██▓
░▓█▒░██▓░▒████▒░██████▒░██████▒░ ████▓▒░   ░██▓ ▒██▒ ░ ██▒▓░░ ████▓▒░▒██░   ▓██░░▒▓███▀▒
 ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░ ▒░▒░▒░    ░ ▒▓ ░▒▓░  ██▒▒▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ░▒   ▒ 
 ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░  ░ ▒ ▒░      ░▒ ░ ▒░▓██ ░▒░   ░ ▒ ▒░ ░ ░░   ░ ▒░  ░   ░ 
 ░  ░░ ░   ░     ░ ░     ░ ░   ░ ░ ░ ▒       ░░   ░ ▒ ▒ ░░  ░ ░ ░ ▒     ░   ░ ░ ░ ░   ░ 
 ░  ░  ░   ░  ░    ░  ░    ░  ░    ░ ░        ░     ░ ░         ░ ░           ░       ░ 


`);

class Random{
    constructor(...args){
        this.argv = args.length > 0 ? args : process.argv.slice(2);
    }
};

class RandomPR extends Random{
    constructor(...args){
        super(...args);
    }
    print(){
        const list = this.argv;
        if (list.length === 0){
            console.log('발표자가 비워있습니다.')
        }else{
            const n = Math.floor(Math.random() * list.length)
            console.log(`발표자 : ${list[n]}`)
        };
    };
};
const List = new RandomPR();
List.print();
