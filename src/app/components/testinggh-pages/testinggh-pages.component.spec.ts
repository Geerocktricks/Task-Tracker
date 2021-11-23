import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingghPagesComponent } from './testinggh-pages.component';

describe('TestingghPagesComponent', () => {
  let component: TestingghPagesComponent;
  let fixture: ComponentFixture<TestingghPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingghPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingghPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
