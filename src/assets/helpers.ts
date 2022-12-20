export function randomNumber(min: number, max: number) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

export const randomLogo = (logosArr: string[]) => {
    const number = randomNumber(0, 4);

    return logosArr[number];
};
