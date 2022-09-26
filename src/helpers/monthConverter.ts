export const monthConverter = (month: number) => {
    switch (month) {
        case 0:
            return 'Январь';
            break;
        case 1:
            return 'Февраль';
            break;
        case 2:
            return 'Март';
            break;
        case 3:
            return 'Апрель';
            break;
        case 4:
            return 'Май';
            break;
        case 5:
            return 'Июнь';
            break;
        case 6:
            return 'Июль';
            break;
        case 7:
            return 'Август';
            break;
        case 8:
            return 'Сентябрь';
            break;
        case 9:
            return 'Октябрь';
            break;
        case 10:
            return 'Декабрь';
            break;
        case 11:
            return 'Январь';
            break;
        default:
            console.warn('enter number')
    }
}