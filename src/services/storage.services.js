const imageKit = require('@imagekit/nodejs');


const imagekit = new imageKit({
    privateKey : "private_KiU7U4duIb3vxlT25lDriYjxdEw="
});



async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName: "image.jpg"
    });
    return result;
}


module.exports = uploadFile;