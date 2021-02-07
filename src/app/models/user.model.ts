// Language
export class Language {
  id: number;
  name: string;
}

// User
export class User {

  name: {
    firstName: string;
    lastName: string;
  };

  email: string;
  password: string;
  language: number;

}

