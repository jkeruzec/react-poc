import { Form } from 'mobx-react-form'
import validatorjs from 'validatorjs'
import testsCollection from '../../store/collection/TestsCollection'
import TestModel from '../../store/model/TestModel'

export default class HomePageFormDef extends Form {
    
    testModel;
    
    /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
     */
    plugins() {
        return { dvr: validatorjs };
    }
    
    /**
     * Setup form property
     */
    setup() {
        
        this.testModel = new TestModel({id: 1});
        this.printEmail(this.testModel);
        const fields = {
                email: {
                    label: 'Email',
                    placeholder: 'Insert Email',
                    rules: 'required|email|string|between:5,25',
                default: 'empty...'
                }
        };
        
        return ({fields});
    }
    
    async printEmail(testModel) {
        const promise = testModel.fetch();
        console.log(testModel.isRequest('fetching'));
        await promise;
        console.log(testModel.get('email'));
    }
    
    /**
     * Hook serves like a controller for Javascript
     */
    hooks() {
        return {
            
            onInit(form) {
                testsCollection.fetch().then(
                        val => {
                            form.update(val[0]);
                        }, val  => {
                            console.debug("error");
                        }
                );
                console.log(form.values());
            },
            
            onSuccess(form) {
                // get field values
                console.log('Form Values!', form.values());
            },
            onError(form) {
                // get all form errors
                console.log('All form errors', form.errors());
            }
        };
    }
    
};

