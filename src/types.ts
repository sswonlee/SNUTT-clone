export type Screen = 'home' | 'login' | 'nickname';
export type Response = {
  user_id: string;
  token: string;
  message: string;
};
export interface LogInType {
  user_id: string;
  token: string;
  message: string;
}

export interface LogInRes {
  id: string;
  password: string;
}

export type UserInfo = {
  id: string;
  isAdmin: boolean;
  regDate: string;
  notificationCheckedAt: string;
  email: string;
  localId: string;
  fbName: string;
  nickname: { nickname: string; tag: string };
};
