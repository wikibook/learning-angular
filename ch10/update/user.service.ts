import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  url = 'api/users'
  constructor(private http: Http) { }
  
  getUsers(): Promise<any[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError)
  }
  updateUser(user): Promise<void>{
    console.log(user);
    const url = `${this.url}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user))
      .toPromise()
      .then(() => user)
      .catch(this.handleError)
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
