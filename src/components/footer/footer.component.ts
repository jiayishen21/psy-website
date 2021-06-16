import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logos: Logo[];
  sections: Section[];

  constructor() {
    this.logos = [
      new Logo('twitter', 'assets/img/twitter-logo.png', 'https://twitter.com/pfyouth2021'),
      new Logo('instagram', 'assets/img/instagram-logo.png', 'https://www.instagram.com/passionfruityouth/'),
      new Logo('linkedin', 'assets/img/linkedin-logo.png', 'https://www.linkedin.com/company/passionfruit-youth'),
      new Logo('facebook', 'assets/img/facebook-logo.png', 'https://www.facebook.com/passionfruityouth')
    ];
    this.sections = [
      new Section('Home', '/'),
      new Section('Opportunities', '/opportunities'),
      new Section('Events', '/events'),
      new Section('Meet the Team', '/meet-the-team'),
      new Section('About', '/about')
    ];
  }

  ngOnInit(): void {
  }

}

class Logo {
  private _name: String;
  private _imgName: String;
  private _href: String;

  constructor(name: String, imgName: String, href: String) {
    this._name = name;
    this._imgName = imgName;
    this._href = href;
  }

  get name() {
    return this._name;
  }

  get imgName() {
    return this._imgName;
  }

  get href() {
    return this._href;
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
