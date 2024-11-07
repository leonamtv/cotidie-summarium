import { Participant } from "./participant";
import { Status } from "./status";

export class DiscussionItem {
    status: Status;
    caller: Participant;
    description: string;

    constructor(
        status: Status,
        caller: Participant,
        description: string = ""
    ) {
        this.status = status;
        this.caller = caller;
        this.description = description;
    }
}