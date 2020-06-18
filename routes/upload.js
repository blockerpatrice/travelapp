const Busboy = require('busboy')

module.exports = (app) => {
    app.post('/routes/upload', function (req,res,next){
        const element1 = req.body.element1;
        let busboy = new Busboy ({headers: req.headers});

        busboy.on('finish',function(){
            console.log('upload finished')
            console.log('files')
            console.log(req.files)

            const file = req.files.element2;
            console.log(file)
        })
        req.pipe(busboy)
    })
}