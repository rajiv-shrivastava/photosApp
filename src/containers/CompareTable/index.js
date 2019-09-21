import React from "react";
import PhotoComponent from "../../components/PhotoComponent";
import { connect } from "react-redux";
import { removePhoto } from "../../actions/actionMain";
import './style.css'

class CompareTable extends React.Component {
  constructor() {
    super();
  }

  renderData = () => {
    const photos = this.props.comparePhotos.map((photo,i) =>{
      return(<tr key={photo.id}>
               <td> {photo.title} </td>
               <td> {photo.url} </td>
               <td> 
                 <button 
                 className="btn btn-danger" 
                 onClick={() => this.props.removePhoto(photo.id)}> 
                 REMOVE</button> 
                  </td>
         </tr>);
     })
     return photos;
  }



  
  render() {

    return (
          <div  className="container-fluid mb-4">
            CompareTable

             <table className="table">
               <thead>
                <td> Title</td>
                <td> URL</td> 
               </thead>
               <tbody>
               {this.renderData()}
               </tbody>
              </table>
          </div>      
    )

  }
}


const mapStateToProps = (state) => {
  return {
    comparePhotos: state.compareReducer.comparePhotos || []
  };
}

export default connect(
  mapStateToProps,
  { removePhoto }
)(CompareTable);



