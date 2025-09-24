import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clima',
  imports: [],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimaComponent { }
