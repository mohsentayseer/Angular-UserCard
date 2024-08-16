import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-design',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle],
  templateUrl: './card-design.component.html',
  styleUrl: './card-design.component.css'
})
export class CardDesignComponent {
  
@Input() user: any;
faStar = faStar

}
