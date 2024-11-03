import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FiltersListComponent } from './filters-list/filters-list.component';

@Component({
  selector: 'shop-root',
  standalone: true,
  imports: [
    FooterComponent,
    ProductsListComponent,
    FiltersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'shop';
}
