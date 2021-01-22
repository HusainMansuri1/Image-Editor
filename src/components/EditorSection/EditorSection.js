import './EditorSection.css';

const EditorSection = (props) => {
  return (
    <div className="editor-section">
      <h3 className="heading-3">{props.name}</h3>
    </div>
  );
}

export default EditorSection;