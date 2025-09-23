const dataMysql = '2025-09-02 08:09:09'
const splitEspaco = dataMysql.split(' ')
const splitTraco = splitEspaco[0].split('-')
const dataCerta = `${splitTraco[2]}/${splitTraco[1]}/${splitTraco[0]}`
const saida = {
    data: `${dataCerta}`,
    hora: splitEspaco[1]
}

console.log(saida)