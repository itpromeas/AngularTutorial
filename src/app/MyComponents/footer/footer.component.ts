import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyR = {
    author: "Angel",
    subdesc: "Copyright",
    copyRSymbol: "&copy;",
    description: "2024 All rights reserved",
    authorLink: "https://mywebsite"
  };
  headerTitles = [
    {
      id: 1,
      name: "home",
      href: "#",
      active: true
    },
    {
      id: 2,
      name: "Services",
      href: "#servicediv",
      active: false
    },
    {
      id: 3,
      name: "Price",
      href: "#pricingdiv"
    },
    {
      id: 4,
      name: "About",
      href: "#newsletterdiv"
    },
    {
      id: 5,
      name: "Contact",
      href: "#contactdiv"
    },
    {
      id: 6,
      name: "Shops",
      href: "#shops"
    },
  ]
}
