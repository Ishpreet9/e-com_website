import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null,'./images')
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage});

export default upload;