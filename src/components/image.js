import React from 'react';
import moment from 'moment';

export default ({ image, timestamp }) => {
  return (
    <div className="card bg-dark text-white mb-2" style={{ width: '70%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
      <img src={image} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <span className="card-text" style={ { backgroundColor: 'rgba(0, 0, 0, 0.3)' } }>Uploaded {moment(timestamp).fromNow()}</span>
      </div>
    </div>
  )
}