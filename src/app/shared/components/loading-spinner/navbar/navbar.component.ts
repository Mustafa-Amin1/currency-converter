import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewInit{

  navMenu:any;
  toggleMenu:any;
  closeMenu:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.navMenu=document.querySelector('#nav-menu');
      this.toggleMenu=document.querySelector('#toggle-menu');
      this.closeMenu=document.querySelector('#close-menu');
  }

  showMenu(){
    this.navMenu.classList.add('show');
  }
  closingMenu(){
    this.navMenu.classList.remove('show');
  }

}
