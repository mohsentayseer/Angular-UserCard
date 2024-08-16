import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
