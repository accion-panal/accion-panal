import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl';
import { mapbox } from '@/api';
mapboxgl.accessToken = mapbox;

const MapBoxContainer = ({ LngLat }) => {
  // Si LngLat no está definido o es una cadena vacía, no hacer nada
  if (!LngLat || LngLat.trim() === '') {
    return null;
  }

  const matches = LngLat.match(/(-?\d+\.\d+)/g) || [];
  const [lng, lat] = matches.map(Number);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    } else {
      map.current.setCenter([lng, lat]);
    }

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  }, [lng, lat, zoom, LngLat]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" style={{ height: '400px' }} />
    </div>
  );
};

export default MapBoxContainer;
