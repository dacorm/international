export const unixTimeStampConverter = (unix: number) => {
    let miliseconds = unix * 1000
    return String(new Date(miliseconds).getDate())
}

const formatMinutes = (minutes: number) => {
    if (minutes < 10) return `0${minutes}`
    return minutes
}

export const unixTimeStampConverterToTime = (unix: number) => {
    const unixTimestamp = unix
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = hours + ':' + formatMinutes(minutes);
    return formattedTime
}