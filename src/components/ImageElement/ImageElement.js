import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import ImageView from '../ImageView/ImageView';
import ImageEditor from '../ImageEditor/ImageEditor';
import bgImg from'../../assets/img/bg/bg-1.jpg';
import overlayImg from'../../assets/img/overlay/overlay-1.svg';
import './ImageElement.css';
class ImageElement extends Component {
  state = {
    bgImg : bgImg,
    overlayImg: overlayImg,
    overlayText: "hello",
    
    rawStyles: {
      width: "200",
      height: "200",
      padding: "20",
      margin: "20",
      fontSize: "20",
      color: "white",
      background: "coral",
    },

    containerRawStyles: {
      width: "200",
      height: "100",
      color: "red",
    },

    overlayTextRawStyles: {
      fontSize: "20",
      color: "#fff",
    },

    overlayImgRawStyles: {
      width: "150",
      height: "150",
      top: "0",
      left: "0"
    }

  }

  readyStylesHandler = (rawStyles) => {
    let readyStylesObject = {};
    let stylesNeedReconstructionArray = ["width", "height", "padding" ,"margin", "top", "left", "right", "bottom", "fontSize"];
    
    for (let [key, value] of Object.entries(rawStyles)) {
      stylesNeedReconstructionArray.forEach(styleProperty => {
        if(key === styleProperty) {
          readyStylesObject[key] = `${value}px`;
        } else if(!(key in readyStylesObject)) {
          readyStylesObject[key] = value;
        }
      });
    }
    return readyStylesObject;
  }

  changeStyleHandler = (event, styleParent, styleProperty) => {
    window[styleParent] = { ...this.state[styleParent]}

    window[styleParent][styleProperty] = event.target.value;

    console.log(window[styleParent]);

    console.log(styleParent);

    this.setState( { [styleParent]: window[styleParent]});
    
  }

  downloadData = (index)  => {
    
    let container = document.getElementsByClassName("img-view-wrap")[index];
    container.classList.add("active");
    let elem = document.querySelector(".active.img-view-wrap");

    html2canvas(elem, { allowTaint: true, scrollY: -window.scrollY, scrollX: -window.scrollX }).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "ci.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });

    elem.classList.remove("active");
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

  handleImageUpload = (event) => {
    const [file] = event.target.files;
    
    if(file) {
      if(event.target.id === "bgImg") {
        let bgImg = URL.createObjectURL(file);
        this.setState({ bgImg });
      } else if(event.target.id === "overlayImg") {
        let overlayImg = URL.createObjectURL(file);
        this.setState({ overlayImg });
      }
    } 
  };

  render() {
    return(
      <li className="img-collection-elem">
        <ImageView class_ImageElement_0={this} pushId_1={this.props.pushId_0} />
        <ImageEditor class_ImageElement_0={this} />
        <button onClick={() => this.downloadData(this.props.pushIndex)}>Downlload</button>

        {/* <img src={this.props.pushCurrent.bgImg} /, {allowTaint : true,}>
        <img src={this.props.pushCurrent.overlayImg} /> */}
        {/* <button onClick={ ()=> this.props.class_ImageGallery_1.changeImageHandler(this.props.pushIndex)}>ChangeImg</button> */}
      </li>        
    )
  }
}

export default ImageElement;