const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

export const monthDaysConverter = (month: number) => {
    switch (month) {
        case 0:
            return days.slice(0, 31);
            break;
        case 1:
            return days.slice(0, 30);
            break;
        case 2:
            return days.slice(0, 31);
            break;
        case 3:
            return days.slice(0, 30);
            break;
        case 4:
            return days.slice(0, 31);
            break;
        case 5:
            return days.slice(0, 30);
            break;
        case 6:
            return days.slice(0, 31);
            break;
        case 7:
            return days.slice(0, 31);
            break;
        case 8:
            return days.slice(0, 30);
            break;
        case 9:
            return days.slice(0, 31);
            break;
        case 10:
            return days.slice(0, 31);
            break;
        case 11:
            return days.slice(0, 30);
            break;
        default:
            console.warn('enter number')
    }
}