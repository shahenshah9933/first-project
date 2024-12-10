import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlaayerComponent } from './video-plaayer.component';

describe('VideoPlaayerComponent', () => {
  let component: VideoPlaayerComponent;
  let fixture: ComponentFixture<VideoPlaayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPlaayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlaayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
