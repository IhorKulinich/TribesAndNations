import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

 
@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  backMap: any;
  style = 'mapbox://styles/hort/ckobm583j18eo17ryx6zf0kzg';
  lat = 48;
  lng = 36;
  zoom = 3;
  Ulat=49.11111;
  Ulng=31;
  Uzoom=4.5;

  timerFirstFunc:any;
  timerSecondFunc:any;
  timerThirdFunc:any;
  timerForthFunc:any;
  timerFifthFunc:any;
  intervals:any;
  intervCount:any;
  svgTransform:any;
  texttnChildrens:any;
  status:any;

  @Output() statusSplash : EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA');

    this.status = 1;

    this.backMap = new mapboxgl.Map({

      container: 'backMap',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat], 
      minZoom: 3,
      maxZoom: 13, 
      interactive: true
    
    });

    this.backMap.getCanvas().style.cursor = 'crosshair';
    this.backMap.getCanvas().style.height = "100vh";
    
    this.backMap.boxZoom.disable();

    this.svgTransform = {

      fontSize: 250, 
      texthx: 85,
      texttx: 600,
      textorh: 150,
      textorx: 245,
      opacity: 1,
      texteamy: 0,
      textShadowSize: 30,
      textShadowOpacity: 0.6, 
      topBottomSize: 90,
      centeSize: 446

    };

    this.timerFirstFunc = (up,grow) => {

      if ( up ) {

        this.svgTransform.opacity += grow;

      } else {

        this.svgTransform.opacity -= grow;

      }

      document.getElementById("hider").style.opacity = this.svgTransform.opacity.toString();

    }

    this.timerSecondFunc = () => {

      if ( this.svgTransform.opacity < 1 ) {

        this.svgTransform.opacity += 0.06;
        document.getElementById("texth").setAttribute("fill", "rgba(250,250,250," + ( 1 - this.svgTransform.opacity ).toString() + ")" );
        document.getElementById("texteam").setAttribute("fill", "rgba(250,250,250," + ( 1 - this.svgTransform.opacity ).toString() + ")" );
        document.getElementById("textprod").setAttribute("fill", "rgba(250,250,250," + ( 1 - this.svgTransform.opacity ).toString() + ")" );
        document.getElementById("textreg").setAttribute("fill", "rgba(250,250,250," + ( 1 - this.svgTransform.opacity ).toString() + ")" );
        document.getElementById("textH").setAttribute("fill", "rgba(250,250,250," + this.svgTransform.opacity.toString() + ")" );
            
      }

      if ( this.svgTransform.textorx < 280 ) {

        this.svgTransform.textorx += 2.1;
        document.getElementById("textor").setAttribute("x", this.svgTransform.textorx.toString() );

      }

    }

    this.timerThirdFunc = () => {

      if ( this.svgTransform.fontSize < 350 ) {

        this.svgTransform.fontSize += 4;
        document.getElementById("texti").setAttribute("font-size", this.svgTransform.fontSize.toString() );
        document.getElementById("textH").setAttribute("font-size", this.svgTransform.fontSize.toString() );
        document.getElementById("textor").setAttribute("font-size", this.svgTransform.fontSize.toString() );
        document.getElementById("textt").setAttribute("font-size", this.svgTransform.fontSize.toString() );

        document.getElementById("texti").setAttribute("y", this.svgTransform.fontSize.toString() );
        document.getElementById("textH").setAttribute("y", this.svgTransform.fontSize.toString() );
        document.getElementById("textor").setAttribute("y", this.svgTransform.fontSize.toString() );
        document.getElementById("textt").setAttribute("y", this.svgTransform.fontSize.toString() );

      }

      if ( this.svgTransform.texthx < 120 ) {

        this.svgTransform.texthx += 1*3/2 ;
        this.svgTransform.texttx += 7.2*3/2;
        this.svgTransform.textorx += 3.5*3/2;

        document.getElementById("textH").setAttribute("x", this.svgTransform.texthx.toString() );
        document.getElementById("textor").setAttribute("x", this.svgTransform.textorx.toString() );
        document.getElementById("textt").setAttribute("x", this.svgTransform.texttx.toString() );
      }

      document.getElementById("svgContainer").innerHTML += "";

    }

    this.timerForthFunc = () => {

      //////////////// BBBBAAAAGGGG  ///////////////////////

      if ( this.svgTransform.textShadowSize < 200 ) {

        this.svgTransform.textShadowSize += 30;

      }

      if ( this.svgTransform.textShadowOpacity < 1 ) {

        this.svgTransform.textShadowOpacity += 0.04;

      }

      for ( var i = 0 ; i < 5 ; i++ ) {

        document.getElementById("tnClip").children[i].setAttribute("style", "text-shadow: 0px 0px " + this.svgTransform.textShadowSize + "px rgba(0,0,0," + this.svgTransform.textShadowOpacity + ");" ) ;

      }

      if (  this.svgTransform.opacity > 0 ) {

        this.svgTransform.opacity -= 0.04;
        document.getElementById("hideMap").style.background = "rgba(250,250,250," + this.svgTransform.opacity + ")";


      }

      document.getElementById("svgContainer").innerHTML += "";
      document.getElementById("tnClip").innerHTML += "";

      ////////////////  BBBBAAAAGGGG   ///////////////////////

    }

    this.backMap.on('load', () => {

      this.intervCount = 1;

      this.intervals = setInterval(() => {

        if ( this.intervCount == 1 ){

          if ( this.svgTransform.opacity > 0 ) {

            this.timerFirstFunc(false,0.01);

          } else {
            
            this.svgTransform.opacity = 0;
            this.intervCount +=1;

          }

        } else if ( this.intervCount == 2 ) {

          if ( this.svgTransform.opacity < 1 || this.svgTransform.textorx < 280 ) {

            this.timerSecondFunc();

          } else {

            this.intervCount += 1;

          }

        } else if ( this.intervCount == 3 ) {

          if ( this.svgTransform.fontSize < 350 || this.svgTransform.texthx < 121 ) {

            this.timerThirdFunc();

          } else {

            this.intervCount += 1;

          }

        } else if ( this.intervCount == 4 ) {

          if ( this.svgTransform.opacity > 0 ) {

            this.svgTransform.opacity -= 0.02;

          } else {

            this.intervCount += 1;

          }

        } else if ( this.intervCount == 5 ) {

          if ( this.svgTransform.opacity < 1 ) {

            this.timerFirstFunc(true,0.02);

          } else {

            this.intervCount += 1;
            document.getElementById("texti").setAttribute("fill", "rgba(250,250,250,0)");
            document.getElementById("textH").setAttribute("fill", "rgba(250,250,250,0)");
            document.getElementById("textor").setAttribute("fill", "rgba(250,250,250,0)");
            document.getElementById("textt").setAttribute("fill", "rgba(250,250,250,0)");
            document.getElementById("texttnrect").setAttribute("fill", "rgba(250,250,250,1)");
            document.getElementById("hideMap").style.background = "transparent";
            document.getElementById("backMap").style["clip-path"] = "url(#tnClip)";
            
          }

        } else if ( this.intervCount == 6 ) {

          if ( this.svgTransform.opacity > 0 ) {

            this.timerFirstFunc(false,0.02);

          } else {

            this.intervCount += 1;

          }

        } else if ( this.intervCount == 7 ) {

          if ( this.svgTransform.opacity < 1 ) {

            this.svgTransform.opacity += 0.02;

          } else {

            this.intervCount += 1;

          }

        } else if ( this.intervCount == 8 ) {

          if ( this.svgTransform.textShadowSize < 200 || this.svgTransform.textShadowOpacity < 1 ||  this.svgTransform.opacity > 0 ){

            this.timerForthFunc();
            document.getElementById("topContCenter").innerHTML = "Bag : svg doesn't update style of text-shadow around the text for clip-path childrens elements";

          } else {

            this.intervCount += 1;
            document.getElementById("topContCenter").innerHTML = "";
            document.getElementById("backMap").style["clip-path"] = "";
            document.getElementById("splashCont").style["grid-row-gap"] = "0px";
            this.status = 2;
            this.statusSplash.emit(this.status);

          }
          
        } else if ( this.intervCount ==9 ) {

          ///////////////  BBBBAAAAGGGG   //////////////////
            
            if ( this.svgTransform.opacity < 1 || this.svgTransform.topBottomSize > 0 || this.svgTransform.centeSize < 640 ) {

              if ( this.svgTransform.opacity < 1 ) {

                this.svgTransform.opacity += 0.02;

              }

              if ( this.svgTransform.topBottomSize > 0 ) {

                this.svgTransform.topBottomSize -= 2;

              }

              if ( this.svgTransform.centeSize < 640 ) {

                this.svgTransform.centeSize += 4;

              }

              document.getElementById("splashCont").style["grid-auto-rows"] = this.svgTransform.topBottomSize + "px " + this.svgTransform.centeSize + "px " + this.svgTransform.topBottomSize + "px";
              document.getElementById("backMap").style.height = this.svgTransform.centeSize + "px";
              this.backMap.resize();
              this.backMap.getCanvas().style["margin-bottom"] = "0";
              this.backMap.getCanvas().style.height = "100vh !important";

              ///////////////  BBBBAAAAGGGG   /////////////

            } else {

              clearInterval(this.intervals);

            }

        }

      }, 50);

    });

  }
}
