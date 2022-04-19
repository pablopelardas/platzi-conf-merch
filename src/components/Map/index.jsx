import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: location?.latitude || 0,
    lng: location?.longitude || 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB1QEQZQpR-hpw2Rw8F0FJvnqNuzc4vJkM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} draggable={true} title="Drag me!" />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
