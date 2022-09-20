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