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

    this.cachePromise = fetch(`${main.api_base_url}/${id}`)
      .then((response) => response.json())
      .then((results) => {
        this.cache[id] = results;

        this.cachePromise = null;
        return results;
      });

    return this.cachePromise;
  }
}
