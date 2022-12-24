import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEpisodeComponent } from './liste-episode.component';

describe('ListeEpisodeComponent', () => {
  let component: ListeEpisodeComponent;
  let fixture: ComponentFixture<ListeEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
