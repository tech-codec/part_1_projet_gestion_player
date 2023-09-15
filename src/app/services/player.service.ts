import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  host:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAllPlayer():Observable<Player[]>{
    return this.http.get<Player[]>(this.host +"/players")
  }

  getAllPlayerSelected():Observable<Player[]>{
    return this.http.get<Player[]>(this.host + "/players?selected=true")
  }

  getAllPlayerSearch(keyword:string):Observable<Player[]>{
    return this.http.get<Player[]>(this.host +"/players?playerName_like="+keyword)
  }

  onChangeStatus(p:Player):Observable<Player>{
    p.selected = !p.selected
    return this.http.put<Player>(this.host +"/players/"+p.id, p)
  }

  deletePlayer(p:Player):Observable<any>{
    return this.http.delete<any>(this.host +"/players/"+p.id)
  }

  createPlayer(p:Player):Observable<Player>{
    return this.http.post<Player>(this.host+"/players", p)
  }

  getPlayer(id:number):Observable<Player>{
    return this.http.get<Player>(this.host +"/players/"+id)
  }

  updatePlayer(player:Player):Observable<Player>{
    return this.http.put<Player>(this.host +"/players/"+player.id, player)
  }

}
