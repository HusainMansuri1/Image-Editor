import './ImageView.css';

const ImageView = (props) => {
  return (
    <div className="img-view-outer-wrap">
      <h2 className="heading-2">Image Preview</h2>
      <div id={props.pushId_1} className="img-view-wrap" style={props.class_ImageElement_0.readyStylesHandler(props.class_ImageElement_0.state.containerRawStyles)}>
        <img crossOrigin="anonymous" className="bg-img" id="bgImg" src={props.class_ImageElement_0.state.bgImg} alt="Background Img"/>
        <img crossOrigin="anonymous" className="overlay-img" id="overlayImg" src={props.class_ImageElement_0.state.overlayImg} alt="Overlay Img" style={props.class_ImageElement_0.readyStylesHandler(props.class_ImageElement_0.state.overlayImgRawStyles)}/>
        <div className="overlay-text-container">
          <div className="overlay-text" style={props.class_ImageElement_0.readyStylesHandler(props.class_ImageElement_0.state.overlayTextRawStyles)}>
            {props.class_ImageElement_0.state.overlayText}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ImageView;