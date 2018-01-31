var fs = require('fs');
    superagent = require('superagant');
    reload = require('require-reload');
    logger = new(reload('../logger.js'))((reload('../config.json')).logTimestamp);

/* fuck it we doin it this way*/
exports.safeSave = function(file, ext, data, minSize = 1,log = true){
    return new Promise((resolve, reject) =>{
        if(!file || !ext)
            return reject(new Error('Its screwed'));
        if(file.startsWith('/')) file = file.substr(1);
        if(!ext.startsWith('.')) ext = '.' + ext;
        fs.writeFile(`${__dirname}/../${file}-temp${ext}`, =>{
            if(error){
                logger.error(error, 'DO U KNOW DE WY TO WRITE');
                reject(err);
            }else{
                fs.stat(`${__dirname}/../${file}-temp${ext}`,(stats) => {
                    if(err){
                        logger.error(err, 'DO U KNOW DE WY TO SAVE A GOD DAMN STAT');
                        reject(err);
                    }else if(stats["size"]){
                        logger.debug('Cant overwrite files', '**');
                        resolve(false);
                    }else{
                        fs.rename(`${__dirname}/../${file}-temp${ext}`,`${__dirname}/../${file}${ext}`, e =>{
                            
                        });
                        if(log === true)logger.debug(`Update ${__dirname}${file}${ext}`,'Save');
                    }
                });
            }
        });
    });
}