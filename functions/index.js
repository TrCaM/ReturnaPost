const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper');
const express = require('express');
const bodyParser = require('body-parser');
const ImageProcessor = require('./src/ImageProcessor');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();
const contactsCollection = 'contacts';
const imagesCollection = 'images';
const uploadedItems = 'uploads';
const imageProcessor = new ImageProcessor();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter

//Endpoints 

// Ship endpoint, store the item with the image 
app.post('/ship', (req, res) => {
    const { name, data } = req.body;
    const fileName = imageProcessor.convertAndUpload(name, data);
    firebaseHelper.firestore
        .createNewDocument(db, uploadedItems, { name, fileName });
    console.log(`${req.body.name} has been uploaded`);
    // res.send(`Successfully record the item to be delivered`);
})

// Return the item, need to compare with the stored image to match (....)
app.post('/return', (req, res) => {
    // firebaseHelper.firestore
    //     .createNewDocument(db, uploadedItems, req.body);
    // console.log(`${req.body.name} has been uploaded`);
    // res.send(`Successfully record the item to be delivered`);
})

// Update new contact
// app.patch('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .updateDocument(db, contactsCollection, req.params.contactId, req.body);
//     res.send('Update a new contact');
// })

// View an image
app.get('/images/:imageId', (req, res) => {
    console.log('Processing image...');

    firebaseHelper.firestore
        .getDocument(db, imagesCollection, req.params.imageId)
        .then(doc => res.status(200).send(doc));
})
// View all contacts
app.get('/images', (req, res) => {
    firebaseHelper.firestore
        .backup(db, imagesCollection)
        .then(data => res.status(200).send(data))
})
// Delete a contact 
app.delete('/images/:imageId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, contactsCollection, req.params.imageId);
    res.send('Image deleted');
})

exports.webApi = functions.https.onRequest(main);
