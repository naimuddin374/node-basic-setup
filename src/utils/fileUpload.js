// File Upload Require 
const multer = require('multer');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: `${__dirname}/../../public/uploads/`,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Init Upload
const fileUpload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10 * 5
    },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');


module.exports = fileUpload