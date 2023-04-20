import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Subscription } from 'rxjs'
import { HeroService } from 'src/app/services/hero.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() id: string | undefined

  destroyRef = inject(DestroyRef)
  heroService = inject(HeroService)
  subscription: Subscription | undefined

  constructor () {
    this.subscription = this.heroService
      .getHero()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: value => console.log('Value', value),
        complete: () => console.log('Completed')
      })

    // ! Example 2
    // this.destroyRef.onDestroy(() => {
    //   console.log('Unsubscribed')
    //   this.subscription?.unsubscribe()
    // })
  }

  ngOnInit () {
    console.log('id', this.id)

    // ! Example 2
    // ! takeUntilDestroyed samo unutar konstruktora
    //console.log('Subscription', this.subscription)
    // this.subscription = this.heroService
    //   .getHero()
    //   .pipe(takeUntilDestroyed())
    //   .subscribe({
    //     next: value => console.log('Value', value),
    //     complete: () => console.log('Completed'),
    //     error: error => console.log('Error', error)
    //   })
  }

  ngOnDestroy () {
    console.log('Subscription', this.subscription)
  }
}
