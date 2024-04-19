function cadastroDoacaoDinheiro(doacaoDinheiro, sequelize) {

    return new Promise((resolve, reject) => {

        try {

            const { valorDoado, idAluno, auxilio, data } = doacaoDinheiro

            sequelize.query("call doar_dinheiro(?,?,?,?)", {
                replacements: [ idAluno, valorDoado, auxilio, data],
                type: sequelize.QueryTypes.INSERT
            })
                .then(r => resolve(r))
                .catch(e => reject(e));


        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports = {cadastroDoacaoDinheiro}