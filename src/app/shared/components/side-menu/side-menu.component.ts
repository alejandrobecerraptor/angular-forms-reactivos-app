import { Component } from '@angular/core';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  reactiveMenu: MenuItem[] = [
    {
      title: 'Formularios básicos',
      route: './reactive/basic'
    },
    {
      title: 'Formularios dinámicos',
      route: './reactive/dynamic'
    },
    {
      title: 'Switches',
      route: './reactive/switches'
    }
  ];

  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth'
    }
  ];

}
