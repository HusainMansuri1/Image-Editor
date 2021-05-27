import React, { Component } from 'react';
import ImageElement from 'components/ImageElement/ImageElement';
import 'components/ImageGallery/ImageGallery.css';

class ImageGallery extends Component  {
  state = {
    projectName: "Creative Editor",
  
    imageCollection: [
      {id: "img-1"},
    ],
  }

  render () {
    return ( 
      <div className="image-collection-wrap">
        <ul className="img-collection-list clearfix">
          { 
            this.state.imageCollection.map((current, index) => 
              <ImageElement
                key={current.id} 
                pushId_0={current.id}
                pushCurrent={current} 
                pushIndex={index}
                class_ImageGallery_0={this}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default ImageGallery;