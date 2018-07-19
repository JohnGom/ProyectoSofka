import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMembersComponent } from './show-all-members.component';

describe('ShowAllMembersComponent', () => {
  let component: ShowAllMembersComponent;
  let fixture: ComponentFixture<ShowAllMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
