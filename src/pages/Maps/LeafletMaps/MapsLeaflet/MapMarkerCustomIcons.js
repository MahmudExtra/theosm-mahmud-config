import React, { Component } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { addBuoys } from "../../../../store/buoy-netowork/actions";
import FeatherIcon from "feather-icons-react";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

class MapMarkerCustomIcons extends Component {

  state = {
    lat: 51.12188590982952,
    lng: 1.3151436004093704,
    zoom: 15,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const allBuoys = this.props.getBuoys;
    return (
      <MapContainer
        center={position}
        zoom={this.state.zoom}
        style={{ height: "377px", borderRadius: "5px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {allBuoys?.map((item) => (
          <Marker
            key={item?.id}
            position={[item?.lat, item?.lng]}
            eventHandlers={{
              click: () => {
                this.props.addBuoy({
                  name: item?.name,
                  data: item?.data,
                  CO2: item?.CO2,
                  Tide: item?.Tide,
                  wind: item?.wind,
                  time: item?.time,
                  date: item?.date,
                });
              },
            }}
          >
            <Popup className="pb-3" minWidth={250}>
              <div className="d-flex aligin-items-center gap-2 text-muted">
                <div className="d-flex gap-1">
                  <FeatherIcon icon="clock" className="icon-xs " />
                  <p className="mt-0 mb-1">{item?.date}</p>
                </div>
                <p className="mt-0 mb-1">{item?.time}</p>
              </div>
              <div className="table-responsive m-0">
                <Table className="table-nowrap align-middle m-0 text-black-50">
                  <tbody>
                    <tr className="border-light border-top me-2">
                      <td className="p-1">gps</td>
                      <td className="p-1">{item?.name}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBuoy: (value) => dispatch(addBuoys(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMarkerCustomIcons);
