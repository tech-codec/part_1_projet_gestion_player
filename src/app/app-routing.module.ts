import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { NewplayerComponent } from './components/newplayer/newplayer.component';
import { EditeplayerComponent } from './components/editeplayer/editeplayer.component';

const routes: Routes = [
  {path:"playerComponent", component:PlayerComponent},
  {path:"newplayerComponent", component:NewplayerComponent},
  {path:"editeplayerComponent/:id", component:EditeplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
