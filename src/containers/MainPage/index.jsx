import React from "react";
import PhotoComponent from "../../components/PhotoComponent";
import { connect } from "react-redux";
import { fetchPhotos,comparePhoto} from "../../actions/actionMain";
import './style.css'
import CompareTable from "../CompareTable";


class MainPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchPhotos()
  }

  comparePhoto = (id) => {
    let photo = this.props.photos.find((photo) => {return id == photo.id })
    this.props.comparePhoto(photo)

  }

  renderData = () => {
    const photos = this.props.photos.map(photo =>{
      return(<div className="col-sm-3" key={photo.id}>
          <PhotoComponent {...photo} comparePhoto={this.comparePhoto} /> 
         </div>);
     })
     return photos.slice(0,9);
  }



  
  render() {

    return (
          <div  className="container-fluid">
            <div className="row">
            {this.renderData()}
            </div>
            <CompareTable />
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
  { fetchPhotos,comparePhoto }
)(MainPage);



