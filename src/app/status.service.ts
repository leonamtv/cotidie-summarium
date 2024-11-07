import { Injectable } from '@angular/core';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  
  constructor() { }

  public getAllStatuses(): Array<Status> {
    return Array.of(
      this.getAvailableStatus(), 
      this.getDoneStatus(), 
      this.getBusyStatus(), 
      this.getDayOffStatus(),
      this.getVacationStatus(),
      this.getNotPresentStatus(),
      this.getSkippedStatus()
    );
  }

  public getParticipantStatuses(): Array<Status> {
    return Array.of(
      this.getAvailableStatus(), 
      this.getDoneStatus(), 
      this.getBusyStatus(), 
      this.getDayOffStatus(),
      this.getVacationStatus(),
      this.getNotPresentStatus()
    );
  }

  public getDiscussionStatuses(): Array<Status> {
    return Array.of(
      this.getAvailableStatus(),
      this.getDoneStatus(),
      this.getSkippedStatus()
    );
  }

  public getAvailableStatus(): Status {
    return new Status("Available", "#000000", "#fcdf03");
  }

  public getDoneStatus(): Status {
    return new Status("Done", "#000000", "#0ec244");
  }

  public getBusyStatus(): Status {
    return new Status("Busy", "#ffffff", "#fc4949");
  }

  public getDayOffStatus(): Status {
    return new Status("Day Off", "#000000", "#ff8c00");
  }

  public getVacationStatus(): Status {
    return new Status("Vacation", "#ffffff","#4287f5");
  }

  public getNotPresentStatus(): Status {
    return new Status("Not Present", "#ffffff", "#a142f5");
  }

  public getSkippedStatus(): Status {
    return new Status("Skipped", "#ffffff", "#616362");
  }
}
