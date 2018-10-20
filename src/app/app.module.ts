import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MapComponent } from './containers/map/map.component';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, MapComponent ],
	imports: [
		BrowserModule,
		AgmCoreModule.forRoot({
			apiKey: environment.apiKey
		}),
		FormsModule
	],
	providers: [ GoogleMapsAPIWrapper ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
