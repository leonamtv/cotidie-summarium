import { Component } from '@angular/core';

@Component({
  selector: 'app-time-control',
  standalone: true,
  imports: [],
  templateUrl: './time-control.component.html',
  styleUrl: './time-control.component.scss'
})
export class TimeControlComponent {
  public hour_digit_1: string = '0'
  public hour_digit_0: string = '0'
  public minute_digit_1: string = '0'
  public minute_digit_0: string = '0'
  public second_digit_1: string = '0'
  public second_digit_0: string = '0'

  private interval: any = null;
  private start_time: any = null;

  public startCounting() {
    this.start_time = new Date()
    this.interval = setInterval (() => {
      let current_date = new Date()
      let delta_time = Math.abs(current_date.getTime() - this.start_time.getTime()) / 1000
      
      var hours = Math.floor(delta_time / 3600) % 24;
      delta_time -= hours * 3600;
      
      var minutes = Math.floor(delta_time / 60) % 60;
      delta_time -= minutes * 60;
      
      var seconds = delta_time % 60;

      let seconds_string = (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      let minutes_string = (minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      let hour_string    = (hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      
      this.hour_digit_1     = hour_string.toString().charAt(0)
      this.hour_digit_0     = hour_string.toString().charAt(1)

      this.minute_digit_1   = minutes_string.toString().charAt(0)
      this.minute_digit_0   = minutes_string.toString().charAt(1)

      this.second_digit_1  = seconds_string.toString().charAt(0)
      this.second_digit_0  = seconds_string.toString().charAt(1)

    }, 1000)
  }

  private resetDigits () {
    this.hour_digit_1 = this.hour_digit_0 = 
    this.minute_digit_1 = this.minute_digit_0 = 
    this.second_digit_1 = this.second_digit_0 = '0'
  }

  public stopCount () {
    clearInterval(this.interval)
    this.resetDigits()
  }
}
