import React, { Component } from 'react';
import ImageCollection from '../ImageCollection/ImageCollection';
// import OverlayCollection from '../OverlayCollection/OverlayCollection';
import './ImageGallery.css';

import {imgArray} from '../ImageBundle/ImageBundle';


class ImageGallery extends Component  {
  state = {
    projectName: "Image Editor",
  
    imageCollection: [
      {id: "img-1"},
      {id: "img-2"},
      {id: "img-3"},
    ],
  }

  changeImageHandler = (index) => {
    let imageCollection = [...this.state.imageCollection];
    let length = this.state.imageCollection.length;
    let randomNo =  Math.floor((Math.random() * length) + 1);
    imageCollection[index].bgImg = '/assets/img/bg/bg-'+randomNo+'.jpg';
    this.setState( {imageCollection });
  }
  render () {
    return ( 
      <div className="img-gallery">
        <h1 className="heading-1">{this.state.projectName}</h1>
        <ImageCollection class_ImageGallery_0={this}/>
      </div>
    );
  }
}

export default ImageGallery;