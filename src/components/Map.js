import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Data from '../locations/2020_MARCH.json'
import {filterPlaceVisited} from '../helpers/helpers';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      heatMap: []
    }
  }

  static defaultProps = {
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 11
  };

  componentDidMount() {
    console.log("mounted");
    this.setState({ heatMap: this.setUpHeatMapData()});
  }

  setUpHeatMapData(){
    let res = {};
    const heatMapData = filterPlaceVisited(Data.timelineObjects);
    res.positions = heatMapData;
    res.options = {
      radius: 20,   
      opacity: 0.5,
    };
    return(res);
  }


  render() {
    const heatMapData = this.setUpHeatMapData();

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact  
          ref={(el) => {
            console.log(el);
            this._googleMap = el;
          }}
          bootstrapURLKeys={{ key: "AIzaSyBop-S5jaZqhpd_DYhDMO2h2mpWExwMYNQ"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;