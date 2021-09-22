import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrajectoryService } from './trajectory.service';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss']
})
export class TrajectoryComponent implements OnInit {

  constructor(private service: TrajectoryService) {

   }

  ngOnInit(): void {
    
  }

  showContent(): {
    this.service.openText()
  }

}
