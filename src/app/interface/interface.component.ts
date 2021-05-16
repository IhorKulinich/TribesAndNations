import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  status: any;
  @Output() statusInterface : EventEmitter<number> = new EventEmitter();


  constructor() { }

  statusSplash(status){
	this.status=status;
  }

  statusMenu(status){
	this.statusInterface.emit(status);
  }	

  ngOnInit(): void {
  	this.status = 1;
  }

}
 