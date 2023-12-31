import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  //Valide la existencia de un elemento <nav> en la plantilla html del elemento

  it('nav element', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('nav')!;
    expect(nav).toBeTruthy();
  });

  //Valide la NO existencia de un elemento <p> en la plantilla html del elemento

  it('No p element', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('p')!;
    expect(nav).toBeFalsy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
