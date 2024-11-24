import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule], // Sólo importa ButtonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prime_project';
}
