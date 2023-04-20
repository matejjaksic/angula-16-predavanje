import { Component, inject } from '@angular/core'
import { of, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router } from '@angular/router'
import { HeroService } from 'src/app/services/hero.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // constructor (
  //   private readonly router: Router,
  //   private readonly route: ActivatedRoute,
  //   private readonly heroService: HeroService
  // ) {}

  // ! objasniti inject
  heroService = inject(HeroService)
  router = inject(Router)
  route = inject(ActivatedRoute)

  navigate () {
    const { heroId } = this.heroService

    this.router.navigate(['details', heroId], {
      relativeTo: this.route
    })
  }
}
