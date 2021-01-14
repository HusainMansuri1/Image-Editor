import EditorSection from '../EditorSection/EditorSection';
import EditorItem from '../EditorItem/EditorItem'
import './ImageEditor.css';

const ImageEditor = (props) => {
  
  return (
    <div className="img-editor-outer-wrap">
      <h2 className="heading-2">Image Editor</h2>
      <div className="note">Note: "PX" will be automatically added to Numeric values</div>
      <div className="editor-section">
        <h3 className="heading-3">Background Image</h3>
        <input id="bgImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
        < EditorItem 
          type="number"
          label="width"
          styleParent="containerRawStyles"
          styleProperty="width"
          change={props.class_ImageElement_0.changeStyleHandler}
          value={props.class_ImageElement_0.state.containerRawStyles.width}
          placeholder="Enter width"
        />
        < EditorItem 
          type="number"
          label="height"
          styleParent="containerRawStyles"
          styleProperty="height"
          change={props.class_ImageElement_0.changeStyleHandler}
          value={props.class_ImageElement_0.state.containerRawStyles.height}
          placeholder="Enter height"
        />
      </div>
      <div className="editor-section">
        <h3 className="heading-3">Overlay Image</h3>
        <input id="overlayImg" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
      </div>
      <div className="editor-section">
        <h3 className="heading-3">Overlay Text</h3>
      </div>
    </div>
  );
}

export default ImageEditor;