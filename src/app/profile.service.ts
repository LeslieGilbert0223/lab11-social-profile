import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Leslie Gilbert',
    contact: '586-586-5860',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (newUserProfile: UserProfile) => {
    this.userProfile = newUserProfile;
  };
}
