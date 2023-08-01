import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent {
  mobile: boolean = false;
  menuItems = [
    { icon: 'home', label: 'Home', routerLink: '' },
    { icon: 'assignment', label: 'Serviços', routerLink: '/servicos' },
    { icon: 'search', label: 'Pesquisa', routerLink: '/pesquisa' },
    { icon: 'phone', label: 'Contato', routerLink: '/contato' },
  ];

  botaoAtivo: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.mobile = result.matches;
        this.cdr.detectChanges();
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.botaoAtivo = event.urlAfterRedirects;
        this.setarPaginaPadrao();
      }
    });
  }

  botaoEmFoco(link: string): boolean {
    return this.botaoAtivo === link;
  }

  setarPaginaPadrao() {
    if (
      !this.menuItems.some(
        (menuItem) => this.botaoAtivo === menuItem.routerLink
      )
    ) {
      this.botaoAtivo = '';
    }
  }

  respostaClick() {}
}
