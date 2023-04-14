import { Votes } from './publications.interface';

export interface IEvent {
  title: string;
  short_description: string;
  votes: number;
  url: string;
  image: string;
  photo: string;
  id: string;
  same_vote: Votes[];
}
