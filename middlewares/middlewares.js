var multer=require("multer");

function subirArchivo(){
    var storage=multer.diskStorage({
        destination: './web/usuarios/images',
        filename: (req,file,cb)=>{
            var archivo=file.originalname;
            cb(null,archivo);
        }
    });
    return multer({storage}).single('foto');
}


function subirArchivoN(){
    var storage=multer.diskStorage({
        destination: './web/Negocios/images',
        filename: (req,file,cb)=>{
            var archivo=file.originalname;
            cb(null,archivo);
        }
    });
    return multer({storage}).single('foto');
}

module.exports={
    subirArchivo,
    subirArchivoN
}