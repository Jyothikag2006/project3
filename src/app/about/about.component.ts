import { Component } from '@angular/core';
import { AccrodianComponent } from "../accrodian/accrodian.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccrodianComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
