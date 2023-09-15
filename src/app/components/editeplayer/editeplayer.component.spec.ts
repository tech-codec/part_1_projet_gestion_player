import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeplayerComponent } from './editeplayer.component';

describe('EditeplayerComponent', () => {
  let component: EditeplayerComponent;
  let fixture: ComponentFixture<EditeplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeplayerComponent]
    });
    fixture = TestBed.createComponent(EditeplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
