import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesObrasComponent } from './detalhes-obras.component';

describe('DetalhesObrasComponent', () => {
  let component: DetalhesObrasComponent;
  let fixture: ComponentFixture<DetalhesObrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesObrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
