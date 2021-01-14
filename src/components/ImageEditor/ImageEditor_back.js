import EditorSection from '../EditorSection/EditorSection';
import EditorItem from '../../components/EditorItem/EditorItem'
import './ImageEditor.css';

const ImageEditor = (props) => {
  
  return (
    <div className="img-editor-outer-wrap">
      <h2 className="heading-2">Image Editor</h2>
      <div className="note">Note: Enter in "PX"</div>
      {/* <input type="number"onChange={props.class_ImageElement_0.font} value={props.class_ImageElement_0.state.rawStyles.fontSize}/>
      <input type="text"onChange={props.class_ImageElement_0.overlayText} value={props.class_ImageElement_0.state.overlayText}/> */}
      
      

      {/* < EditorItem 
        type="text"
        label="Overlay Text"
        change={props.class_ImageElement_0.overlayText}
        value={props.class_ImageElement_0.state.overlayText}
        placeholder="Enter Overlay Text"
      /> */}
      {/* <input id="bgImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
      <input id="overlayImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/> */}
    </div>
  );
}

export default ImageEditor;