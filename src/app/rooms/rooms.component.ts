import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  //interpolation => can call variable on html file by using {{hotelName}}.
  /// refer rooms.components.html
  hotelName= 'Hotel Nitsu'; 
  //property binding => can call variable by binding the variable to html properties
  // example <div [innerText]="numberOfRooms"></div> . Refer rooms.components.html
  numberOfRooms=15; 
 
  //event binding. Refer rooms.components.html to see how the toggle button will trigger
  hideRooms= false;
  
  toggle(){
    this.hideRooms=!this.hideRooms;
  }

  //Example built in directive 

  //ngIF 
  rooms: Room={

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5

  }
   
}

