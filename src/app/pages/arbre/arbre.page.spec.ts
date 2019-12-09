import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbrePage } from './arbre.page';

describe('ArbrePage', () => {
  let component: ArbrePage;
  let fixture: ComponentFixture<ArbrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
