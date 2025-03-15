import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  marginTop: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
};

const defaultCenter = {
  lat: 51.1657, // Default to Germany (Change if needed)
  lng: 10.4515
};

const MapComponent = ({ position }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position || defaultCenter} zoom={5}>
        {position && <Marker position={position} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
