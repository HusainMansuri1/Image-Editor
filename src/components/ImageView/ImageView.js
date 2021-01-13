import './ImageView.css';

const ImageView = (props) => {
  return (
    <div id={props.pushId_1} className="img-view-wrap" style={props.class_ImageElement_0.state.containerStyles}>
      {/* <p style={props.class_ImageElement_0.readyStyles(props.class_ImageElement_0.state.rawStyles)}>{props.class_ImageElement_0.state.overlayText}</p> */}
        <img crossOrigin="anonymous" className="bg-img" id="bgImg" src={props.class_ImageElement_0.state.bgImg} alt="Background Img"/>
        <img crossOrigin="anonymous" className="overlay-img" id="overlayImg" src={props.class_ImageElement_0.state.overlayImg} alt="Overlay Img" style={{height: "100px", width: "100px",}}/>
    </div>
  );
}
 
export default ImageView;