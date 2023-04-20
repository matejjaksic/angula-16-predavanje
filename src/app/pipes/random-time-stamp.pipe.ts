import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'randomTimeStamp',
  standalone: true
})
export class RandomTimeStampPipe implements PipeTransform {
  transform (url: string): string {
    return `${url}?timeStamp=${new Date()}`
  }
}
