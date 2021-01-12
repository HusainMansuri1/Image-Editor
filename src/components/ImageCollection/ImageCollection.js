import ImageElement from '../ImageElement/ImageElement';
import './ImageCollection.css';

const ImageCollection = (props) => {
  return ( 
    <div className="image-collection-wrap">
      <ul className="img-collection-list">
        {props.class_ImageGallery_0.state.imageCollection.map((current, index) => 
          <ImageElement
            key={current.id} 
            pushCurrent={current} 
            pushIndex={index}
            pushIndex={index}
            class_ImageGallery_1={props.class_ImageGallery_0}
          />
        )}
      </ul>
    </div>
  );
}

export default ImageCollection;