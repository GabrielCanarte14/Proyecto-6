import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { dataPopulationService } from './data-population.service';

  //Importe la interfaz
  import { Population} from '../interfaces/population';

describe('dataPopulationService', () => {
  let service: dataPopulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
        //Registre el módulo de petición http
        imports: [ HttpClientModule ],

        //Registre el servicio como proveedor de datos
        providers: [ dataPopulationService ]
    });
    service = TestBed.inject(dataPopulationService);
  });
  // La función done se encarga de esperar por completar el requerimiento
  it(' ngOnInit should return value from observable', (done: DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {
      
      // Valide que la respuesta sea mayor que 0
      expect((data as Population[]).length).toBeGreaterThan(0)
      
      // Que espere hasta que llegue la respuesta 
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
