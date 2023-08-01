import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent {
  isHandset: boolean = false;
  menuItems = [
    { icon: 'home', label: 'Home', routerLink: '' },
    { icon: 'assignment', label: 'Serviços', routerLink: '/servicos' },
    { icon: 'search', label: 'Pesquisa', routerLink: '/pesquisa' },
    { icon: 'phone', label: 'Contato', routerLink: '/contato' },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset = result.matches;
        this.cdr.detectChanges();
      });
  }

  handleMenuItemClick() {}
}
