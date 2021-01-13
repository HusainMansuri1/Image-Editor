import React, { Component } from 'react';
import ImageCollection from '../ImageCollection/ImageCollection';
// import OverlayCollection from '../OverlayCollection/OverlayCollection';
import './ImageGallery.css';

import {imgArray} from '../ImageBundle/ImageBundle';


class ImageGallery extends Component  {
  imgCollectionReady = [];
  constructor(){
    super();
    let imgID = 0;

    imgArray.map(element => {
      return this.imgCollectionReady.push(
        {
          id: `img-${++imgID}`,
          bgImg: element.bg,
          overlayImg: element.overlay
        }  
      )
    });
  }

  state = {
    projectName: "Image Editor",
    
    // imageCollection: [
    //   {
    //     id: "img-1",
    //     overlayImg: "",
    //     bgImg: "",
    //   },

    //   {
    //     id: "img-2",
    //     overlayImg: "",
    //     bgImg: "",
    //   },

    //   {
    //     id: "img-3",
    //     overlayImg: "",
    //     bgImg: "",
    //   },

    //   {
    //     id: "img-4",
    //     overlayImg: "",
    //     bgImg: "",
    //   },
    // ],     

    imageCollection: this.imgCollectionReady,
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
        {/* <OverlayCollection data-ImageGallery_1={this}/> */}
        <ImageCollection class_ImageGallery_0={this}/>
      </div>
    );
  }
}

export default ImageGallery;