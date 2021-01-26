import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPokemonComponent } from './tarjetas-pokemon.component';

describe('TarjetasPokemonComponent', () => {
  let component: TarjetasPokemonComponent;
  let fixture: ComponentFixture<TarjetasPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
