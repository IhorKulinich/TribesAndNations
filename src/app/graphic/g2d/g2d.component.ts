import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as L from 'mapbox.js';
import WatchJS from 'melanke-watchjs';

@Component({
  selector: 'g2d',
  templateUrl: './g2d.component.html',
  styleUrls: ['./g2d.component.css']
})
export class G2dComponent implements OnInit, OnChanges {
  
  setupMap:any;
  map: any;
  getCenterMap:any;
  getCoordsMap:any;
  coords:any;
  mapCanvas:any;
  layers:any;
  feature:any;

  initLayers:any;
  addRaster:any;
  addL:any;

  style = 'mapbox://styles/hort/ckobm583j18eo17ryx6zf0kzg';
  lat = 48;
  lng = 36;
  zoom = 3;
  Ulat=49.11111;
  Ulng=31;
  Uzoom=4.5;

  onLoadSetup:any;
  zoomMap:any;
  currentZoom!:any;
  zoomend!:any;
  zoomer!:any;
  flier!:any;
  bounds!:any;
  movezoom!:any;
  zoomingCenter!:any;

  watch!:any;
  unwatch!:any;
  callWatchers!:any;

  @ViewChild('featuresContainer') el:ElementRef;
  featuresMouseMove:any;
  futuresMouseMove:any;
  displayProperties:any;
  displayFeatures:any;

  featMouseClick:any;
  clickedbox:any;
  featuresMouseClick:any;
  filterFeaturesMouseClick:any;

  popupBoundingBox:any;
  canvasContainer:any;
  startBoundingBox:any;
  currentBoundingBox:any;
  BoundingBox:any;
  mouseDownBB:any;
  mousePosBB:any;
  onMouseMoveBB:any;
  onMouseUp:any;
  onKeyDown:any;
  onMouseMove:any;
  mousePos:any;
  BBminX:any;
  BBmaxX:any;
  BBminY:any;
  BBmaxY:any;
  BBpos:any;
  finish:any;
  featuresBoundingBox:any;
  filterBoundingBox:any;


  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  changeValueHere( value ): void {

    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {

    this.setupMap = () => {

      	Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA');

        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat], 
            minZoom: 3,
            maxZoom: 13, 
            interactive: true
        });
        this.map.scrollZoom.setWheelZoomRate(1/500);
        this.map.scrollZoom.setZoomRate(1/500);
        this.map.getCanvas().style.cursor = 'crosshair';
        this.mapCanvas = this.map.getCanvas();
        this.map.boxZoom.disable();

        this.watch = WatchJS.watch;
        this.unwatch = WatchJS.unwatch;
        this.callWatchers = WatchJS.callWatchers;

    }

    this.setupMap();

    this.zoomMap = () => {

        this.getCoordsMap = new L.Map('getCoordsMap', {

            center: [this.lng+12, this.lat-12],
            zoom: 4,
            cursor: true //,
            // layers: [
            //     new L.TileLayer('https://api.mapbox.com/styles/v1/hort/ckodxxm143hvn17nof879jq2e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA', {
            //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            //     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            //     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            //     minZoom:3, 
            //     maxZoom:13
            // })
            // ]
        });

        this.currentZoom = 3;
        this.zoomend = true;
        this.movezoom = 3;

        this.bounds = this.getCoordsMap.getBounds();
        this.coords = [[this.map.getCenter().lng-this.bounds["_northEast"].lng,
                        this.map.getCenter().lng,
                        this.bounds["_southWest"].lng-this.map.getCenter().lng],
                       [this.map.getCenter().lat-this.bounds["_northEast"].lat,
                        this.map.getCenter().lat,
                        this.bounds["_southWest"].lat-this.map.getCenter().lat]];

        this.map.once("zoomstart", () => {

            if ( this.currentZoom < this.map.getZoom() ) {

                //this.movezoom=this.currentZoom+1;
                this.movezoom = Math.floor( this.map.getZoom() ) + 1;

            } else if ( this.currentZoom > this.map.getZoom() ) {

                //this.movezoom=this.currentZoom-1;
                this.movezoom = Math.floor( this.map.getZoom() );

            }

            if ( this.currentZoom == 3 ) {
                //enables subcont
                //enables seabathborders
                //enables multiculture
                //enables religion
                //enables idiology
                //disable all other
            }

            if ( this.currentZoom == 4 ) {
                //enables armies
                //enables regions
                //enables majorborders
                //enables megapolices
                //enables majorcapital
                //disable all other
            }

            if ( this.currentZoom == 5 ) {
                //enables armies
                //enables regions
                //enables majorborders
                //enables megapolices
                //enables majorcapital
                //enables divisions/corpuses = from tacticsgroup
                //enables cultures
                //enables bigcity
                //disable all other
                //console.log(this.map.queryRenderedFeatures({layer.paint.line-opacity:0.74}));
                //this.map.setLayoutProperty(this.map.queryRenderedFeatures({}), 'visibility', '0.5');
            }

            if ( this.currentZoom == 6 ) {
                //enables armies
                //enables regions?
                //enables tacticsgroup smallpoint
                //enables cities smallpoint
                //enables states
                //enables allborders
                //enables allcities
                //enables bigvillages
                //enables subculture
                //enables etno
                //colors half ?no mapbox-satellite
                //disable all other
            }

            if ( this.currentZoom == 7 ) {
                //enables tacticsgroup = from opergroup
                //enables allvillages and allcities
                //enables states?
                //enables allborders
                //color 0
                //disable all other
            }

            if ( this.currentZoom == 8 ) {
                //enables norm not details allcities allvillages
                //enables opergroup from opergroup
                //enables tacticsgroup
                //enables bigcamp
                //enables allborders
                //disable all other
            }

            if ( this.currentZoom == 9 ) {
                //enables opergroup small point
                //enables half details allcities allvillages
                //enables allcamp and suburb
                //enables allborders
                //enables tacticsgroup
                //disable all other
            }

            if ( this.currentZoom == 10 ) {
                //enables details allcities allvillages allcamp and suburb
                //enables details opergroup
                //enables allborders
                //disable all other
            }

            if ( this.currentZoom == 13 ) {
                //enables very detail allcities allvillages allcamp and suburb
                //enables cvartals
                //enables roads
                //enables buildings
                //disable all other
            }

        });

        this.map.on('moveend', (e) => {

            if ( this.movezoom > this.currentZoom ) {

                if ( this.currentZoom < 10 ) {

                    this.zoomer( this.currentZoom + 1 );

                } else {
                    
                    this.zoomer(13);

                }

            } else if ( this.map.getZoom() < this.currentZoom ) {

                if ( this.currentZoom <= 10 ) {

                    this.zoomer( this.currentZoom - 1 );

                } else {

                    this.zoomer(10);
                
                }
            
            }
        
        });

        this.flier = ( map, zoom ) => {

            map.flyTo(L.latLng(this.zoomingCenter[1],this.zoomingCenter[0]), zoom, {duration: 2});
            console.log("flier: "+map.getZoom());

        }

        this.zoomer = ( zoom ) => {

            this.map.flyTo({
                        center: [this.zoomingCenter[0], this.zoomingCenter[1]], 
                        zoom: zoom,
                        speed: 0.2, 
            });
            console.log("zoomer: "+this.map.getZoom());
        
        }
       
        this.map.on("zoom", (e:any) => {

          if ( this.zoomend ) {

            this.zoomend = false;

            this.bounds = this.getCoordsMap.getBounds();
            this.coords = [[this.map.getCenter().lng-this.bounds["_northEast"].lng,
                        this.map.getCenter().lng,
                        this.bounds["_southWest"].lng-this.map.getCenter().lng],
                       [this.map.getCenter().lat-this.bounds["_northEast"].lat,
                        this.map.getCenter().lat,
                        this.bounds["_southWest"].lat-this.map.getCenter().lat]];
            
            if ( e.originalEvent != undefined ) {

                this.zoomingCenter = [
                    this.bounds["_southWest"].lng+(this.bounds["_northEast"].lng-this.bounds["_southWest"].lng)*e.originalEvent.x/window.innerWidth,
                    this.bounds["_northEast"].lat+(this.bounds["_southWest"].lat-this.bounds["_northEast"].lat)*e.originalEvent.y/window.innerHeight
                ];

            } else {

                this.zoomingCenter = [
                    this.bounds["_southWest"].lng+(this.bounds["_northEast"].lng-this.bounds["_southWest"].lng)*e.target.scrollZoom["_aroundPoint"].x/window.innerWidth,
                    this.bounds["_northEast"].lat+(this.bounds["_southWest"].lat-this.bounds["_northEast"].lat)*e.target.scrollZoom["_aroundPoint"].y/window.innerHeight
                ];

            }

            if ( this.movezoom > this.currentZoom ) {

                if ( this.currentZoom < 10 ) {

                    this.flier( this.getCoordsMap , 2 + this.currentZoom );

                } else  if ( this.movezoom < this.currentZoom ) {

                    this.flier(this.getCoordsMap, 14);

                }

            } else if ( this.map.getZoom() < this.currentZoom ) {

                if ( this.currentZoom <= 10 ) {

                    this.flier(this.getCoordsMap, this.currentZoom);

                } else {

                    this.flier(this.getCoordsMap, 10);
                
                }
            
            }
          
          }
        
        });

        this.map.on("zoomend", () => { 

            this.currentZoom=Math.round(this.map.getZoom());

            if ( this.movezoom == this.currentZoom ) {

               this.map.once("zoomstart", () => {

                    if ( this.currentZoom < this.map.getZoom() ) {

                        this.movezoom = Math.floor( this.map.getZoom() ) + 1;

                    } else if ( this.currentZoom > this.map.getZoom() ) {

                        this.movezoom = Math.floor( this.map.getZoom() );

                    }

                });

                this.zoomend=true;
            }

        });

    }

    this.zoomMap();

    this.futuresMouseMove = (all, property) => {

        this.map.on('mousemove', (e) => {

            this.featuresMouseMove = this.map.queryRenderedFeatures(e.point);

            if ( all ) {

                this.displayProperties = ['type',
                    'properties',
                    'id',
                    'layer',
                    'source',
                    'sourceLayer',
                    'state'
                ];

                this.displayFeatures = this.featuresMouseMove.map((feat) => {

                    var displayFeat = {};
                    this.displayProperties.forEach((prop) => {

                        displayFeat[prop] = feat[prop];

                    });
                    return displayFeat;

                });

            } else {
                
                this.displayProperties = property;
                this.displayFeatures = this.featuresMouseMove.map((feat) => {

                    var displayFeat = {};
                    displayFeat[property] = feat[property];
                    return displayFeat;

                });

            }

            console.dir(this.displayFeatures);
            this.el.nativeElement.innerHTML = JSON.stringify(this.displayFeatures, null, 2);
        
        });
    
    }
    //this.futuresMouseMove(true, 'layer');


    this.featMouseClick = ( radius, layers, filter ) => {

        this.map.on("click", (e) => {

            this.clickedbox = [
                [e.point.x - radius, e.point.y - radius],
                [e.point.x + radius, e.point.y + radius]
            ];
            this.featuresMouseClick = this.map.queryRenderedFeatures(this.clickedbox, {
                layers: layers
            });
            this.filterFeaturesMouseClick = this.featuresMouseClick.reduce(
                (memo, feature) => {

                    memo.push(feature.properties.FIPS);
                    return memo;
                
                },
                ['in', 'FIPS']
            );
            this.map.setFilter(filter, this.filterFeaturesMouseClick);
        });
    }
    //this.featMouseClick(5, ['counties'], 'counties-highlighted');

    this.popupBoundingBox = new mapboxgl.Popup({
        closeButton: false
    });

    this.map.on('load', () => {

        this.onLoadSetup = () => {

            this.layers = [];
            this.feature = this.map.queryRenderedFeatures({});

            for (var i=0; i<this.feature.length; i++){
                this.layers.push(this.feature[i].layer.id);
            }
        }

        this.onLoadSetup();

        this.initLayers = () => {

            //   3/35
            //this.map.addSource();
            // this.map.addLayer({
            //         id: "raster-satellite-streets",
            //        source: {
            //             "type": "raster",                
            //             "tiles": ["https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA"],
            //             "tileSize": 256
            //         },
            //         type: "raster",
            //         layout: {"visibility": "visible"}
            //     });
            this.addRaster = ( sourceId, url, tileSize=256, layerId, source, brightnessMax, brightnessMin, contrast, fadeDuration=300, hueRotate=0, opacity=1, resampling='linear', saturation, visibility='visible',minZoom, maxZoom) => {
                
                if ( this.map.getSource(sourceId) ) {

                } else {

                    if ( url != "mapbox://styles/mapbox/satellite-v9" ){

                        this.map.addSource(sourceId,{
                            'type':'raster',
                            'url': url.toString(),
                           'tileSize': tileSize
                        });

                    } else {

                        this.map.addSource(sourceId,{
                            'type':'raster',
                            //'url': url.toString(),
                            "tiles": ["https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA"],
                            'tileSize': tileSize
                        });

                    }

                    
                }

                this.map.addLayer({
                    id: layerId,//
                    source: source,//
                    type: 'raster',
                    'source-layer': 'raster-tiles',
                    //layout: {
                    paint: {
                    'raster-brightness-max': brightnessMax,//
                    'raster-brightness-min': brightnessMin,//
                    'raster-contrast': contrast,//
                    'raster-fade-duration': fadeDuration,
                    'raster-hue-rotate': hueRotate,
                    'raster-opacity': opacity,//
                    'raster-resampling': resampling.toString(),
                    'raster-saturation': saturation//
                    },
                    layout: {
                    'visibility': visibility
                    }
                //}
                });

                this.map.setLayerZoomRange(layerId, minZoom, maxZoom);
                console.log(this.map.getLayer(layerId));
            }

            this.addL = () => {}

            this.addRaster('satelite','mapbox://styles/mapbox/satellite-v9',256,'satelite_0_7',
                'satelite',1,0.17,-0.4,300,0,0.75,'linear',0.71,'visible',0,22);
            this.addRaster('satelite','mapbox://styles/mapbox/satellite-v9',256,'satelite_7_13_color',
                'satelite',1,0.17,-0.4,300,0,0,'linear',0.71,'visible',0,22);
            this.addRaster('satelite','mapbox://styles/mapbox/satellite-v9',256,'satelite_7_13',
                'satelite',1,0.17,-1,300,0,0,'linear',0.71,'visible',0,22);
      
        }

        this.initLayers();
        
        this.canvasContainer = this.map.getCanvasContainer();

        this.map.addSource('counties', {
            'type': 'vector',
            'url': 'mapbox://mapbox.82pkq93d'
        });
        // this.map.addSource('settlement', {
        //     'type': 'vector',
        //     'url': 'mapbox://mapbox.82pkq93d'
        // });

        // this.map.addLayer(
        // {
        //     'id': 'settlement-label',
        //     'type': 'fill',
        //     'source': 'settlement',
        //     'source-layer': 'original',
        //     'paint': {
        //         'fill-outline-color': 'rgba(0,0,0,0.1)',
        //         'fill-color': 'rgba(0,0,0,0.1)'
        //     }
        // });

        this.map.addLayer({
            'id': 'counties',
            'type': 'fill',
            'source': 'counties',
            'source-layer': 'original',
            'paint': {
                'fill-outline-color': 'rgba(0,0,0,0.1)',
                'fill-color': 'rgba(0,0,0,0.1)'
            }
        }//,
        //'settlement-label'
        ); // Place polygon under these labels.
         
        this.map.addLayer({
            'id': 'counties-highlighted',
            'type': 'fill',
            'source': 'counties',
            'source-layer': 'original',
            'paint': {
                'fill-outline-color': '#484896',
                'fill-color': '#6e599f',
                'fill-opacity': 0.75
            },
            'filter': ['in', 'FIPS', '']
            }//,
            //'settlement-label'
        ); // Place polygon under these labels.
         
        // Set `true` to dispatch the event before other functions
        // call it. This is necessary for disabling the default map
        // dragging behaviour.
        this.canvasContainer.addEventListener('mousedown', this.mouseDownBB, true);
         
        // Return the xy coordinates of the mouse position
        this.mousePosBB = (e) => {

            var rect = this.canvasContainer.getBoundingClientRect();
            return new mapboxgl.Point(
                e.clientX - rect.left - this.canvasContainer.clientLeft,
                e.clientY - rect.top - this.canvasContainer.clientTop
            );
        
        }
         
        this.mouseDownBB = (e) => {

        // Continue the rest of the function if the shiftkey is pressed.
            if (!(e.shiftKey && e.button === 0)) return;
             
            // Disable default drag zooming when the shift key is held down.
            this.map.dragPan.disable();
             
            // Call functions for the following events
            document.addEventListener('mousemove', this.onMouseMoveBB);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('keydown', this.onKeyDown);
             
            // Capture the first xy coordinates
            this.startBoundingBox = this.mousePosBB(e);
        
        }
         
        this.onMouseMove = (e) => {

            // Capture the ongoing xy coordinates
            this.currentBoundingBox = this.mousePos(e);
             
            // Append the box element if it doesnt exist
            if (!this.BoundingBox) {
                this.BoundingBox = document.createElement('div');
                this.BoundingBox.classList.add('boxdraw');
                this.canvasContainer.appendChild(this.BoundingBox);
            }
             
            this.BBminX = Math.min(this.startBoundingBox.x, this.currentBoundingBox.x);
            this.BBmaxX = Math.max(this.startBoundingBox.x, this.currentBoundingBox.x);
            this.BBminY = Math.min(this.startBoundingBox.y, this.currentBoundingBox.y);
            this.BBmaxY = Math.max(this.startBoundingBox.y, this.currentBoundingBox.y);
             
            // Adjust width and xy position of the box element ongoing
            this.BBpos = 'translate(' + this.BBminX + 'px,' + this.BBminY + 'px)';
            this.BoundingBox.style.transform = this.BBpos;
            this.BoundingBox.style.WebkitTransform = this.BBpos;
            this.BoundingBox.style.width = this.BBmaxX - this.BBminX + 'px';
            this.BoundingBox.style.height = this.BBmaxY - this.BBminY + 'px';
        
        }
             
        this.onMouseUp = (e) => {
            // Capture xy coordinates
            this.finish([this.startBoundingBox, this.mousePos(e)]);
        }
         
        this.onKeyDown = (e) => {
            // If the ESC key is pressed
            if (e.keyCode === 27) this.finish();
        }
         
        this.finish = (BBox) => {
            // Remove these events now that finish has been called.
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('keydown', this.onKeyDown);
            document.removeEventListener('mouseup', this.onMouseUp);
             
            if (this.BoundingBox) {
                this.BoundingBox.parentNode.removeChild(this.BoundingBox);
                this.BoundingBox = null;
            }
             
            // If bbox exists. use this value as the argument for `queryRenderedFeatures`
            if (BBox) {
                this.featuresBoundingBox = this.map.queryRenderedFeatures(BBox, {
                    layers: ['counties']
                });
                 
                if (this.featuresBoundingBox.length >= 1000) {
                    return window.alert('Select a smaller number of features');
                }
                this.filterBoundingBox = this.featuresBoundingBox.reduce(
                    (memo, feature) => {
                            memo.push(this.featuresBoundingBox.properties.FIPS);
                            return memo;
                        },
                        ['in', 'FIPS']
                    );
                this.map.setFilter('counties-highlighted', this.filterBoundingBox);
            }
         
        this.map.dragPan.enable();
        }
         
        this.map.on('mousemove', (e) => {
            var features = this.map.queryRenderedFeatures(e.point, {
                layers: ['counties-highlighted']
            });
            this.map.getCanvas().style.cursor = "crosshair";
            if (!features.length) {
                this.popupBoundingBox.remove();
                return;
            }
            var feature = features[0];
            this.popupBoundingBox.setLngLat(e.lngLat).setText(feature.properties.COUNTY).addTo(this.map);
        });
    });
}
    
  


  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
    }
  

}}





                                   // console.log(this.zoomingCenter[0], this.zoomingCenter[1]);
                    // this.getCenterMap.flyTo([this.zoomingCenter[0]+9.1, this.zoomingCenter[1]-9.1], this.currentZoom+2);
                    // this.getCoordsMap.flyTo([this.zoomingCenter[0]+9.1, this.zoomingCenter[1]-9.1], this.currentZoom+2);
 
 //     console.log("say something, motherfucker");
     // if (this.map){
     //     if (this.map.isMoving()==true){
     //         console.log("constructor");
     //     }
     // }

    // this.map.on("load", () => {
    //     this.map.fitScreenCoordinates([1,1],[5,5], this.map.getBearing());
    // });
    

    // this.map.flyTo({
    //                 center: [this.Ulng, this.Ulat], 
    //                 zoom: this.Uzoom,
    //                 speed: 2
    //             });

    // const graticule = {
    //     type: 'FeatureCollection',
    //     features: []
    // };
    // for (let lng = -170; lng <= 180; lng += 1) {
    //     graticule.features.push({
    //         type: 'Feature',
    //         geometry: {type: 'LineString', coordinates: [[lng, -90], [lng, 90]]},
    //         properties: {value: lng}
    //     });
    // }
    // for (let lat = -80; lat <= 80; lat += 1) {
    //     graticule.features.push({
    //         type: 'Feature',
    //         geometry: {type: 'LineString', coordinates: [[-180, lat], [180, lat]]},
    //         properties: {value: lat}
    //     });
    // }

    // this.map.on('load', () => {
    //     this.map.addSource('graticule', {
    //         type: 'geojson',
    //         data: graticule
    //     });
    //     this.map.addLayer({
    //         id: 'graticule',
    //         type: 'line',
    //         source: 'graticule'
    //     });
    // });


   // L.tileLayer('https://api.mapbox.com/styles/v1/hort/ckodxxm143hvn17nof879jq2e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA', {
   //      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
   //      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
   //      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
   //      minZoom:3, 
   //      maxZoom:13
   //  }).addTo(this.getCoordsMap);

    //console.log("say something, motherfucker");
    // console.log("start bounds");
    // console.log(this.lmap.getCenter().lng-this.bounds["_northEast"].lng);
    // console.log(this.lmap.getCenter().lng);
    // console.log(this.bounds["_southWest"].lng-this.lmap.getCenter().lng);
    // console.log("======================");
    // console.log(this.lmap.getCenter().lat-this.bounds["_northEast"].lat);
    // console.log(this.lmap.getCenter().lat);
    // console.log(this.bounds["_southWest"].lat-this.lmap.getCenter().lat);
    // console.log("======================");    
    // console.log("==========================================");
    // console.log(this.lmap, this.lmap.getCenter().lng, this.lmap.getCenter().lat+"\n lnglat:"+this.lng, this.lat+"\n zoom: "+this.lmap.getZoom());

    //console.log("say something, motherfucker");


        //this.map.scrollZoom.setWheelZoomRate(1/500);
    //this.map.scrollZoom.setZoomRate(1/500);

    // this.map.on("touchmove", () => {
    //     console.log("step 1");
    //     this.map.fire("zoomstart", {});
    // });

    // this.map.on("wheel", () => {
    //     console.log("step 1");
    //     this.map.fire("zoomstart", {});
    // });

    //console.log("say something, motherfucker");

    // this.map.on("zoom", (e) => {
    //     console.log("start zoom");

    //     console.log(e);
    //     //this.map.unproject();
    // });

// this.map.on('flystart', function(){
    //     this.flyend = false;
    //     console.log("flystart");
    // });
    // this.map.on('flyend', function(){
    //     this.flyend = true;
    //     console.log("flyend");
    // });

// if(!this.flyend){
          // tooltip or overlay here
          //console.log(this.map.fire('flyend'));
       //    this.map.fire('flyend'); 
       // }
        //this.map.fire('flystart');
        // this.map.easeTo({
        //     center: [this.getCenterMap.getCenter().lng+12, this.getCenterMap.getCenter().lat-12],
        //     zoom: zoom
        // });
        // this.map.boxZoom({
        //     center: [this.getCenterMap.getCenter().lng+12, this.getCenterMap.getCenter().lat-12],
        //     zoom: zoom
        // });
        //this.map.boxZoom();
        // console.log(
        //     [
        //         this.map.project(
        //             [bounds["_northEast"].lng, bounds["_northEast"].lat
        //             ]
        //         ).x,
        //         this.map.project(
        //             [bounds["_northEast"].lng, bounds["_northEast"].lat
        //             ]
        //         ).y
        //     ], 
        //     [
        //         this.map.project(
        //             [bounds["_southWest"].lng, bounds["_southWest"].lat]
        //         ).x,
        //         this.map.project(
        //             [bounds["_southWest"].lng, bounds["_southWest"].lat]
        //         ).y
        //      ]
        //     );
        //console.log(typeof(bounds["_northEast"].lng));
        //console.log([bounds["_northEast"].lng, bounds["_northEast"].lat],[bounds["_southWest"].lng, bounds["_southWest"].lat]);
//        this.map.fitScreenCoordinates([1,1],[5,5], this.map.getBearing());
        


        //this.map.fitScreenCoordinates([bounds["_northEast"].lng, bounds["_northEast"].lat],[bounds["_southWest"].lng, bounds["_southWest"].lat], this.map.getBearing());
        //this.map.fitScreenCoordinates([this.map.project([bounds["_northEast"].lng, bounds["_northEast"].lat]).x,this.map.project([bounds["_northEast"].lng, bounds["_northEast"].lat]).y], [this.map.project([bounds["_southWest"].lng, bounds["_southWest"].lat]).x,this.map.project([bounds["_southWest"].lng, bounds["_southWest"].lat]).y]);


        

        // const graticule = {
    //     type: 'FeatureCollection',
    //     features: []
    // };
    
    //     this.map.addSource('graticule', {
    //         type: 'geojson',
    //         data: graticule
    //     });
            // this.map.removeLayer('graticule');
       

            // //graticule.features = [];

            // graticule.features.push({
            //     type: 'Feature',
            //     geometry: {type: 'LineString', coordinates: [[this.bounds["_northEast"].lng, -90], [this.bounds["_northEast"].lng, 90]]},
            //     properties: {value: this.bounds["_northEast"].lng,}
            // });
            // graticule.features.push({
            //     type: 'Feature',
            //     geometry: {type: 'LineString', coordinates: [[this.bounds["_southWest"].lng, -90], [this.bounds["_southWest"].lng, 90]]},
            //     properties: {value: this.bounds["_southWest"].lng}
            // });


            // graticule.features.push({
            //     type: 'Feature',
            //     geometry: {type: 'LineString', coordinates: [[-180, this.bounds["_northEast"].lat], [180, this.bounds["_northEast"].lat]]},
            //     properties: {value: this.bounds["_northEast"].lat}
            // });

            // graticule.features.push({
            //     type: 'Feature',
            //     geometry: {type: 'LineString', coordinates: [[-180, this.bounds["_southWest"].lat], [180, this.bounds["_southWest"].lat]]},
            //     properties: {value: this.bounds["_southWest"].lat}
            // });


        
            // this.map.addLayer({
            //     id: 'graticule',
            //     type: 'line',
            //     source: 'graticule'
            // });
       

// const graticule = {
    //     type: 'FeatureCollection',
    //     features: []
    // };
    // for (let lng = -170; lng <= 180; lng += 1) {
    //     graticule.features.push({
    //         type: 'Feature',
    //         geometry: {type: 'LineString', coordinates: [[lng, -90], [lng, 90]]},
    //         properties: {value: lng}
    //     });
    // }
    // for (let lat = -80; lat <= 80; lat += 1) {
    //     graticule.features.push({
    //         type: 'Feature',
    //         geometry: {type: 'LineString', coordinates: [[-180, lat], [180, lat]]},
    //         properties: {value: lat}
    //     });
    // }

    // this.map.on('load', () => {
    //     this.map.addSource('graticule', {
    //         type: 'geojson',
    //         data: graticule
    //     });
    //     this.map.addLayer({
    //         id: 'graticule',
    //         type: 'line',
    //         source: 'graticule'
    //     });
    // });
//     L.CursorHandler = L.Handler.extend({

//     addHooks: function () {
//         this._popup = new L.Popup();
//         this._map.on('mouseover', this._open, this);
//         this._map.on('mousemove', this._update, this);
//         this._map.on('mouseout', this._close, this);
//     },

//     removeHooks: function () {
//         this._map.off('mouseover', this._open, this);
//         this._map.off('mousemove', this._update, this);
//         this._map.off('mouseout', this._close, this);
//     },
    
//     _open: function (e) {
//         this._update(e);
//         this._popup.openOn(this._map);
//     },

//     _close: function () {
//         this._map.closePopup(this._popup);
//     },

//     _update: function (e) {
//         this._popup.setLatLng(e.latlng)
//             .setContent(e.latlng.toString());
//     }

    
// });

// L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);



        // this.getCoordsMap=L.map("getCoordsMap").setView([this.lng+12, this.lat-12], 4);


    // L.tileLayer('https://api.mapbox.com/styles/v1/hort/ckodxxm143hvn17nof879jq2e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG9ydCIsImEiOiJja2xkanZ0dWswNWF0Mm5wcm5qYmx4ZXFmIn0.rUHYpYzjr15YWP0jh5SXKA', {
    //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    //     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     minZoom:3, 
    //     maxZoom:13
    // }).addTo(this.getCoordsMap);

    // console.log("getCenter");
    // console.dir(this.getCoordsMap.getCenter());
    // console.log("project");
    // console.dir(this.getCoordsMap.project(L.latLng(this.getCoordsMap.getCenter().lat, this.getCoordsMap.getCenter().lng),this.getCoordsMap.getZoom()));
    // console.log("getSize");
    // console.dir(this.getCoordsMap.getSize());
    // console.log("getPixelBounds");
    // console.dir(this.getCoordsMap.getPixelBounds());
    // console.log("getPixelOrigin");
    // console.dir(this.getCoordsMap.getPixelOrigin());

    // console.log(this.bounds["_northEast"]+"\n"+this.bounds["_southWest"]);
    // this.map.on("touchstart", () => {
    //     console.log("touchstart");
    // });
    // this.map.on("touchmove", () => {
    //     console.log("touchmove");
    // });
    // this.map.on("touchend", () => {
    //     console.log("touchend");
    // });
    // this.map.on("wheel", () => {
    //     console.log("wheel");
    // });
    // this.map.on("move", (e) => {
    //     // this.getCenterMap.flyTo([(12+this.map.getCenter().lng),(this.map.getCenter().lat-12)], (1+this.map.getZoom()));
    //     // this.getCoordsMap.flyTo([this.getCenterMap.getCenter().lng+12, this.getCenterMap.getCenter().lat-12], (1+this.map.getZoom()));

    // });
       // console.log(e.target);
       // console.log(e.target["_easeOptions"].center[0], e.target["_easeOptions"].center[1]);
       // console.log(e.target.transform["_center"].lng, e.target.transform["_center"].lat);
       //this.flyend = false;
       // console.log("moveend"+!this.flyend);
       // console.log(this.end);
       //this.end.flyend = false;
