export interface IAVATAR {
  public_id: string;
  url: string;
}

export interface IUSER {
  username: string;
  email: string;
  password: string;
  refreshToken: string;
  created_at?: Date;
  avatar: IAVATAR;
}

export interface INOTECONFIG {
  theme?: {
    color?: string;
    url?: string;
  };
}

export interface INOTE {
  title: string;
  data: string;
  pin_at: Date;
  folder: string | undefined;
  created_by: string | undefined;
  config: INOTECONFIG;
}

export interface IFOLDERCONFIG {
  icon: string;
}
export interface IFOLDER {
  title: string;
  pin_at: Date;
  config: IFOLDERCONFIG;
  created_by: string | undefined;
}
