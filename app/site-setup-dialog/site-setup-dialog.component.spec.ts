import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSetupDialogComponent } from './site-setup-dialog.component';

describe('SiteSetupDialogComponent', () => {
  let component: SiteSetupDialogComponent;
  let fixture: ComponentFixture<SiteSetupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSetupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSetupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
