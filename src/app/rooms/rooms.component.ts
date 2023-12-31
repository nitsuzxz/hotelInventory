import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  //interpolation => can call variable on html file by using {{hotelName}}.
  /// refer rooms.components.html
  hotelName = 'Hotel Nitsu';
  //property binding => can call variable by binding the variable to html properties
  // example <div [innerText]="numberOfRooms"></div> . Refer rooms.components.html
  numberOfRooms = 0;

  //event binding. Refer rooms.components.html to see how the toggle button will trigger
  hideRooms = false;

  selectedRoom!: RoomList;

  title = '';
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room List';
  }

  //Example built in directive

  //this interface will implement ngif in rooms.components.html
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  ngDoCheck(): void {
    console.log('on change called');
  }

  //viewchild property will always access the intance that available
  // on the template
  // static cannot use true when having async code @ViewChild(HeaderComponent, { static: true })
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  //viewchildren can't available on OnInit
  @ViewChildren(HeaderComponent)
  headerchildrenComponent!: QueryList<HeaderComponent>;
  constructor() {}

  ngAfterViewChecked() {}

  //use ngAfterview if using viewchild static is default (false)
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Room View';
    this.headerchildrenComponent.last.title = 'hehee';
    // this.headerchildrenComponent.get(1)?.title use get() to access by index
  }
  //implement ngOnInit
  ngOnInit(): void {
    //this.headercomponent can only be called when static is set to true at the viewchild
    //console.log(this.headerComponent);

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

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomID: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Cond, TV, WiFi',
      price: 500,
      photoUrl:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      checkinTime: new Date('25-Jan-2023'),
      checkoutTime: new Date('27-Jan-2023'),
      rating: 5,
    };

    //this.roomList.push(room);  .push() modify the roomList property. we should not use this when
    // applying changeDetection:ChangeDetectionStrategy.OnPush.
    // when using changeDetection:ChangeDetectionStrategy.OnPush we should pass new instance
    this.roomList = [...this.roomList, room];

    //using spread operator when all elements from an object or array need to be included in a new array
    //in this case we add the old roomlist record then add the new room record into the array
  }
}
