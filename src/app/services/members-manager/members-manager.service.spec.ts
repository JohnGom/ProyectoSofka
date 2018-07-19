import { TestBed, inject } from '@angular/core/testing';

import { MembersManagerService } from './members-manager.service';

describe('MembersManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersManagerService]
    });
  });

  it('should be created', inject([MembersManagerService], (service: MembersManagerService) => {
    expect(service).toBeTruthy();
  }));
});
