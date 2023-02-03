import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CubeComponent implements OnInit {

  @Input() cubes: Cube[] = []

  constructor() { }

  ngOnInit(): void {
  }
}

export interface Cube {
  type: string;
  name: string
  image: string
}