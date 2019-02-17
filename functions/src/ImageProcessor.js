const {Storage} = require('@google-cloud/storage');
const stream = require('stream');

class ImageProcessor {

	// Convert image to some uploadable file
	convertAndUpload(name, base64Image) {
        const bufferStream = new stream.PassThrough();
        const gcs = new Storage();
		//Define bucket.
        const myBucket = gcs.bucket('staging.thehackathon-dc617.appspot.com');
        const fileName =  `${name}.jpg`;
		//Define file & file name.
		const file = myBucket.file(fileName);
		//Pipe the 'bufferStream' into a 'file.createWriteStream' method.
        bufferStream.end(Buffer.from(base64Image, "base64"));
		bufferStream
			.pipe(
				file.createWriteStream({
					metadata: {
						contentType: "image/jpeg",
						metadata: {
							custom: "metadata"
						}
					},
					public: true,
					validation: "md5"
				})
			)
			.on("finish", function() {
                // The file upload is complete.
                console.log(`Image ${name}.jpg is uploaded`);
            });
        return  fileName;
	}
}

module.exports = ImageProcessor;