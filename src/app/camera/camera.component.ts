import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CameraComponent implements OnInit {

  public cameraUrl:string = 'http://www1.ville.montreal.qc.ca/Circulation-Cameras/GEN131.jpeg'
  public counter:number = 0
  public fullCameraUrl:string = this.cameraUrl

  constructor() { 
    console.log('toto')
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.fullCameraUrl = `${this.cameraUrl}?${this.counter}`
    }, 30000)
  }

}
