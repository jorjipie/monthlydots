export class Month {
    day: number;
    month: number;
    year: number;
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    isPast = () => new Date() > new Date(this.year, this.month - 1, this.day);

}
