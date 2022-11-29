export class DayConverter {
    convert(day:number):string {
        let dayInWeek:string;

        switch(day) {
            case 1: dayInWeek = "Ponedeljak"; break;
            case 2: dayInWeek = "Utorak"; break;
            case 3: dayInWeek = "Sreda"; break;
            case 4: dayInWeek = "Četvrtak"; break;
            case 5: dayInWeek = "Petak"; break;
            case 6: dayInWeek = "Subota"; break;
            case 7: dayInWeek = "Nedelja"; break;
            default:
                dayInWeek = "Nepoznato";
        }

        return dayInWeek;
    }
}