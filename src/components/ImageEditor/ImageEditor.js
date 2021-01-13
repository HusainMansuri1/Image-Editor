import './ImageEditor.css';

const ImageEditor = (props) => {
  
  return (
    <div className="img-editor-wrap">
      {/* <input type="number"onChange={props.class_ImageElement_0.font} value={props.class_ImageElement_0.state.rawStyles.fontSize}/>
      <input type="text"onChange={props.class_ImageElement_0.overlayText} value={props.class_ImageElement_0.state.overlayText}/> */}
      <input id="bgImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
      <input id="overlayImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
      <button onClick={props.class_ImageElement_0.change}>Border</button>
    </div>
  );
}

export default ImageEditor;