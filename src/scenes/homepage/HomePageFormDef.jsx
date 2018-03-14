import { Form } from 'mobx-react-form'
import validatorjs from 'validatorjs'

export default class HomePageFormDef extends Form {
    
    /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
     */
    plugins() {
        return { dvr: validatorjs };
    }
    
    setup() {
        
        const fields = [{
            name: 'email',
            label: 'Email',
            placeholder: 'Insert Email',
            rules: 'required|email|string|between:5,25'
        }];
        
        const values= {
                email : 'test@test.fr'
        }
        
        return ({fields, values});
    }
    
    hooks() {
        return {
            
            onInit(form) {
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

