import { Component } from '@angular/core';

@Component({
  selector: 'app-color-shape',
  templateUrl: './color-shape.component.html',
  styleUrls: ['./color-shape.component.scss']
})
export class ColorShapeComponent {

  storageKey ='user-background';
  private defaultcolor:string | undefined;
  userbackground: string | undefined;

useBackgroundColor: any;

  private loadBackgroundPreferences(): void {
    this.defaultcolor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor()
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    const defaultcolor = this.defaultcolor || 'default-color';
    return localStorage.getItem(this.storageKey) || defaultcolor;
  }
  }


