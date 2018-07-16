import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather/weather.service';
import {ICurrentWeather} from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Santa Cruz', 'US')
      .subscribe((data) => this.current = data);
  }
}
