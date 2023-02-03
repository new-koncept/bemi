import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = ['assets/productImages/horizontal/20220430_162810.jpg', 'assets/productImages/horizontal/20220510_101049.jpg', 'assets/productImages/horizontal/20220416_090334.jpg']
  
  constructor() {
  }


  ngOnInit(): void {

  }

}

