import { Injectable } from '@angular/core'
import { of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroId = 1

  getHero () {
    return of(this.heroId).pipe(tap(() => this.heroId++))
  }
}
