import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagerContainerComponent } from './product-manager-container.component';

describe('ProductManagerContainerComponent', () => {
  let component: ProductManagerContainerComponent;
  let fixture: ComponentFixture<ProductManagerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductManagerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
