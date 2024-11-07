import { Attribute } from "./attribute";
import { Status } from "./status";

export class Participant {
    name: string;
    status: Status;
    attributes: Array<Attribute>;

    constructor (
        name: string,
        status: Status,
        attributes: Array<Attribute>
    ) {
        this.name = name;
        this.status = status;
        this.attributes = attributes;
    }

    public toString = (): string => {
        return this.name;
    }

}