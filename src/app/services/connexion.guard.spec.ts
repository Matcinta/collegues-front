import { TestBed, async, inject } from '@angular/core/testing';

import { ConnexionGuard } from './connexion.guard';

describe('ConnexionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnexionGuard]
    });
  });

  it('should ...', inject([ConnexionGuard], (guard: ConnexionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
