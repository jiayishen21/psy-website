import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sections: Section[];

  constructor(private route: ActivatedRoute) { 
    this.sections = [
      new Section('Home', '/'),
      new Section('Opportunities', '/opportunities'),
      new Section('Events', '/events'),
      new Section('Meet the Team', '/meet-the-team'),
      new Section('About', '/about')
    ];
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
      });
  }

  changeNav() {
    var x = document.getElementById("navbar");
    if (x!.className === "navbar py-4") {
      x!.className += " responsive";
    } 
    else {
      x!.className = "navbar py-4";
    }
  }

}

class Section {
  private _name: String;
  private _href: String;

  constructor(name: String, href: String) {
    this._name = name;
    this._href = href;
  }

  get name() {
    return this._name;
  }

  get href() {
    return this._href;
  }
}
