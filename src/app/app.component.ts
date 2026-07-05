import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from './carousel/carousel.component';
import { AccrodianComponent } from "./accrodian/accrodian.component";
import { ProductComponent } from "./product/product.component";
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
