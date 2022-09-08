export interface EnvVariable {
  domain: string;
  clientId: string;
  clientSecret: string;
}
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export interface InitialState {
  openDashboardLogin: boolean;
}

export interface User {
  name: string,
  nickname: string,
  email: string,
  picture: string,

}