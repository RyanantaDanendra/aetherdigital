"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -8.4095, // Denpasar latitude
  lng: 115.1889, // Denpasar longitude
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-service",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <p>Is Loading. . .</p>
  );
}
