export interface IFOLDERCONFIG {
  icon: string;
}

export interface ICollaborator {
  name: string;
  email: string;
}

export interface IFOLDER {
  name: string;
  pin_at?: Date;
  config?: IFOLDERCONFIG;
  created_by?: string | undefined;
  collaborators?: ICollaborator[];
}
