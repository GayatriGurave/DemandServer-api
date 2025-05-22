import multer from "multer";
import path from "path";

let imageStorage = multer.diskStorage({
    destination: (req,file,next)=>{
        //where the image is store
        next(null,"uploadimages")
    },
    filename : (req,file,next)=>{
        //which name the image is store
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
})


export const upload = multer({storage : imageStorage})