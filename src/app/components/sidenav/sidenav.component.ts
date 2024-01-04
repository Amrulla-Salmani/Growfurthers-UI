import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  @Input() sideNavStatus: boolean = false;

  List = [
    {
      id: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      routename: '/Home'
    },
    {
      id: '2',
      name: 'Hotels',
      icon: 'fa-solid fa-hotel',
      routename: '/Hotels'
    },
    {
      id: '3',
      name: 'About Us',
      icon: 'fa-solid fa-circle-info',
      routename: '/AboutUs'
    },
    {
      id: '4',
      name: 'Contact Us',
      icon: 'fa-solid fa-phone',
      routename: '/ContactUs'
    },
    {
      id: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      routename: '/Settings'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
