import { Component } from '@angular/core';

@Component({
  selector: 'Angel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


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
  ];

  
}
