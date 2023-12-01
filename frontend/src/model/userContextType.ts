export interface SingInProps {
    username: string;
    password: string;
    token: string
}

export interface UserContextType {
    signInContext: ({ password, token, username }: SingInProps) => void;
    logout: () => void;
    token: string;
    username: string;
  }
  