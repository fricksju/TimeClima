import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { Weather, WeatherResponse } from '../../models/weather-response.model';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima: WeatherResponse | null= null;
  constructor() { }

  ngOnInit() {
    this.openWeatherService.buscarInfoClimaCidadeAtual();
  }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}