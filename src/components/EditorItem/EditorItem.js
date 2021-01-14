import './EditorItem.css';

const EditorItem = (props) => {
  return ( 
    <div>
      <label className="common-label" htmlFor={props.label}>{props.label} : </label>
      <input className="common-input" type={props.type} onChange={(event)=> props.change(event, props.styleParent, props.styleProperty)} value={props.value} id={props.label} placeholder={props.placeholder}/>
      {/* <input className="common-input" type={props.type} onChange={(event)=> props.change(event, props.styleParent, props.styleProperty)}  id={props.label} placeholder={props.placeholder}/> */}
    </div>
   );
}
 
export default EditorItem;