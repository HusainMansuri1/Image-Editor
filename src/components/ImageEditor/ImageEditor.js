import './ImageEditor.css';

const ImageEditor = (props) => {
  return (
    <div>
      <input type="number"onChange={props.class_ImageElement_0.font} value={props.class_ImageElement_0.state.rawStyles.fontSize}/>
      <input type="text"onChange={props.class_ImageElement_0.overlayText} value={props.class_ImageElement_0.state.overlayText}/>
    </div>
  );
}

export default ImageEditor;