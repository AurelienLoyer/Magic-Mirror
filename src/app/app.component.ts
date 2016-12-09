import { Component, OnInit} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'app works!';
  conf : any;

  constructor(public configService : ConfigService){

  }

  ngOnInit(){
    this.configService.getConf()
      .subscribe(res => {
        console.log(res);
        if(res.reload){
          this.conf = res;
          this.refreshPage(res.reload*1000);
        }
      });
  }

  refreshPage(reload){
    setTimeout(() => {
      console.log(reload);
      console.log("on reload la page :)");
      window.location.reload();
    },reload);
  }

  getConfParameter(param){
    console.log(param);
    return this.configService.getConfParameter(param)
      .subscribe(res => {res;});
  }

}
