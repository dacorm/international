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