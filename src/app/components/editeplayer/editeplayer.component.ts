import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/country';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-editeplayer',
  templateUrl: './editeplayer.component.html',
  styleUrls: ['./editeplayer.component.css']
})
export class EditeplayerComponent implements OnInit {

  constructor(private route:ActivatedRoute, private playerService:PlayerService){}

  id!:number
  player!:Player

  countryList:Country[] = [
    {id:1, countryName:"cameroun"},
    {id:2, countryName: "France"},
    {id:3, countryName:"Brésil"},
    {id:4, countryName:"Argentine"}
  ]

  updateSuccess!:boolean



  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getPlayer()
  }


  getPlayer(){
    this.playerService.getPlayer(this.id).subscribe(
      (data:Player)=>{
        this.player = data
      }
    )
  }

  onUpdatePlayer(player:any){
    if(!player.valid)
      this.updateSuccess = false
    if (player.valid){
      this.countryList.forEach(c=>{
        if (c.id == player.value.countryId)
          player.value.countryName = c.countryName
          console.log(player.value.countryName)
      })
      this.playerService.updatePlayer(player.value).subscribe(
        data=>{
          this.updateSuccess = true
        },
        error=>{
          console.log("error update player")
        }
      )
    }

  }



}
