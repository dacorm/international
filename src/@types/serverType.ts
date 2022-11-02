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
