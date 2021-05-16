import { Component } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TribesAndNations';
  status : any;

  statusInterface(status){
	this.status=status;
	console.log(this.status);
  }	

}
 