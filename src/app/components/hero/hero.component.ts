import { NgOptimizedImage, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { RandomTimeStampPipe } from 'src/app/pipes/random-time-stamp.pipe'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    RandomTimeStampPipe
  ],
  providers: [
    { provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://picsum.photos' }
  ]
})
export class HeroComponent implements OnInit {
  @Input({ alias: 'someText' })
  requiredInput!: string

  @Input({ required: true }) id!: string | undefined

  ngOnInit () {
    console.log('requiredInput', this.requiredInput, this.id)
  }
}
