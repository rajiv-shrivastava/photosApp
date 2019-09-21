import React from "react";
import PhotoComponent from "../../components/PhotoComponent";
import { connect } from "react-redux";
import { fetchPhotos} from "../../actions/actionMain";
import './style.css'

class MainPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchPhotos()
  }

  renderData = () => {
    const photos = this.props.photos.map(photo =>{
      return(<div className="col-sm-3" key={photo.id}>
          <PhotoComponent title={photo.title} /> 
         </div>);
     })
     return photos;
  }



  
  render() {

    return (
          <div  className="container-fluid">
            <div className="row">
            {this.renderData()}
            </div>
          </div>      
    )

  }
}

const propTypes = {};

MainPage.propTypes = propTypes;

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
)(MainPage);



