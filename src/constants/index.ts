interface IScreenSize {
  ipad: number;
  mobile: number;
}

// Generic
export const screenSize: IScreenSize = { ipad: 1250, mobile: 600 };
export const tokenName: string = "uAthleteToken";

// News Feed
export const newsFeedLimit: number = 8;

// Login/Register
export const maxNameLength = 16;
export const minPasswordLength: number = 8;
export const maxPasswordLength: number = 12;
export const minWeightHeight: number = 50;
export const maxWeightHeight: number = 250;
