import { monthConverter } from './monthConverter';

export const convertDate = (date: string) => {
    const monthToBeConverted = (+date.slice(5, 7) - 1);
    const month = monthConverter(monthToBeConverted);
    const day = date.slice(8, 10);

    const formattedDate = `${month} ${day}`;

    return formattedDate;
};
