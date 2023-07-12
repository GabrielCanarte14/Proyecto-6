import { Component } from '@angular/core';

//Importación de la interfaz
import { Population } from '../interfaces/population';

//Importación del servicio
import { dataPopulationService } from '../providers/data-population.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    //Atributo con el tipo de dato de la interfaz
    public data : Population[] = [];
  //Inyección de dependencia del servicio
  constructor(private dataProvider: dataPopulationService) { }

    //Ejecución de la petición y suscripción de la respuesta
    ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        this.data = (response as Population[]); 
      })
    }
}
