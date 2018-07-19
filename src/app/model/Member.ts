export class Member {
    id: string;
    name: string;
    lastname: string;
    email: string;
    skills: Array<Skill>;
}

export class Skill {
    name: string;
    level: number;
}
  