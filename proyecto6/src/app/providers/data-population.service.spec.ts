import { TestBed } from '@angular/core/testing';

import { dataPopulationService } from './data-population.service';

describe('dataPopulationService', () => {
  let service: dataPopulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataPopulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
