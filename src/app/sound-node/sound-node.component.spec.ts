import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundNodeComponent } from './sound-node.component';

describe('SoundNodeComponent', () => {
  let component: SoundNodeComponent;
  let fixture: ComponentFixture<SoundNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
