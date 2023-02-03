import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  references: Reference[]

  constructor() {
    this.references = [
      { author: 'Martina', reference: 'Precízna a krasna práca vôbec sa neponáhľali z prácou ako iné firmy buch buch a hotovo...' },
      { author: 'Janka', reference: 'Robota pekná čistá a čo sa mi páčilo tak si po sebe poumývali a nenechali žiadny neporiadok.' },
      { author: 'Peter', reference: 'Sedel dohodnutý termín aj cena. Práca nie rýchla ale zase kvalitná.' },
      { author: 'Michal', reference: 'Montáž v papučkách... super nie ako iný v pracovných topánkach.' },
      { author: 'Monika', reference: 'Dodržaný termín kvalitná robota a všade pod náradím mali ochranné kartóny aby nepoškodili dlažbu. Odporúčam...' },
      { author: 'Martin', reference: 'komunikácia na úrovni skvela práca chalani. Dakujem.' },
    ]
  }

}

interface Reference {
  author: string,
  reference: string
}