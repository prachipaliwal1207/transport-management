import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    setTimeout(() => location.reload(), 100);
  }
}
