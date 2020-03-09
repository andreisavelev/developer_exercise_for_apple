import {fetch as fetchPolyfill} from 'whatwg-fetch';

/**
 * Fetch data using fetchPolyfill
 * @param url {string}
 * @returns {Promise<any>}
 */
async function fetchData(url) {
    let response = await fetchPolyfill(url);
    return await response.json();
}

export default fetchData;