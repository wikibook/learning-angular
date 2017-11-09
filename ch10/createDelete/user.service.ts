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
  deleteUser(id: number): Promise<void>{
    return this.http.delete(`${this.url}/${id}`)
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
  }
  createUser(user): Promise<any>{
    return this.http
              .post(this.url, JSON.stringify({
                userName: user.userName, 
                email: user.email
              }))
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError)
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
