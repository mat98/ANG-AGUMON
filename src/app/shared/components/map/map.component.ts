import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map: any;
  latLong = [-23.5489,-46.6388];

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.latLong[0], this.latLong[1]],
      zoom: 10,
    });

    var greenIcon = L.icon({
      iconUrl: 'assets/images/web-development.png',

      iconSize: [50, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    L.marker([this.latLong[0], this.latLong[1]], { icon: greenIcon }).addTo(
      this.map
    );

    this.map.setView(new L.LatLng(this.latLong[0], this.latLong[1]), 10);
  }

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }
}
