import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTimerComponent } from './page-timer.component';

describe('PageTimerComponent', () => {
  let component: PageTimerComponent;
  let fixture: ComponentFixture<PageTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
