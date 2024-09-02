export interface INOTE {
  title: String;
  data: String;
  pin_at?: Date;
  folder?: String | undefined;
  created_by?: String | undefined;
  config?: {
    theme?: {
      color: String;
      icon: String;
    };
  };
}
