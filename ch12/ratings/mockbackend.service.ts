import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MockbackendService implements InMemoryDbService{
  createDb() {
    const items = [
      {
        id: 1,
        title: "Waterfall",
        url: "../../assets/images/cliff.jpg",
        rating: 4
      },
      {
        id: 2,
        title: "Flower",
        url: "../../assets/images/flower.jpg",
        rating: 5
      },
      {
        id: 3,
        title: "Pyramid",
        url: "../../assets/images/pyramid.jpg",
        rating: 3
      },
      {
        id: 4,
        title: "Lake",
        url: "../../assets/images/lake.jpg",
        rating: 5
      }
    ]
    return {items};
  }
}
