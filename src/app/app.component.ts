import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  hero1 = '傻Ⅹ95';

  hero: Hero = {
    id: 1,
    name: '傻Ⅹ95'
  };
}
export class Hero {
  id: number;
  name: string;
}
