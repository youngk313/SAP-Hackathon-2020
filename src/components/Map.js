import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {filterPlaceVisited, getAllCovidData, getInfectedPlaces} from '../helpers/helpers';

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
    zoom: 15
  };

  componentDidMount() {
    console.log("mounted");
    this.setState({ heatMap: this.setUpHeatMapData()});
  }

  async dataBuffer() {
    return await getAllCovidData();
  }

  async setUpHeatMapData(){
    let res = {};
    const data = await getAllCovidData();
    console.log(data);
    const heatMapData = filterPlaceVisited(data);
    res.positions = heatMapData;
    res.options = {
      radius: 25,   
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