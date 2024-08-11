import { GetApiService as GetService } from './get-method.js';
import { PostApiService as PostService } from './post-method.js';

// Pass the base url into the class imported from the 2 js files
const baseUrl       = 'https://jsonplaceholder.typicode.com';
const getService    = new GetService(baseUrl);
const postService   = new PostService(baseUrl);

async function fetchData() {
    try {
        const data = await getService.getData('posts/1');
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function sendData(formData) {
    try {
        const response = await postService.postData('posts', formData);
        displayData(response);
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

function displayData(data) {
    $('#display').text(JSON.stringify(data, null, 2));
}

$(document).ready(() => {
    fetchData();

    $('#postDataForm').submit(async (event) => {
        event.preventDefault();

        const formData = {
            title   : $('#title').val(),
            body    : $('#body').val(),
            userId  : 1
        };

        await sendData(formData);
    });
});