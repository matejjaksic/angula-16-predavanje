import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './views/landing/landing.component'
import { DetailsComponent } from './views/details/details.component'

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
