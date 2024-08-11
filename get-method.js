// Get Method
export class GetApiService {
    // Construct the base url from the passed parameter when initialized in the main js file
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getData(endpoint) {
        try {
            // Get request in JQuery
            const data = await $.get(`${this.baseUrl}/${endpoint}`);
            return data;
        } catch (error) {
            throw new Error('Error fetching data');
        }
    }
}
