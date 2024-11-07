export class Status {
    name: string;
    color: string;
    backgroundColor: string;

    constructor(
        name: string, 
        color: string = "#000000",
        backgroundColor: string = "#ffffff"
    ) {
        this.name = name;
        this.color = color;
        this.backgroundColor = backgroundColor;
    }

    public toString = (): string => {
        return this.name;
    }
}