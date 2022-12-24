import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEpisodeComponent } from './form-episode.component';

describe('FormEpisodeComponent', () => {
  let component: FormEpisodeComponent;
  let fixture: ComponentFixture<FormEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
