import { Component } from '@angular/core';

@Component({
  selector: 'app-header-extra',
  templateUrl: './header-extra.component.html',
  styleUrls: ['./header-extra.component.css']
})
export class HeaderExtraComponent {

  headerExtraList = [
    {
      title: "Easy To Go",
      description: "This is an easy to go description",
      iconName: "desktop"
    },
    {
      title: "AWESOME DESIGN",
      description: "blalncndf cefvhfhv e",
      iconName: "trophy"
    },
    {
      title: "Profile",
      description: "",
      iconName: "user-circle"
    },
    {
      title: "EASY TO CUSTOMIZE",
      description: "",
      iconName: "magic"
    },
    {
      title: "MasterCard",
      description: "lkfeo vhefvohefv ehvoehvef oefhvfehvohef efohvoefhvohef ",
      iconName: "address-card-o"
    },
  ];

}
