/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KegTileComponent } from './keg-tile.component';

describe('KegTileComponent', () => {
  let component: KegTileComponent;
  let fixture: ComponentFixture<KegTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
