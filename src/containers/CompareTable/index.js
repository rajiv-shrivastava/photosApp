import React from "react";
import PhotoComponent from "../../components/PhotoComponent";
import { connect } from "react-redux";
import { fetchPhotos} from "../../actions/actionMain";
import './style.css'

class CompareTable extends React.Component {
  constructor() {
    super();
  }

  renderData = () => {
    const photos = this.props.photos.map((photo,i) =>{
      return(<div className="col-sm-3" key={photo.id}>
          <PhotoComponent title={photo.title} /> 
         </div>);
     })
     return photos;
  }



  
  render() {

    return (
          <div  className="container-fluid">

            I am compare table
          </div>      
    )

  }
}


const mapStateToProps = (state) => {
  return {
    photos: state.photosReducer.photos || [],
    photosLoading: state.photosReducer.photosLoading || false,
    photosError: state.photosReducer.photosError || ''
  };
}

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(CompareTable);



