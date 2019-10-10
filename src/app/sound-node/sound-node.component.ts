import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-sound-node',
  templateUrl: './sound-node.component.html',
  styleUrls: ['./sound-node.component.css']
})
export class SoundNodeComponent implements OnInit, AfterViewInit {
  @Input() identifier : string;
  @Input() height : number;
  @Input() width : number;
  @Input() text : string;
  @Input() fontColor : string;
  @Input() baseColor : string;
  @Input() pressedColor : string;
  @Input() mp3Url : string;

  elem : Element;
  ad : HTMLAudioElement;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    console.log(this.identifier);
    this.elem = document.getElementById(this.identifier);

    this.ad = new Audio();
    this.ad.src = this.mp3Url;
    console.log('SRC, ', this.ad.src);
    this.ad.load();
    
    console.log(this.ad);

    this.elem.addEventListener('mousedown', (e) => {
      this.elem.setAttribute('background', `${this.pressedColor} !important;`);
      console.log('Pressed');
      this.ad.play();
    });

    this.elem.addEventListener('mouseup', (e) => {
      this.elem.setAttribute('background', this.baseColor);
      console.log('up!');
      console.log('DUR: ', this.ad.duration);
      console.log(this.ad.currentTime);
      this.ad.pause();
    })

    
  }
}
