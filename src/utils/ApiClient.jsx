import { apiClient} from 'mobx-rest';
import adapter from 'mobx-rest-fetch-adapter';

const prepareApiClient = (apiHost, apiPort) => {
      //We will use the adapter to make the `xhr` calls
        const apiPath = apiHost + ":" +  apiPort;
        apiClient(adapter, { apiPath });
};

export default prepareApiClient;



