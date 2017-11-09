import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        "id": 1,
        "userName": "brendan",
        "email": "fake@email.com"
      },
      {
        "id": 2,
        "userName": "brad",
        "email": "email@notreal.com"
      },
      {
        "id": 3,
        "userName": "caleb",
        "email": "dummy@email.com"
      }
    ];
    return {users};
  }
}