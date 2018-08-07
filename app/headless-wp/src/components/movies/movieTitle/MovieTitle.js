import React from 'react';

class MovieTitle extends React.Component {

  render() {
    let MovieTitle = this.props.title;

    return <h2><span>{MovieTitle}</span></h2>
  }
}

export default MovieTitle;