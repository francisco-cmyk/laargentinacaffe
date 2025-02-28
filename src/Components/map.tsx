import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { Button } from "./button";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 25.84526707087872,
  lng: -80.23828514566927,
};

const zoom = 16;

const options = {
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullSreenControl: true,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  const [map, setMap] = useState<any | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div className='absolute inset-0 bg-muted-foreground/10 flex items-center justify-center'>
      <div className='text-center p-6'>
        <MapPin className='h-12 w-12 mx-auto mb-4 text-primary' />
        <p className='text-muted-foreground mb-4'>
          Find us easily with directions
        </p>
        <a
          href='https://www.google.com/maps/place/25.846329, -80.238307'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          <Button>Get Directions</Button>
        </a>
      </div>
    </div>
  );
}

export default memo(Map);
