import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: '<h1>Inline template example</h1>', //inline template example
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelInventory';
  role = 'Admin';
  //remember dont use oninit if use viewchild static default
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 10000;
  // }

  //example using viewchild to change html properties
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'My hotel';
  }
}
