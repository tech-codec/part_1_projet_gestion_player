import { Component } from '@angular/core';
import { Country } from 'src/app/model/country';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.css']
})
export class NewplayerComponent {

  constructor(private playerService:PlayerService){}

  countryList:Country[] = [
    {id:1, countryName:"cameroun"},
    {id:2, countryName: "France"},
    {id:3, countryName:"Brésil"},
    {id:4, countryName:"Argentine"}
  ]

  createSuccess!:boolean


  onCreatePlayer(formsControler:any){
    if(!formsControler.valid)
      this.createSuccess = false
    if(formsControler.valid){
      this.countryList.forEach(c=>{
        if(c.id == formsControler.value.countryId)
          formsControler.value.countryName = c.countryName
      })

      this.playerService.createPlayer(formsControler.value).subscribe(
        data=>{
          this.createSuccess = true
        },
        error=>{
          console.log(error)
        }
      )
    }
  }

}
