import { TestBed } from '@angular/core/testing';

import { DataPopulationService } from './data-population.service';

describe('DataPopulationService', () => {
  let service: DataPopulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPopulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
