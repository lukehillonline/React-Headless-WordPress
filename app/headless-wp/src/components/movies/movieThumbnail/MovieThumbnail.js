import React from 'react';

class MovieThumbnail extends React.Component {

  render() {
    let imageUrl = this.props.imageUrl;
    let imageTitle = this.props.imageTitle;

    return <img src={imageUrl} alt={imageTitle} />
  }
}

export default MovieThumbnail;