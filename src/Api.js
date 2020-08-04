import React from 'react';

//function fetchWikiData2() {
    const fetchWikiData2 = () => {
    
    return new Promise((resolve, reject) => {
    console.log('fetchWikiData2 called');
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    //'https://gateway.marvel.com:443/v1/public/characters?apikey=399be848cd869eff0ef2177690b0ef8a'

    fetch(url)
        .then((result) => result.json())
        .then((result) => {
            console.log('Api Called done');
            console.log(result);
            resolve(result)
        })
    })
}

export { fetchWikiData2 };