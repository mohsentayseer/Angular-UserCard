import { Component } from '@angular/core';
import { CardDesignComponent } from '../card-design/card-design.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import usersData from "../../assets/users.json"

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardDesignComponent, FormsModule,NgClass],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  input_value: string = '';
  hassearched: boolean = false;
  usersList: Array<any> = usersData

  search() {
    if(this.input_value == ""){
      this.usersList = usersData;
      this.hassearched = false;

    }
    else{
      this.hassearched = true;
    }
    this.usersList = this.usersList.filter((user) =>
      user.email.includes(this.input_value)
  );

  }
  reset() {
    this.input_value = '@';
    this.usersList = usersData;
    this.hassearched = false;

  }
}
