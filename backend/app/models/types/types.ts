export interface IAVATAR {
  public_id: string;
  url: string;
}

export interface IUSER {
  username: string;
  email: string;
  password: string;
  refresh_token: string;
  created_at: Date;
  avatar: IAVATAR;
}
