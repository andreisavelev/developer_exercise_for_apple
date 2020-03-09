/**
 * Fetch data using built-in fetch API
 * @param url {string}
 * @returns {Promise<any>}
 */
async function fetchData(url) {
    let response = await fetch(url);
    return await response.json();
}

export default fetchData;