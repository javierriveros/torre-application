export interface Member {
  subjectId: string;
  name: string;
  username: string;
  professionalHeadline: string;
  picture: string;
  member: boolean;
  manager: boolean;
  poster: boolean;
  weight: number;
}
export interface Organization {
  id: number;
  name: string;
  picture: string;
}
export interface Opportunity {
  id: string;
  objective: string;
  type: string;
  organizations: Organization[];
  locations: string[];
  remote: boolean;
  external: boolean;
  deadline?: string;
  status: string;
  compensation: {
    data: {
      code: string;
      currency: "string";
      minAmount: number;
      maxAmount: number;
      periodicity: string;
    };
    visible: boolean;
  };
  skills: {
    name: string;
    experience: string;
  }[];
  members: Member[];
  questions: {
    id: string;
    text: string;
    date: string;
  }[];
  context: any;
  _meta: any;
}

export interface OpportunitiesResult {
  aggregators: any;
  offset: number;
  results: string[];
  size: number;
  total: number;
}
