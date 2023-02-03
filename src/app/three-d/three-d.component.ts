import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {
  images: Image[] = []
  constructor() { }

  ngOnInit(): void {
    this.images = [{
      src: "assets/3d/2.jpg",
      description: "detail interiéru"
    },
    {
      src: "assets/3d/6.jpg",
      description: "moja nová kancelária"
    },
    {
      src: "assets/3d/12 (1).jpg",
      description: "osvetlenie"
    }
  ,{
    src: "assets/3d/kuchyňa OK.jpg",
    description: "kuchyne"
  }]
  }
}

export interface Image{
  src: string
  description: string
}
