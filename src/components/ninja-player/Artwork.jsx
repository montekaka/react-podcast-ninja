import React from 'react';
import PropTypes from 'prop-types';

const Artwork = ({artworkUrl}) => {
  return (
    <div className="artwork">
      <img 
        className="artwork-image"
        src={artworkUrl} 
        title="artwork"
      />
    </div>
  )
}

Artwork.propTypes = {
  artworkUrl: PropTypes.string
}

Artwork.defaultProps = {
  artworkUrl: null,
};


export default Artwork;