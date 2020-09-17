export class FavoriteCount {
    customerId: number;
    count: number;

    constructor(favoriteCount: any) {
      this.customerId = favoriteCount.CustomerId;
      this.count = favoriteCount.count;
    }
  
    public html() {
  `${this.count}`;
    }
  }
  