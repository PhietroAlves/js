const autenticar = (req, res, next) => {
    // SIMULAÇÃO!!!! NUNCA usar em PRODUÇÃO!!!!!!!
    const token = req.headers['authorization']
    if (token === 'admin') {
        next()
    } else {
        res.status(401).send('Não autorizado.')
    }
}

module.exports = autenticar