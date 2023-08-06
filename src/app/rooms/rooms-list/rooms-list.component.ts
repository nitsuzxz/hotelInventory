import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{

  //sharing data between child and parent components
  //@Input decorator in child component or directive can receive its value from its parents components
  @Input() rooms: RoomList[]=[];
  @Output() selectedRoom= new EventEmitter<RoomList>();
  
  constructor(){}
  
  ngOnInit(): void {}
  
  selectRoom(room: RoomList){
    
    this.selectedRoom.emit(room);
  }
}
