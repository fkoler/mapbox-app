import { Component, OnInit } from '@angular/core';

import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

@Component({
  selector: 'app-map-common',
  templateUrl: './map-common.component.html',
  styleUrl: './map-common.component.scss'
})
export class MapCommonComponent implements OnInit {

  map: any;
  draw: any;

  constructor() {
    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon: false,
        trash: false
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      // defaultMode: 'draw_point'
    });
  }

  ngOnInit(): void {

    mapboxgl.accessToken = '';
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/dark-v11', // style URL
      center: [19.836, 45.255], // starting position [lng, lat]
      zoom: 13.5, // starting zoom
    });

    this.map.addControl(this.draw);
  }

  drawPoint() {
    this.draw.changeMode('draw_point');
  }

  deleteAll() {
    this.draw.deleteAll();
  }
}
