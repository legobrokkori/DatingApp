import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  knownAs: string;
  age: number;
  dateOfBirth: Date;
  gender: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
  roles?: string[];
}
