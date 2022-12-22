import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEpisodeComponent } from './panel-episode.component';

describe('PanelEpisodeComponent', () => {
  let component: PanelEpisodeComponent;
  let fixture: ComponentFixture<PanelEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
