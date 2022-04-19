import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 38.897675,
    lng: -77.036547,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB1QEQZQpR-hpw2Rw8F0FJvnqNuzc4vJkM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
