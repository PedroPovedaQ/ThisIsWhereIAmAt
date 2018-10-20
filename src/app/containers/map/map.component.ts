import { Location } from '../../interfaces/location';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.css' ]
})
export class MapComponent implements OnInit {
	geocoder: any;
	public location: Location = {
		lat: 51.678418,
		lng: 7.809007,
		marker: {
			lat: 51.678418,
			lng: 7.809007,
			draggable: true
		},
		zoom: 5
	};

	@ViewChild(AgmMap) map: AgmMap;
	constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {
		this.mapsApiLoader = mapsApiLoader;
		this.zone = zone;
		this.wrapper = wrapper;
		this.mapsApiLoader.load().then(() => {
			this.geocoder = new google.maps.Geocoder();
		});
	}

	ngOnInit() {
		this.location.marker.draggable = true;
	}
}
