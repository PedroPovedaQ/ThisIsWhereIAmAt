import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AgmCoreModule.forRoot({
			apiKey: environment.apiKey
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
