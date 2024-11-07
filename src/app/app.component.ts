import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Participant } from './participant';
import { Attribute } from './attribute';
import { CommonModule } from '@angular/common';
import { Status } from './status';
import { StatusService } from './status.service';
import { DiscussionItem } from './discussion-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cotidie-summarium';

  participants: Array<Participant>;
  participantStatuses: Array<Status>;
  discussionStatuses: Array<Status>;
  allStatuses: Array<Status>
  discussionItems: Array<DiscussionItem>;
  selectedParticipant?: Participant;

  constructor (
    private statusService: StatusService
  ) {
    this.participants = [];
    this.participantStatuses = [];
    this.discussionStatuses = [];
    this.discussionItems = [];
    this.allStatuses = [];
  }

  ngOnInit(): void {
    this.participantStatuses = this.statusService.getParticipantStatuses();
    this.discussionStatuses = this.statusService.getDiscussionStatuses();
    this.allStatuses = this.statusService.getAllStatuses();

    let caretakerAttribute = new Attribute("🧹");

    this.participants = Array.of(
      new Participant("Leo I", this.statusService.getAvailableStatus(), Array.of(caretakerAttribute)),
      new Participant("Leo II", this.statusService.getDoneStatus(), Array.of()),
      new Participant("Leo III", this.statusService.getNotPresentStatus(), Array.of()),
      new Participant("Leo IV", this.statusService.getBusyStatus(), Array.of()),
      new Participant("Leo VI", this.statusService.getDayOffStatus(), Array.of()),
      new Participant("Leo VII", this.statusService.getVacationStatus(), Array.of())
    );

    this.discussionItems = Array.of(
      new DiscussionItem(this.statusService.getDoneStatus(), this.participants[0], "Test test test test"),
      new DiscussionItem(this.statusService.getDoneStatus(), this.participants[1], "Test test test test"),
      new DiscussionItem(this.statusService.getDoneStatus(), this.participants[2], "Test test test test"),
      new DiscussionItem(this.statusService.getDoneStatus(), this.participants[3], "Test test test test"),
      new DiscussionItem(this.statusService.getAvailableStatus(), this.participants[4], "Test test test test"),
      new DiscussionItem(this.statusService.getAvailableStatus(), this.participants[5], "Test test test test")
    );
  }

  public changeParticipantStatus(
    participant: Participant,
    status: Status
  ) : void {
    participant.status = status;
  }

  public changeDiscussionItemStatus(
    discussionItem: DiscussionItem,
    status: Status
  ) : void {
    discussionItem.status = status;
  }

  public addParticipant(event: any) {
    const participantName = (event.target as HTMLInputElement).value
    if (participantName) {
      this.participants.push(
        new Participant(participantName, this.statusService.getAvailableStatus(), Array.of())
      )
    }
  }

  public isValidToCreateDiscussionItem(
    participant: Participant, 
    description: string
  ): boolean {
    return participant != null && description != null && description != '';
  }

  public addDiscussionItem(event: any) {
    const description = (event.target as HTMLInputElement).value
    if (description && this.selectedParticipant) {
      this.discussionItems.push(
        new DiscussionItem(this.statusService.getAvailableStatus(), this.selectedParticipant, description)
      )
    }
  }

}
