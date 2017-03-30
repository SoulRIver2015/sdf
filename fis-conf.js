fis.config.merge({
    roadmap : {
        ext : {
            less : 'css'
        },
        domain : 'http://localhost:1840/BuildByMySelf_FisOutput'
    },
    modules : {
        parser : {
            less : ['less']
        }
    }
});

//fis命令： 
//        fis release -Dd ../BuildByMySelf_FisOutput -w