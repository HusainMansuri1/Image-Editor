import React from 'react';
import EditorItem from 'components/EditorItem/EditorItem'
import 'components/ImageEditor/ImageEditor.css';

const ImageEditor = (props) => {
  
  return (
    <div className="img-editor-outer-wrap">
      <h2 className="heading-2">Image Editor</h2>
      <div className="note"><span className="note-head">Note</span>: "px" will be added to Numeric values</div>
      <div className="editor-section">
        <h3 className="heading-3">Background Image</h3>
        <input id="bgImg" className="file-upload-input" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
        < EditorItem 
          type="number"
          label="width"
          labelForFocusId={`bgImg-width-${props.pushId_1}`}
          styleParent="containerRawStyles"
          styleProperty="width"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.containerRawStyles.width}
          placeholder="Enter width"
        />
        < EditorItem 
          type="number"
          label="height"
          labelForFocusId={`bgImg-height-${props.pushId_1}`}
          styleParent="containerRawStyles"
          styleProperty="height"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.containerRawStyles.height}
          placeholder="Enter height"
        />
      </div>
      <div className="editor-section">
        <h3 className="heading-3">Overlay Image</h3>
        <input id="overlayImg" className="file-upload-input" type="file" accept="image/*" multiple = {false} onChange={props.class_ImageElement_0.handleImageUpload}/>
        < EditorItem 
          type="number"
          label="width"
          labelForFocusId={`overlayImg-width-${props.pushId_1}`}
          styleParent="overlayImgRawStyles"
          styleProperty="width"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.overlayImgRawStyles.width}
          placeholder="Enter width"
        />
        < EditorItem 
          type="number"
          label="height"
          labelForFocusId={`overlayImg-height-${props.pushId_1}`}
          styleParent="overlayImgRawStyles"
          styleProperty="height"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.overlayImgRawStyles.height}
          placeholder="Enter height"
        />
        <div className="editor-item">
          <label className="common-label center-label" htmlFor={`isOverlayImgCenter-${props.pushId_1}`}>Center</label>
          <input checked={props.class_ImageElement_0.state.isOverlayImgCenter ? true : false} onChange={(event) => props.class_ImageElement_0.centerHandler(event, "isOverlayImgCenter")} className="center-checkbox" type="checkbox" id={`isOverlayImgCenter-${props.pushId_1}`}/>
        </div>
        {
          props.class_ImageElement_0.state.isOverlayImgCenter ? null :
          <React.Fragment>
            < EditorItem 
              type="number"
              label="top"
              labelForFocusId={`overlayTextRawStyles-top-${props.pushId_1}`}
              styleParent="overlayImgRawStyles"
              styleProperty="top"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayImgRawStyles.top}
              placeholder="Enter top"
            />
            < EditorItem 
              type="number"
              label="bottom"
              labelForFocusId={`overlayImgRawStyles-bottom-${props.pushId_1}`}
              styleParent="overlayImgRawStyles"
              styleProperty="bottom"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayImgRawStyles.bottom}
              placeholder="Enter bottom"
            />
            < EditorItem 
              type="number"
              label="left"
              labelForFocusId={`overlayImgRawStyles-left-${props.pushId_1}`}
              styleParent="overlayImgRawStyles"
              styleProperty="left"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayImgRawStyles.left}
              placeholder="Enter left"
            />
            < EditorItem 
              type="number"
              label="right"
              labelForFocusId={`overlayImgRawStyles-right-${props.pushId_1}`}
              styleParent="overlayImgRawStyles"
              styleProperty="right"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayImgRawStyles.right}
              placeholder="Enter right"
            />
          </React.Fragment>
        }
      </div>
      <div className="editor-section">
        <h3 className="heading-3">Overlay Text</h3>
        <div className="editor-item clearfix">
          <label className="common-label" htmlFor={`overlayText-${props.pushId_1}`}>Text : </label>
          <input className="common-input" type="text" onChange={(event)=> props.class_ImageElement_0.overlayTextChangeHandler(event)} value={props.class_ImageElement_0.state.overlayText} id={`overlayText-${props.pushId_1}`}/>
        </div>
        < EditorItem 
          type="number"
          label="size"
          labelForFocusId={`overlayTextRawStyles-fontSize-${props.pushId_1}`}
          styleParent="overlayTextRawStyles"
          styleProperty="fontSize"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.overlayTextRawStyles.fontSize}
          placeholder="Enter Font Size"
        />
        < EditorItem 
          type="color"
          label="color"
          labelForFocusId={`overlayTextRawStyles-color-${props.pushId_1}`}
          styleParent="overlayTextRawStyles"
          styleProperty="color"
          change={props.class_ImageElement_0.styleChangeHandler}
          value={props.class_ImageElement_0.state.overlayTextRawStyles.color}
          placeholder="Enter Color"
        />
        <div className="editor-item">
          <label className="common-label center-label" htmlFor={`isOverlayTextCenter-${props.pushId_1}`}>Center</label>
          <input checked={props.class_ImageElement_0.state.isOverlayTextCenter ? true : false} onChange={(event) => props.class_ImageElement_0.centerHandler(event, "isOverlayTextCenter")} className="center-checkbox" type="checkbox" id={`isOverlayTextCenter-${props.pushId_1}`}/>
        </div>
        {
          props.class_ImageElement_0.state.isOverlayTextCenter ? null :
          <React.Fragment>
            < EditorItem 
              type="number"
              label="top"
              labelForFocusId={`overlayTextRawStyles-top-${props.pushId_1}`}
              styleParent="overlayTextRawStyles"
              styleProperty="top"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayTextRawStyles.top}
              placeholder="Enter top"
            />
            < EditorItem 
              type="number"
              label="bottom"
              labelForFocusId={`overlayTextRawStyles-bottom-${props.pushId_1}`}
              styleParent="overlayTextRawStyles"
              styleProperty="bottom"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayTextRawStyles.bottom}
              placeholder="Enter bottom"
            />
            < EditorItem 
              type="number"
              label="left"
              labelForFocusId={`overlayTextRawStyles-left-${props.pushId_1}`}
              styleParent="overlayTextRawStyles"
              styleProperty="left"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayTextRawStyles.left}
              placeholder="Enter left"
            />
            < EditorItem 
              type="number"
              label="right"
              labelForFocusId={`overlayTextRawStyles-right-${props.pushId_1}`}
              styleParent="overlayTextRawStyles"
              styleProperty="right"
              change={props.class_ImageElement_0.positionStyleChangeHandler}
              value={props.class_ImageElement_0.state.overlayTextRawStyles.right}
              placeholder="Enter right"
            />
          </React.Fragment>          
        }        
      </div>
    </div>
  );
}

export default ImageEditor;