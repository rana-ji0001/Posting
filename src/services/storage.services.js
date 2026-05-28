const imageKit = require('@imagekit/nodejs');


const imageKit = new imageKit({
    privateKey : "private_KiU7U4duIb3vxlT25lDriYjxdEw="
});



async function uploadFile(buffer){
    const result = await imageKit.client.upload({
        file : buffer,
        fileName: "image.jpg"
    });
    return result;
}


module.exports = uploadFile;