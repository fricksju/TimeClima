import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { Weather, WeatherResponse } from '../../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent  {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual(),
  );

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}