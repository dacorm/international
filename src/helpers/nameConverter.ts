export const nameConverter = (name: string) => {
    if (name === 'Lifestealer') {
        return 'life_stealer'
    } else if (name === 'Anti-Mage') {
        return 'antimage'
    } else if (name === 'Doom') {
        return 'doom_bringer'
    } else if (name === 'Shadow Fiend') {
        return 'nevermore'
    } else if (name === 'Windranger') {
        return 'windrunner'
    } else if (name === 'Necrophos') {
        return 'necrolyte'
    } else if (name === 'Wraith King') {
        return 'skeleton_king'
    } else if (name === `Nature's Prophet`) {
        return 'furion'
    } else if (name === 'Centaur Warrunner') {
        return 'centaur'
    } else if (name === 'Underlord') {
        return 'abyssal_underlord'
    } else if (name === 'Timbersaw') {
        return 'shredder'
    } else if (name === 'Vengeful Spirit') {
        return 'vengefulspirit'
    } else if (name === 'Queen of Pain') {
        return 'queenofpain'
    } else if (name === 'Outworld Destroyer') {
        return 'obsidian_destroyer'
    } else if (name === 'Clockwerk') {
        return 'rattletrap'
    } else if (name === 'Zeus') {
        return 'zuus'
    } else if (name === 'Treant Protector') {
        return 'treant'
    }
    return name.toLowerCase().split(' ').join('_')
}