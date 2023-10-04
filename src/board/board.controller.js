const boardService = require('./board.service')

exports.getList = async(req, res, next) => {
    try{
        const result = await boardService.getFindAll()
        res.render('board/list.html', {
            list: result
        })
    } catch (e) {
        next()
    }
    
}

exports.getView = async (req, res, next) => {
    try {
        const {id} = req.query
        const [result] = await boardService.getFindOne(id)
        res.render('board/view.html', {...result})
    } catch (e) {
        next()
    }
}

exports.getWrite = (req, res) => {
    res.render('board/write.html')
}

exports.getModify = async (req, res, next) => {
    try {
        const {id} = req.query
        const [result] = await boardService.getFindOne(id)
        res.render('board/modify.html', {...result})
    } catch (e) {
        next()
    }
}

exports.postWrite = async (req,res,next) => {
    try {
        const result = await boardService.create(req.body)
        res.redirect(`/boards/view?id=${result.id}`)
    } catch (e) {
        next(e)
    }
}

exports.postModify = async (req, res, next) => {
    try {
        const result = await boardService.postModify(req.body)
        res.redirect(`/boards/view?id=${result.id}`)
    } catch (e) {
        next()
    }
}