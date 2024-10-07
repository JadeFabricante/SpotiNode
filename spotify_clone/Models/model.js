const db = require('../config/db'); 


const mp3Model = {

    getAllFiles: (callback) => {
        const sql = 'SELECT * FROM fabricante_mp3_files';
        db.query(sql, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    insertFile: (fileName, filePath, callback) => {
        const sql = 'INSERT INTO fabricante_mp3_files (file_name, file_path) VALUES (?, ?)';
        db.query(sql, [fileName, filePath], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    }
};

module.exports = mp3Model;
