import 'components/EditorItem/EditorItem.css';

const EditorItem = (props) => {
  return ( 
    <div className="editor-item clearfix">
      <label className="common-label" htmlFor={props.labelForFocusId}>{props.label} : </label>
      <input className="common-input" type={props.type} onChange={(event)=> props.change(event, props.styleParent, props.styleProperty)} value={props.value} id={props.labelForFocusId} placeholder={props.placeholder}/>
    </div>
   );
}
 
export default EditorItem;