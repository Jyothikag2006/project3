import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  product: any;
  id: any;

  constructor(private api:ApiServiceService,private cdr:ChangeDetectorRef,private ar:ActivatedRoute) {}

  ngOnInit(){
    this.id=this.ar.snapshot.params['id'];
    this.api.getSingleProducts(this.id).subscribe((res: any) => {
      this.product = res;
      this.cdr.detectChanges();
    })
  }
}
