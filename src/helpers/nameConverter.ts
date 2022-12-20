export const nameConverter = (name: string) => {
    if (name === 'Lifestealer') {
        return 'life_stealer';
    } if (name === 'Anti-Mage') {
        return 'antimage';
    } if (name === 'Doom') {
        return 'doom_bringer';
    } if (name === 'Shadow Fiend') {
        return 'nevermore';
    } if (name === 'Windranger') {
        return 'windrunner';
    } if (name === 'Necrophos') {
        return 'necrolyte';
    } if (name === 'Wraith King') {
        return 'skeleton_king';
    } if (name === 'Nature\'s Prophet') {
        return 'furion';
    } if (name === 'Centaur Warrunner') {
        return 'centaur';
    } if (name === 'Underlord') {
        return 'abyssal_underlord';
    } if (name === 'Timbersaw') {
        return 'shredder';
    } if (name === 'Vengeful Spirit') {
        return 'vengefulspirit';
    } if (name === 'Queen of Pain') {
        return 'queenofpain';
    } if (name === 'Outworld Destroyer') {
        return 'obsidian_destroyer';
    } if (name === 'Clockwerk') {
        return 'rattletrap';
    } if (name === 'Zeus') {
        return 'zuus';
    } if (name === 'Treant Protector') {
        return 'treant';
    } if (name === 'Io') {
        return 'wisp';
    } if (name === 'Magnus') {
        return 'magnataur';
    }
    return name.toLowerCase().split(' ').join('_');
};
