import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sound-node',
  templateUrl: './sound-node.component.html',
  styleUrls: ['./sound-node.component.css']
})
export class SoundNodeComponent implements OnInit {

  @Input() height : number;
  @Input() width : number;
  @Input() text : string;
  @Input() fontColor : string;
  @Input() baseColor : string;
  @Input() pressedColor : string;
  @Input() mp3Url : string;

  constructor() { }

  ngOnInit() {
  }

}
