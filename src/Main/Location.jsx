import React from "react";
import GoogleMapReact from "google-map-react";

const Location = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 36.73345065338286,
      lng: 3.0608720707063712,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC4hf5YSZFSIbIJ7dkdGHvjTjq_6lfDeyo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Location
          lat={36.73345065338286,}
          lng={3.0608720707063712}
          text="Piramid Group"
        />
      </GoogleMapReact>
    </div>
  );
}
