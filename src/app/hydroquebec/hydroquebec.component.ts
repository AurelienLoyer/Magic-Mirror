import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api/api.service';

@Component({
  selector: 'hydroquebec',
  templateUrl: './hydroquebec.component.html',
  styleUrls: ['./hydroquebec.component.scss']
})
export class HydroquebecComponent implements OnInit {

  // Move fetch >>>> service
  // 1 https://www.hydroquebec.com/portail/web/clientele/authentification
  // 2 https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=resourceObtenirDonneesPeriodesConsommation&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_count=1&_=1535945324844

  constructor(public apiService:ApiService) { }

  ngOnInit() {

    const hydroquebec = this.apiService.getKeys();

    fetch(
      `https://www.hydroquebec.com/portail/web/clientele/authentification?p_auth=EbW90P8A&p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&_58_struts_action=/login/login&_58_action=login&login=${hydroquebec.user}&_58_password=${hydroquebec.password}`,
    { 
      credentials: 'include',
      method: "POST",
      mode: 'no-cors',
    }).then(res => {
      this.getHydroData();
    })
  }

  getHydroData() {
    fetch('https://www.hydroquebec.com/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=resourceObtenirDonneesPeriodesConsommation&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_count=1&_=1535945324844')
      // .then(res => res.json())
      .then(console.log)
  }

}
