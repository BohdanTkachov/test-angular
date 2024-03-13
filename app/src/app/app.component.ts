import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

var bool = true;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app';
}
