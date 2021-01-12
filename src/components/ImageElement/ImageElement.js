import React, { Component } from 'react';
import ImageView from '../ImageView/ImageView';
import ImageEditor from '../ImageEditor/ImageEditor';
import './ImageElement.css';

class ImageElement extends Component {
  state = {
    rawStyles: {
      width: "200",
      height: "200",
      padding: "20",
      margin: "20",
      fontSize: "20",
      color: "white",
      background: "coral",
    },

    overlayText: "hello",
  }

  readyStyles = (style) => {
    return(
      {
        minWidth: `${style.minWidth}px`,
        minHeight: `${style.minHeight}px`,
        padding: `${style.padding}px`,
        margin: `${style.margin}px`,
        fontSize: `${style.fontSize}px`,
        color: `${style.color}`,
        background: `${style.background}`,
      }
    )
  }

  font = (event) => {
    let rawStyles = {...this.state.rawStyles};
    rawStyles.fontSize = `${event.target.value}`;
    this.setState({rawStyles});
  }

  overlayText = (event) => {
    let overlayText = this.state.overlayText;
    overlayText = event.target.value;
    this.setState({overlayText})
  }

  render() {
    console.log(this.props.pushCurrent.bgImg);
    return(
      <li className="img-collection-elem" style={ {border: "1px solid red", margin: "20px", float: "left", textAlign: "center", width: "300px",} }>
        <img src={this.props.pushCurrent.bgImg} />
        <img src={this.props.pushCurrent.overlayImg} />
        <ImageView class_ImageElement_0={this}/>
        <ImageEditor class_ImageElement_0={this} />
        <button onClick={ ()=> this.props.class_ImageGallery_1.changeImageHandler(this.props.pushIndex)}>ChangeImg</button>
      </li>        
    )
  }
}

export default ImageElement;