const fs =  require('fs')

fs.rm('novapasta', {recursive:true}, err => {
    if (err) throw err
    console.log('Pasta Excluída!')
})