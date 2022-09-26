import {monthConverter} from "./monthConverter";

export const convertDate = (date: string) => {
    const month = monthConverter((+date.slice(6,7) - 1));
    const day = date.slice(8, 10);

    const formattedDate = `${month} ${day}`

    return formattedDate
}
