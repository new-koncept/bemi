import { Component } from '@angular/core';
import SwiperCore, { EffectCube, Pagination } from "swiper";
SwiperCore.use([EffectCube, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bemi';
}
