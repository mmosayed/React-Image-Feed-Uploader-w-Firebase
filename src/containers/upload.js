import React from 'react';
import * as firebase from 'firebase';
import ImageService from '../services/images';

  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyDnX-V1IEQDlgNv1XwraQA9jXi3pE8Yomk",
    authDomain: "dumb-uploader.firebaseapp.com",
    databaseURL: "https://dumb-uploader.firebaseio.com",
    projectId: "dumb-uploader",
    storageBucket: "dumb-uploader.appspot.com",
    messagingSenderId: "370924651634"
};
firebase.initializeApp(config);

export default class Home extends React.Component {

  saveImage = (url) => {
    const date = Date();

    ImageService.saveImage(url, date);
  }

  handleFileInput = async (e) => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref()
    const newImage = root.child(firstFile.name);

    // newImage.put(firstFile)
    //   .then((snapshot) => {
    //     return snapshot.ref.getDownloadURL()
    //   })
    //   .then((url) => {
    //     console.log(url)
    //     this.saveImage(url);
    //   })

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();
      this.saveImage(url);
    }
    catch(err) {
      console.log(err);
    }
    
  }

  render() {

    return (
      <div className='container'>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" onChange={this.handleFileInput} />
            <label className="custom-file-label">Upload Image</label>
          </div>
        </div>
      </div>
    );
  }
}