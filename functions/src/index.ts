import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();
const contactsCollection = 'contacts';
const imagesCollection = 'images';
const uploadedItems = 'uploads';

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter
export const webApi = functions.https.onRequest(main);

//Endpoints 

// Ship endpoint, store the item with the image 
app.post('/ship', (req, res) => {
    // firebaseHelper.firestore
    //     .createNewDocument(db, uploadedItems, req.body);
    // console.log(`${req.body.name} has been uploaded`);
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
    firebaseHelper.firestore
        .getDocument(db, imagesCollection, req.params.imageId)
        .then((doc: any) => res.status(200).send(doc));
})
// View all contacts
app.get('/images', (req, res) => {
    firebaseHelper.firestore
        .backup(db, imagesCollection)
        .then((data: any) => res.status(200).send(data))
})
// Delete a contact 
app.delete('/images/:imageId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, contactsCollection, req.params.imageId);
    res.send('Image deleted');
})