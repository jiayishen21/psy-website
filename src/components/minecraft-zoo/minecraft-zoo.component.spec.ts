import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftZooComponent } from './minecraft-zoo.component';

describe('MinecraftZooComponent', () => {
  let component: MinecraftZooComponent;
  let fixture: ComponentFixture<MinecraftZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinecraftZooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
