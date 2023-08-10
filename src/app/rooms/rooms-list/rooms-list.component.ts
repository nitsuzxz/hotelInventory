import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  //requirement when using changeDetection .OnPush:
  // - cannot change the data internally
  // - incase of retrieving or assigning the data, it should be from parent component.
  //the property must immutable (object cannot be altered after it is created)
})
export class RoomsListComponent implements OnInit, OnChanges {
  //sharing data between child and parent components
  //@Input decorator in child component or directive can receive its value from its parents components
  //@Input  lets a parent component update data in the child component
  //@Output() lets the child send data to a parent component.
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
