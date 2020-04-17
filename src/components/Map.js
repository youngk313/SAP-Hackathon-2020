import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Data from '../locations/2020_MARCH.json'
import {filterPlaceVisited} from '../helpers/helpers';

class SimpleMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      heatMap: {}
    }
  }

  static defaultProps = {
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 15
  };

  async componentDidMount() {
    const data = await this.setUpHeatMapData();
    this.setState({ heatMap: data});
  }

  setUpHeatMapData(){
    let res = {};
    const data = await getAllCovidData();
    const heatMapData = filterPlaceVisited(data);
    res.positions = heatMapData;
    res.options = {
      radius: 25,
      opacity: 0.5,
    };
    return(res);
  }

  render() {
    if (!this.state.heatMap.positions) {
      return <div>Loading</div>
    }

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
          heatmap={this.state.heatMap}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;