import { TestBed } from '@angular/core/testing';

import { NewMoviesService } from './new-movies.service';

describe('NewMoviesService', () => {
  let service: NewMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
