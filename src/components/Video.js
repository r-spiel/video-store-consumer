import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  return (
    <span>
      {props.title} - {props.overview} - {props.release_date}
      {/* <img alt= "Movie Poster"> {props.image_url}</img> */}
    </span>
    
  );
}
export default Video;