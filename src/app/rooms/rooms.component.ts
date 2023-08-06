import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  //interpolation => can call variable on html file by using {{hotelName}}.
  /// refer rooms.components.html
  hotelName = 'Hotel Nitsu';
  //property binding => can call variable by binding the variable to html properties
  // example <div [innerText]="numberOfRooms"></div> . Refer rooms.components.html
  numberOfRooms = 0;

  //event binding. Refer rooms.components.html to see how the toggle button will trigger
  hideRooms = false;

  selectedRoom!:RoomList;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  //Example built in directive

  //this interface will implement ngif in rooms.components.html
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  constructor() {}

  //implement ngOnInit
  
  ngOnInit(): void {
    this.roomList = [
      {
        roomID: 1,
        roomType: 'Single Room',
        amenities: 'Air Cond, TV, WiFi',
        price: 120,
        photoUrl:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
        checkinTime: new Date('25-June-2023'),
        checkoutTime: new Date('27-June-2023'),
        rating: 4,
      },
      {
        roomID: 2,
        roomType: 'Studio Room',
        amenities: 'Air Cond, TV, WiFi',
        price: 200,
        photoUrl:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
        checkinTime: new Date('25-May-2023'),
        checkoutTime: new Date('27-May-2023'),
        rating: 4.5,
      },
      {
        roomID: 3,
        roomType: 'Suite Room',
        amenities: 'Air Cond, TV, WiFi',
        price: 400,
        photoUrl:
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
        checkinTime: new Date('25-Jan-2023'),
        checkoutTime: new Date('27-Jan-2023'),
        rating: 5,
      },
    ];
  }

  selectRoom(room: RoomList){
    
    this.selectedRoom=room;
  }
}
