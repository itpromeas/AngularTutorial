import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExtraComponent } from './header-extra.component';

describe('HeaderExtraComponent', () => {
  let component: HeaderExtraComponent;
  let fixture: ComponentFixture<HeaderExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
