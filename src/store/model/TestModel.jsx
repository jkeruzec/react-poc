import { Model } from 'mobx-rest'
import TestsCollection from '../collection/TestsCollection'
class TestModel extends Model {
    
    constructor(attributes) {
        super(attributes);
        this.collection = TestsCollection;
      }
    
    
};

export default TestModel;