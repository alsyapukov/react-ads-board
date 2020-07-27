import React, { useState, useEffect } from "react";
import s from './leafletMap.module.scss';

import L from 'leaflet'
// import * as ESR from'esri-leaflet'

const style = {
  width: "100%",
  height: "100%"
};

const LeafletMap = ({initMap, updateCenter, coords}) => {

  const [map, setMap] = useState(null);

  useEffect(() => {
    let leafletCss = document.createElement('link');
    leafletCss.setAttribute('rel', 'stylesheet');
    leafletCss.setAttribute('href', 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css');
    leafletCss.setAttribute('integrity', 'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==');
    leafletCss.setAttribute('crossorigin', '');
    document.head.appendChild(leafletCss);

    let leafletEsri = document.createElement('script');
    leafletEsri.setAttribute('src', 'https://unpkg.com/esri-leaflet@2.4.0/dist/esri-leaflet.js');
    leafletEsri.setAttribute('integrity', 'sha512-kq0i5Xvdq0ii3v+eRLDpa++uaYPlTuFaOYrfQ0Zdjmms/laOwIvLMAxh7cj1eTqqGG47ssAcTY4hjkWydGt6Eg==');
    leafletEsri.setAttribute('crossorigin', '');
    document.head.appendChild(leafletEsri);

    let leafletEsriGeocoder = document.createElement('script');
    leafletEsriGeocoder.setAttribute('src', 'https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js');
    leafletEsriGeocoder.setAttribute('integrity', 'sha512-8twnXcrOGP3WfMvjB0jS5pNigFuIWj4ALwWEgxhZ+mxvjF5/FBPVd5uAxqT8dd2kUmTVK9+yQJ4CmTmSg/sXAQ==');
    leafletEsriGeocoder.setAttribute('crossorigin', '');
    document.head.appendChild(leafletEsriGeocoder);
    // console.log(coords[0].split(','))
    let map = L.map('map', {
      center: coords ? coords[0].split(',') : [55.7522, 37.6156],
      zoom: 13,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    setMap(map)

    if(map && initMap) initMap(map);

    map.on('moveend', (e) => {
      let coords = map.getCenter()
      let geocodeService = L.esri.Geocoding.geocodeService();
      geocodeService.reverse().latlng(coords).run((error, result) => {
        if (result && updateCenter) {
          updateCenter({
            coords: [coords.lat, coords.lng],
            address: result.address.LongLabel.split(", ").filter(item => item != result.address.Postal).reverse().join(", ")
          });
        }
      });
    });
  }, []);


  return (
    <div id="map" className={s.map} style={style}></div>
  );
}

export default LeafletMap