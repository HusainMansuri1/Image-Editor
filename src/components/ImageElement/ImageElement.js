import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import ImageView from '../ImageView/ImageView';
import ImageEditor from '../ImageEditor/ImageEditor';
import bgImg from'../../assets/img/bg/bg-2.jpg';
import overlayImg from'../../assets/img/overlay/overlay-6.svg';
import './ImageElement.css';
class ImageElement extends Component {
  state = {
    bgImg : bgImg,
    overlayImg: overlayImg,
    overlayText: "hello",
    isOverlayImgCenter: false,
    isOverlayTextCenter: false,
    
    containerRawStyles: {
      width: "200",
      height: "200",
      color: "red",
    },

    overlayTextRawStyles: {
      fontSize: "20",
      color: "#ffffff",
      top: "0",
      bottom: "auto",
      left: "0",
      right: "auto",
    },

    overlayImgRawStyles: {
      width: "100",
      height: "100",
      top: "0",
      bottom: "auto",
      left: "0",
      right: "auto",
    }
  }

  readyStylesHandler = (rawStyles) => {
    let readyStylesObject = {};
    let stylesNeedReconstructionArray = ["width", "height", "padding" ,"margin","fontSize", "top", "left", "bottom", "right", ];
    
    for (let [key, value] of Object.entries(rawStyles)) {
      stylesNeedReconstructionArray.forEach(styleProperty => {
        if(key === styleProperty) {
          (value !== "auto" && value !== "initial") ? readyStylesObject[key] = `${value}px`: readyStylesObject[key] = `${value}`;
        } else if(!(key in readyStylesObject)) {
          readyStylesObject[key] = value;
        }
      });
    }
    return readyStylesObject;
  }

  centerHandler = (event, property) => {
    window[property] = !this.state[property];
    this.setState({ [property]: window[property]}); 
  }

  styleChangeHandler = (event, styleParent, styleProperty) => {
    window[styleParent] = { ...this.state[styleParent]}
    window[styleParent][styleProperty] = event.target.value;
    this.setState( { [styleParent]: window[styleParent]});
  }

  positionStyleChangeHandler = (event, styleParent, styleProperty) => {
    window[styleParent] = { ...this.state[styleParent]}
    if(styleProperty === 'top') {
      window[styleParent].bottom="auto";
    } else if(styleProperty === 'bottom'){
      window[styleParent].top="auto";
    }
    if(styleProperty === 'left') {
      window[styleParent].right="auto";
    } else if(styleProperty === 'right'){
      window[styleParent].left="auto";
    }
    window[styleParent][styleProperty] = `${event.target.value}`;
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

  overlayTextChangeHandler = (event) => {
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
      <li className="img-collection-elem" id={this.props.pushId_0}>
        <ImageView class_ImageElement_0={this} pushId_1={this.props.pushId_0} />
        <ImageEditor class_ImageElement_0={this} pushId_1={this.props.pushId_0}/>
        <button className="download-btn" onClick={() => this.downloadData(this.props.pushIndex)}>Download</button>

        {/* <img src={this.props.pushCurrent.bgImg} /, {allowTaint : true,}>
        <img src={this.props.pushCurrent.overlayImg} /> */}
        {/* <button onClick={ ()=> this.props.class_ImageGallery_1.changeImageHandler(this.props.pushIndex)}>ChangeImg</button> */}
      </li>        
    )
  }
}

export default ImageElement;