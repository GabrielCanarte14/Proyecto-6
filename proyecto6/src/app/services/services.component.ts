import { Component } from '@angular/core';
import { dataPopulationService } from '../providers/data-population.service';
import { Population } from '../interfaces/population';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  public data : Population[] = [];

  constructor(private dataProvider: dataPopulationService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Population[]); 
    })
  }
}



