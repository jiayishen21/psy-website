import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  sections: Section[];
  selectionCards: SelectionCard[];

  constructor() {
    this.sections = [
      new Section(
        'Business',
        'business-transition.png',
        'business',
        [
          //new OpportunityCard('Sales Associate, Home Depot', 'Mondays, 6:00pm to 8:00pm', 'Bayview Secondary School', 'https://www.youtube.com'),
        ]
      ),
      new Section(
        'S.T.E.M.',
        'stem-transition.png',
        'stem',
        [
        ]
      ),
      new Section(
        'Health',
        'medical-transition.png',
        'medical',
        [
        ]
      ),
      new Section(
        'Literature',
        'literature-transition.png',
        'literature',
        [
        ]
      ),
      new Section(
        'Art',
        'art-transition.png',
        'art',
        [
        ]
      ),
      new Section(
        'Music',
        'music-transition.png',
        'music',
        [
        ]
      )
    ];
    this.selectionCards = [
      new SelectionCard('Business', 'business.png', '/opportunities#business'),
      new SelectionCard('S.T.E.M.', 'stem.png', '/opportunities#stem'),
      new SelectionCard('Health', 'medical.png', '/opportunities#medical'),
      new SelectionCard('Literature', 'literature.png', '/opportunities#literature'),
      new SelectionCard('Art', 'art.png', '/opportunities#art'),
      new SelectionCard('Music', 'music.png', '/opportunities#music'),
    ];
  }

  displayEmpty(opportunities: OpportunityCard[]) {
    if(opportunities.length == 0) {
      return 'New opportunities coming soon';
    }
    return '';
  }

  ngOnInit(): void {
  }

}

class Section {
  private _name: String;
  private _imgName: String;
  private _id: String;
  private _opportunities: OpportunityCard[];

  constructor(name: String, imgName: String, id: String, opportunities: OpportunityCard[]) {
    this._name = name;
    this._imgName = imgName;
    this._id = id;
    this._opportunities = opportunities;
  }

  get name() {
    return this._name;
  }

  get imgName() {
    return this._imgName;
  }

  get id() {
    return this._id;
  }

  get opportunities() {
    return this._opportunities;
  }
}


class SelectionCard {
  private _text: String;
  private _imgName: String;
  private _href: String;

  constructor(text:String, imgName: String, href:String) {
    this._text = text;
    this._imgName = imgName;
    this._href = href;
  }

  get text() {
    return this._text;
  }

  get imgName() {
    return this._imgName;
  }

  get href() {
    return this._href;
  }
}

class OpportunityCard {
  private _name: String;
  private _time: String;
  private _location: String;
  private _href: String;

  constructor(name: String, time: String, location: String, href: String){
    this._name = name;
    this._time = time;
    this._location = location;
    this._href = href;
  }

  get name() {
    return this._name;
  }

  get time() {
    return this._time;
  }

  get location() {
    return this._location;
  }

  get href() {
    return this._href;
  }
}