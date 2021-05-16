
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

	@ViewChild('marqLeft') mLeft:ElementRef;
  @ViewChild('marqRight') mRight:ElementRef;

	buttonClicked = ( buttonHandler , bi ) => {

  		console.dir(this.mainButtons[buttonHandler][bi]);
  		this.mainButtons[buttonHandler][bi].onclick();

  	}

  	messegesFocus = ( i ) => {

  		if ( i == 0 ) {

  			this.mLeft.nativeElement.attributes.scrollamount.value = "0.5";
  			this.mRight.nativeElement.attributes.scrollamount.value = "0.2";
  		
      }

  		if ( i == 1 ) {

  			this.mLeft.nativeElement.attributes.scrollamount.value = "0.2";
  			this.mRight.nativeElement.attributes.scrollamount.value = "0.5";
  		
      }

  	}

  	unfocus = () => {

  		this.mLeft.nativeElement.attributes.scrollamount.value = "1";
  		this.mRight.nativeElement.attributes.scrollamount.value = "1";
  	
    }

  secondCont:boolean;

  topGridColumns:any;
  taskSectors:any;
  mainButtons:any;
  buttonHandler:any;
  speedLeft:number;
  speedRight:number;

  getClientCountry:any;
  gameClicked:any;
  detailClicked:any;
  selectClicked:any;
  exitClicked:any;

  colorSector:any;
  colorTab:any;
  messageLeft:any;
  messageRight:any;

  @Output() statusMenu : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.secondCont = false;

  	this.messageLeft = [
  		{header: "first",
  		paragraph:[
  			{text:"hello"},
  			{text:"i'm ihor"},
  			{text:"this is Tribes&Nations"}
  			]},
  			{header: "thanks",
  		paragraph:[
  			{text:"thanks to mapbox"},
  			{text:"thanks to leaflet"},
  			]},
  			{header: "something 3",
  		paragraph:[
  			{text:"something text 1"},
  			{text:"something text 2"},
  			{text:"something text 3"}
  			]},
  		];
  		this.messageRight = [
  		{header: "first",
  		paragraph:[
  			{text:"hello"},
  			{text:"i'm ihor"},
  			{text:"this is Tribes&Nations"}
  			]},
  			{header: "thanks",
  		paragraph:[
  			{text:"thanks to mapbox"},
  			{text:"thanks to leaflet"},
  			]},
  			{header: "something 3",
  		paragraph:[
  			{text:"something text 1"},
  			{text:"something text 2"},
  			{text:"something text 3"}
  			]},
  		];


  	this.taskSectors = [["Tribes&Nations","0.01035"],
  		[{name:"styling", prog:90},
  	{name:"structure", prog:80},
  	{name:"gamemenu", prog:70},
  	{name:"detailmenu", prog:60},
  	{name:"browser/electron", prog:50},
  	{name:"select", prog:40}],
  		[{name:"layers", prog:30},
  	{name:"lay_dyn", prog:20},
  	{name:"sources", prog:20},
  	{name:"sou_dyn", prog:20},
  	{name:"events", prog:20}],
  		[{name:"tructure", prog:10},
  	{name:"sectors", prog:20},
  	{name:"parameters", prog:30},
  	{name:"par_f_wiki", prog:20}],
  		[{name:"example", prog:40},
  	{name:"history", prog:50},
  	{name:"loading", prog:60},
  	{name:"ukraine", prog:70},
  	{name:"zastavka", prog:80}],
  		[{name:"temperature", prog:80},
  	{name:"elevation", prog:90},
  	{name:"waters", prog:80},
  	{name:"battles", prog:80},
  	{name:"times", prog:80},
  	{name:"tr_pot", prog:80},
  	{name:"ec_pot", prog:80},
  	{name:"defence", prog:80}],
  	["start menu", "more details i'm now do la la very slow but vey interesting"]];


  	this.topGridColumns = ( ( window.innerWidth - 20 - 300 ) / ( this.taskSectors.length - 2 ) ).toString() + "px ";

  	for ( var i=0 ; i<this.taskSectors.length-3 ; i++ ) {

  		this.topGridColumns += ( ( window.innerWidth - 20 - 300 ) / ( this.taskSectors.length - 2 ) ).toString() + "px ";
  	
    }

  	this.buttonHandler = 0;
  	this.speedLeft = 1;
  	this.speedRight = 1;

  	this.colorSector = ( i ) => {

  		if ( Math.floor( i / 2 ) != i / 2 ) {

  			return 'rgb(226,226,226)';

  		} else { 

  			return 'rgb(206,206,206)';

  		}

  	}

  	this.colorTab = ( ii ) => {

  		if ( Math.floor( ii / 2 ) != ii / 2 ) {

  			return 'rgb(168,168,168)';

  		} else { 

  			return 'rgb(185,185,185)';

  		}

  	}

  	this.gameClicked = () => {
  		//this.buttonHandler = 2;
      this.statusMenu.emit(3);

  	}

  	this.detailClicked = () => {
  		this.buttonHandler = 1;
  	}

  	this.selectClicked = () => {
  		this.buttonHandler = 3;
  	}

  	this.exitClicked = () => {

  	}

  	this.getClientCountry = () => {

  		this.mainButtons[2][0].name = "Ukraine";
  		console.dir(this.mainButtons);

  	};
  	//this.getClientCountry();

  	this.mainButtons = [[{name:"game", 
  		onclick:()=>{this.gameClicked();}
  						},{name:"detail", 
  		onclick:()=>{this.detailClicked();}
  						},{name:"select", 
  		onclick:()=>{this.selectClicked();}
  						},{name:"forum",
  		onclick:()=>{}
  		},{name:"other",
  		onclick:()=>{}
  		},{name:"exit", 
  		onclick:()=>{this.exitClicked();}
  						}], 

  						[{name:"Ukraine"}, 
  						{name:"ecology"}, 
  						{name:"conflicts"},
  						{name:"disasters"}], 

  						[{name:""},{name:"select map"},
  						{name:"history"},
  						{name:"nation history"}],

  						[{name:"select map"}]];
  }

}
