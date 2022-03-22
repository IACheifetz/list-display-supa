// import functions and grab DOM elements

import { getAlbums } from './fetch-utils.js';
import { renderAlbums } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', async () => {
    fetchAndDisplayAlbums();
});

const albumsListEl = document.querySelector('.albums-list');

async function fetchAndDisplayAlbums() {

    const albums = await getAlbums();

    for (let album of albums) {
        const albumEl = renderAlbums(album);
        
        albumsListEl.append(albumEl);
    }
}