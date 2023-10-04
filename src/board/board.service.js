const boardRepository = require('./board.repository')

exports.getFindAll = async()=>{
    try{
        const result = await boardRepository.findAll()
        return result
    } catch (err){
        throw new Error(`${err.message}`)
    }
}

exports.getFindOne = async (id) => {
    try {
        const result = await boardRepository.findOne(id)
        boardRepository.incrementId(id)
        return result
    } catch (err) {
        throw new Error(`${err.message}`)
    }
}