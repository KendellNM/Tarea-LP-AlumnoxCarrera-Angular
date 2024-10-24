import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidenar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, RouterModule],
  templateUrl: './sidenar.component.html',
  styleUrl: './sidenar.component.css'
})
export class SidenarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false
}
