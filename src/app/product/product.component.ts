import { ChangeDetectorRef, Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 
   data: any[] = [];
   constructor(private api: ApiServiceService,private cdr:ChangeDetectorRef) {}

   ngOnInit(){
     this.api.getAllProducts().subscribe((res: any)=> {
       this.data = res;
       this.cdr.detectChanges();

     })
   }

 //  data: any[]=[
  //   {
  //     id: 1,
  //     title:"HP Probook ",
  //     description:"HP ProBook laptops are designed with a focus on durable design, long battery life, powerful performance, and security features. They are built to withstand everyday use, featuring durable materials that can handle bumps and scratches. The laptops are powered by the latest processors.",
  //     image:"https://tse3.mm.bing.net/th/id/OIP.H7myHaa1t_NFnephLbKdOQHaGS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  //   },
  //    {
  //     id: 2,
  //     title:"HP Omnibook",
  //     description:"The HP OmniBook series is designed for portability, performance, and adaptability, offering both traditional clamshell and convertible Flip designs. These laptops are built for modern mobility, supporting work, study, and creative tasks with features like all-day battery life, instant wake, and ",
  //     image:"https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/5/25c1_omnibook_x_flip_14_atmospheric_blue_t_ir_cam_nonsd_nonfpr_avicii_2h_copilot_taskbar_core_set_tent_whitebg_touchicon_3.png"
  //   },
  //    {
  //     id: 3,
  //     title:"Apple MacBook Pro",
  //     description:"MacBooks are powered by Apple’s M5, M5 Pro, and M5 Max chips, offering exceptional CPU and GPU performance for both single- and multi-threaded tasks. These chips include Neural Engines for accelerated AI tasks such as image generation, large language model processing, and on-device and training good enough appearence overall",
  //     image:"https://www.techadvisor.com/wp-content/uploads/2023/11/space-black-macbook-pro-back-angle-1.jpg?quality=50&strip=all"
  //   },
  //    {
  //     id: 4,
  //     title:"Dell Inspiron",
  //     description:"The Dell Inspiron series is a line of consumer-oriented laptops, desktops, and all-in-one computers that cater to a wide range of users. Launched in 1990, Inspiron laptops have evolved significantly over the years, adapting to technological advancements and user needs and good camera quality also.",
  //     image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372667_sd.jpg"
  //   },
  //  ]
}
