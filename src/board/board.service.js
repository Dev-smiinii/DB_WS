const boardRepository = require('./board.repository')

exports.create = async (data) => {
    const {title, writer, content} = data;
    try {
        const result = await boardRepository.create(title, writer, content);
        return result;
    } catch (err) {
        throw new Error('service err' + err.message)
    }
}

exports.update = async (data) => {
    const {title, writer, content} = data;
    try {
        const result = await boardRepository.update(title, writer, content);
        console.log(result)
        return result;
    } catch (err) {
        throw new Error('service err' + err.message)
    }
}

exports.getFindAll = async()=>{
    try {
        const result = await boardRepository.findAll()
        return result
    } catch (err) {
        throw new Error('service err' + err.message)
    }
}

exports.getFindOne = async (id) => {
    try {
        const result = await boardRepository.findOne(id)
        boardRepository.incrementId(id)
        return result
    } catch (err) {
        throw new Error('service err' + err.message)
    }
}