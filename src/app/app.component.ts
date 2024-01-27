import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome = 'This is an Ecommerce';

  categories = [
    {
      name: "Laptops"
    },
    {
      name: "Women"
    },
    {
      name: "Children"
    },
    {
      name: "Men"
    },
    {
      name: "Restaurant"
    }
  ];
}
