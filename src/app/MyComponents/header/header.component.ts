import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'Angel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerTitles!: any;

  /*headerTitles = [
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
  ];*/

  constructor(private goToBackEnd: HttpClient){

    goToBackEnd.post("http://localhost:8080/header-title/create", "").subscribe((response)=>{
      console.log(response);
      this.headerTitles = response
    });
  }

  
}
