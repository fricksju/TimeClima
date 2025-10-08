import { TitleCasePipe } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weather-response.model';

@Component({
  selector: 'app-img-titulo',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './img-titulo.component.html',
  styleUrls: ['./img-titulo.component.scss']
})
export class ImgTituloComponent implements OnInit {
 clima= input<Weather | null>(null);

  constructor() { }

  ngOnInit() {
  }

}
