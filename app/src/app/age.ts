export class Age {
    constructor(y: number, m: number, d: number) {
        this.years = 0;
        this.months = 0;
        this.year = y;
        this.month = m;
        this.day = d;

    }
    years: number;
    months: number;
    year: number;
    month: number;
    day: number;
    addMonth() {
        if (this.month < 12) {
            this.month++
        }
        else {
            this.year++;
            this.month = 1;
        }
        if (this.months < 11) {
            this.months++;
        }
        else {
            this.years++;
            this.months = 0;
        }
    }
    isPast() {
        let now = new Date();
        let then = new Date(this.year, this.month, this.day);
        return now > then;
    }
}
