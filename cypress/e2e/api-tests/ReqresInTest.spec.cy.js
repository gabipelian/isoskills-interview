import {httpRequests} from "../../requests/HttpRequests";

it('should test GET and POST requests', () => {
    httpRequests.getRequest(4);
    httpRequests.postRequest();
});