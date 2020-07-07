'use strict';


/**
 * Mongo Interface class
 * @module MongoInterface
 */

class MongoInterface {
  constructor(schema){
    this.schema = schema;
  }

  get(_id) {
    let searchParam = _id ? {_id} : {};
    return this.schema.find(searchParam)
      .then(result => {
        let format = {
          count: result.length,
          results: result,
        };
        return format;
      })
      .catch(e => console.log(e));
  }

  getOne() {
    return this.schema.findOne()
      .then(result => {
        console.log('result', result);
        return result;
      })
      .catch(e => console.log(e));

  }

  getByName(username) {
    let searchParam = username ? { username } : {};
    return this.schema.find(searchParam)
      .then(result => {
        let format = result[0];
        return format;
      })
      .catch(e => console.log(e));
  }


  create(data) {
    let newObject = new this.schema(data);
    return newObject.save(newObject);
  }

  update(_id, data) {
    return this.schema.findByIdAndUpdate(_id, data);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

  exists(data){
    return this.schema.exists(data);
  }

  
}

module.exports = MongoInterface;