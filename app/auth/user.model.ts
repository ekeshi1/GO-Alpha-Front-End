export class UserModel {
 username: string ;
  email: string;
  name: string;
  password: string;


  constructor(username: string, email: string, name: string, password: string) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.password = password;
  }

}
