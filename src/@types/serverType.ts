export interface DotaMatchJSON {
    match_id: any;
    duration: number;
    start_time: number;
    radiant_team_id?: number;
    radiant_name: string;
    dire_team_id?: number;
    dire_name: string;
    leagueid: number;
    league_name: string;
    series_id: number;
    series_type: number;
    radiant_score: number;
    dire_score: number;
    radiant_win: boolean;
}

export interface ProMatchJSON {
    match_id: any;
    duration: number;
    start_time: number;
    radiant_team_id?: number;
    radiant_name: string;
    dire_team_id?: number;
    dire_name: string;
    leagueid: number;
    league_name: string;
    series_id: number;
    series_type: number;
    radiant_score: number;
    dire_score: number;
    radiant_win: boolean;
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface Post {
    _id: string;
    title: string;
    text: string;
    tags: string[];
    viewsCount: number;
    imageUrl: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface Cosmetics {

}

export interface League {
    leagueid: number;
    ticket?: any;
    banner?: any;
    tier: string;
    name: string;
}

export interface RadiantTeam {
    team_id: number;
    name: string;
    tag: string;
    logo_url: string;
}

export interface DireTeam {
    team_id: number;
    name: string;
    tag: string;
    logo_url: string;
}

interface Player {
    personaname: string;

}

export interface PlayerFull {
    match_id: number;
    player_slot: number;
    ability_targets: any;
    ability_upgrades_arr: number[];
    ability_uses: any;
    account_id: number;
    actions: any;
    additional_units: any;
    assists: number;
    backpack_0: number;
    backpack_1: number;
    backpack_2: number;
    backpack_3: any;
    buyback_log: any;
    camps_stacked: any;
    connection_log: any;
    creeps_stacked: any;
    damage: any;
    damage_inflictor: any;
    damage_inflictor_received: any;
    damage_taken: any;
    damage_targets: any;
    deaths: number;
    denies: number;
    dn_t: any;
    firstblood_claimed: any;
    gold: number;
    gold_per_min: number;
    gold_reasons: any;
    gold_spent: number;
    gold_t: any;
    hero_damage: number;
    hero_healing: number;
    hero_hits: any;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_neutral: number;
    item_uses: any;
    kill_streaks: any;
    killed: any;
    killed_by: any;
    kills: number;
    kills_log: any;
    lane_pos: any;
    last_hits: number;
    leaver_status: number;
    level: number;
    lh_t: any;
    life_state: any;
    max_hero_hit: any;
    multi_kills: any;
    net_worth: number;
    obs: any;
    obs_left_log: any;
    obs_log: any;
    obs_placed: any;
    party_id: number;
    party_size: number;
    performance_others: any;
    permanent_buffs: PermanentBuff[];
    pings: any;
    pred_vict: any;
    purchase: any;
    purchase_log: any;
    randomed: any;
    repicked: any;
    roshans_killed: any;
    rune_pickups: any;
    runes: any;
    runes_log: any;
    sen: any;
    sen_left_log: any;
    sen_log: any;
    sen_placed: any;
    stuns: any;
    teamfight_participation: any;
    times: any;
    tower_damage: number;
    towers_killed: any;
    xp_per_min: number;
    xp_reasons: any;
    xp_t: any;
    personaname: string;
    name: string;
    last_login: any;
    radiant_win: boolean;
    start_time: number;
    duration: number;
    cluster: number;
    lobby_type: number;
    game_mode: number;
    is_contributor: boolean;
    patch: number;
    region: number;
    isRadiant: boolean;
    win: number;
    lose: number;
    total_gold: number;
    total_xp: number;
    kills_per_min: number;
    kda: number;
    abandons: number;
    rank_tier: number;
    is_subscriber: boolean;
    cosmetics: any[];
    benchmarks: Benchmarks;
}

export interface Benchmarks {
    gold_per_min: { [key: string]: number };
    xp_per_min: { [key: string]: number };
    kills_per_min: { [key: string]: number };
    last_hits_per_min: { [key: string]: number };
    hero_damage_per_min: { [key: string]: number };
    hero_healing_per_min: { [key: string]: number };
    tower_damage: { [key: string]: number };
    stuns_per_min: { [key: string]: number };
    lhten: Lhten;
}

export interface Lhten {
}

export interface PermanentBuff {
    permanent_buff: number;
    stack_count: number;
    grant_time: number;
}


interface AllWordCounts {

}

interface MyWordCounts {

}

export interface MatchInfoType {
    match_id: number;
    barracks_status_dire: number;
    barracks_status_radiant: number;
    chat: any[];
    cluster: number;
    cosmetics: Cosmetics;
    dire_score: number;
    dire_team_id: number;
    draft_timings: any[];
    duration: number;
    engine: number;
    first_blood_time: number;
    game_mode: number;
    human_players: number;
    leagueid: number;
    lobby_type: number;
    match_seq_num: number;
    negative_votes: number;
    objectives: any[];
    picks_bans: any[];
    positive_votes: number;
    radiant_gold_adv: any[];
    radiant_score: number;
    radiant_team_id: number;
    radiant_win: boolean;
    radiant_xp_adv: any[];
    skill?: any;
    start_time: number;
    teamfights: any[];
    tower_status_dire: number;
    tower_status_radiant: number;
    version: number;
    replay_salt: number;
    series_id: number;
    series_type: number;
    league: League;
    radiant_team: RadiantTeam;
    dire_team: DireTeam;
    players: Player[];
    patch: number;
    region: number;
    all_word_counts: AllWordCounts;
    my_word_counts: MyWordCounts;
    throw: number;
    loss: number;
    replay_url: string;
}

export interface Ids {
    account_id: number;
    rating: number;
    fh_unavailable?: boolean;
}

export interface Profile {
    account_id: number;
    personaname: string;
    name?: any;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login?: any;
    loccountrycode?: any;
    status?: any;
    is_contributor: boolean;
    is_subscriber: boolean;
}

export interface MmrEstimate {
    estimate: number;
}

export interface PlayerI {
    profile: Profile;
    rank_tier: number;
    competitive_rank?: any;
    mmr_estimate: MmrEstimate;
    leaderboard_rank: number;
    solo_competitive_rank: number;
}

export interface MatchesI {
    win: number;
    lose: number;
}

export interface Subscore {
    kindId: string;
    kindName: string;
    c1: string;
    c2: string;
    comment: string;
}

export interface Cell {
    isTitle: boolean;
    caption: string;
    factorId?: number;
    eventId?: number;
    eventKindId?: number;
    value?: number;
    paramText: string;
    param?: number;
    captionAlign: string;
    flexParam?: boolean;
    blocked?: boolean;
    paramHigh?: number;
    paramLow?: number;
}

export interface Row {
    isTitle: boolean;
    cells: Cell[];
}

export interface Market {
    marketId: string;
    ident: string;
    sortOrder: number;
    caption: string;
    commonHeaders: any[];
    rows: Row[];
}

export interface Event {
    id: number;
    number: number;
    startTimeTimestamp: number;
    competitionId: number;
    competitionName: string;
    competitionCaption: string;
    skId: number;
    skName: string;
    skSortOrder: string;
    team1Id: number;
    team2Id: number;
    team1: string;
    team2: string;
    eventName: string;
    name: string;
    place: string;
    priority: number;
    kind: number;
    rootKind: number;
    sortOrder: string;
    willBeLive: boolean;
    tv: number[];
    sportViewId: number;
    timer: string;
    timerSeconds: number;
    timerDirection: number;
    timerTimestampMsec: any;
    scoreFunction: string;
    scoreComment: string;
    scoreCommentTail: string;
    scores: scores[];
    subscores: Subscore[];
    allFactorsCount: number;
    markets: Market[];
    regionId?: number;
    statisticsType: string;
    competitionsGroupId: string;
    competitionsGroupCaption: string;
}

type scores = {
    c1: number;
    c2: number;
}

export interface TopEvents {
    result: string;
    request: string;
    place: string;
    lang: string;
    events: Event[];
    md5: string;
}

export interface Heroes {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    legs: number;
}
