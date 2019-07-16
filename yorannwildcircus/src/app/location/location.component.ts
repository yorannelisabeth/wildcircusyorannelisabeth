import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([48.473068, 1.024206], 18);
 
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIconSportForU = L.icon({
      iconUrl: './assets/images/logo.png',
      iconSize: [30,30],
      
    
    });

 // create popup contents
    var customPopup = "<p>Avenue de Beauce 28240 LA LOUPE</p>";
    
    // specify popup options 
    var myOptions =
        {
        'maxHeigth': 70,
        'className' : 'custom'

        }

    L.marker([48.473068, 1.024206], {icon: myIconSportForU}).bindPopup(customPopup,myOptions).addTo(myfrugalmap).openPopup();
  }

}
