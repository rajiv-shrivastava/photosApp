import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import ReactTable from 'react-table'
import { ProgressBar, ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchData ,simlePostCall} from "../../actions/actionMain";
import './style.css'
import "react-table/react-table.css";

class MainPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // this.props.fetchData()
  //   let data = {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   }
  //   this.props.simlePostCall().then(
  //     console.log("data posted successfully")
  //   )
  }
  
  render() {
    const data = [{
      name: 'Roy Agasthyan',
      age: 26
    },{
      name: 'Sam Thomason',
      age: 22
    },{
      name: 'Michael Jackson',
      age: 36
    },{
      name: 'Samuel Roy',
      age: 56
    },{
      name: 'Rima Soy',
      age: 28
    },{
      name: 'Suzi Eliamma',
      age: 28
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'Age',
      accessor: 'age'
    }]

    return (
          <div>
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[3, 6]}
              />
          </div>      
    )

  }
}

const propTypes = {};

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    // sampleData: state.sample.sampleData || [],
    // sampleDataLoading: state.sample.sampleDataLoading || false,
    // sampleDataError: state.samplesampleDataError || ''
  };
}

export default connect(
  mapStateToProps,
  { }
)(MainPage);



