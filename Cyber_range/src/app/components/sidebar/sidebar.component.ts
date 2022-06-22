import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'HOME',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/icons',
    title: 'ATTACKS',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/tables',
    title: 'MACHINES',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-puzzle-10',
    class: ''
  },

  // {
  //   path: '/maps',
  //   title: 'LOCATION',
  //   rtlTitle: 'خرائط',
  //   icon: 'icon-pin',
  //   class: '' },
  // {
  //   { path: '/notifications',
  //   title: 'CHALLENGES',
  //   rtlTitle: 'إخطارات',
  //   icon: 'icon-bell-55',
  //   class: ''
  // },

  {
    path: '/user',
    title: 'User Profile',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  // {
  //   path: "/typography",
  //   title: "Completed Challenges",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
 /* {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
