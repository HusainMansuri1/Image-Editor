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

    containerStyles: {
      width: "250px",
      height: "auto",
      boxSizing: "content-box",
      background: "#ccc",
    }
  }

  change = () => {
    let containerStyles = {...this.state.containerStyles}
    containerStyles.border = "10px solid red";
    this.setState({containerStyles});
  }

  downloadData = (index)  => {
    
    let container = document.getElementsByClassName("img-view-wrap")[index];
    container.classList.add("active");
    // let container = document.querySelector(".img-view-wrap");
    console.log('index:', index)
    console.log('container:', container)

    let elem = document.querySelector(".active.img-view-wrap");

    html2canvas(elem, { allowTaint: true }).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "ci.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });

    elem.classList.remove("active");
    
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

  handleImageUpload = (event) => {
    const [file] = event.target.files;
    console.log('file:', file)
    
    if (file) {
      if(event.target.id === "bgImg"){
        let bgImg = URL.createObjectURL(file);
        this.setState({ bgImg });
      } else if(event.target.id === "overlayImg"){
        let overlayImg = URL.createObjectURL(file);
        this.setState({ overlayImg });
      }

    } 
  };

  render() {
    return(
      <li className="img-collection-elem" style={ {border: "1px solid red", margin: "20px", float: "left", textAlign: "center", width: "300px",} }>
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