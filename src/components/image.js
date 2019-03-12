import React from 'react';

export default ({ image, timestamp }) => {
  return (
    <div className="card bg-dark text-white mb-2" style={{ width: '70%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
      <img src={image} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <p className="card-text">Uploaded {timestamp}</p>
      </div>
    </div>
  )
}