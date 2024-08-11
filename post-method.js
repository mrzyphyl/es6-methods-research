// Post Method
export class PostApiService {
    // Construct the base url from the passed parameter when initialized in the main js file
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async postData(endpoint, data) {
        try {
            // Post Request in JQuery
            const response = await $.post(`${this.baseUrl}/${endpoint}`, data);
            return response;
        } catch (error) {
            throw new Error('Error sending data');
        }
    }
}
