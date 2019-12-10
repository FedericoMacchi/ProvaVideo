export class MatchDay {
    visibility: boolean;
    name: string;
    matches: SingleMatch[];
}

export class SingleMatch {
    date: string;
    team1: Team;
    team2: Team;
    score1: any;
    score2: any;
}

export class Team {
    key: string;
    name: string;
    code: string;
}
