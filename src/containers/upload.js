import React from 'react';

export default class Home extends React.Component {

  render() {

    return (
      <div className='container'>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" />
            <label className="custom-file-label">Upload Image</label>
          </div>
        </div>
      </div>
    );
  }
}