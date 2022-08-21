export class Helper {
  static customFileName(req, file, cb) {
    const uniqueSuffix = Date.now() // + '-' + Math.round(Math.random() * 1e9);
    let fileExtension = "";
    if(file.mimetype.indexOf("jpeg") > -1){
        fileExtension = "jpg"
    }else if(file.mimetype.indexOf("png") > -1){
        fileExtension = "png";
    }else if(file.mimetype.indexOf("svg") > -1){
      fileExtension = "svg";
    }
    const originalName = file.originalname.split(".")[0];
    cb(null, originalName + '-' + uniqueSuffix+"."+fileExtension);
  }
 
  static destinationPath(req, file, cb) {
    cb(null, './public/svgs')
  }
}