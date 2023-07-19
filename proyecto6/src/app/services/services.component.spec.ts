import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services.component';
import { dataPopulationService } from '../providers/data-population.service';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [HttpClientModule],

      //Registre el servicio como proveedor de datos
      providers: [dataPopulationService],
      declarations: [ServicesComponent],
    });
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {
    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();

    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0);

      // Que espere hasta que llegue la respuesta
      done();

      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
  });
});
