import { TestBed } from '@angular/core/testing';

import { AgentDetailService } from './agent-detail.service';

describe('AgentDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentDetailService = TestBed.get(AgentDetailService);
    expect(service).toBeTruthy();
  });
});
