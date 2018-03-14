import {Collection } from 'mobx-rest'
import TestModel from 'store/model/TestModel'

class TestsCollection extends Collection {
    url ()  { return `/testData`; }
    model () { return TestModel; }
};

export default new TestsCollection();


