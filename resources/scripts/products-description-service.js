export class ProductionDescriptionService {
  constructor() {
    this.cache = [];
    this.cachePromise = null;
  }

  getDescriptionByProductId(id) {
    if (this.cache.length > 0 && this.cache[id]) {
      console.log('returned from cache');

      return Promise.resolve(this.cache[id]);
    }

    if (this.cachePromise) {
      console.log('promise reaccessed');

      return this.cachePromise;
    }

    // best practice to using wp-rest-api
    // you can use `/ee-api/${id}` with brand new implementation for the challenge
    // and you can remove the second `then()` completely because the description return in the first `response`
    this.cachePromise = fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((results) => {
        this.cache[id] = results;

        this.cachePromise = null;
        return results;
      });

    return this.cachePromise;
  }
}
