// import functions and grab DOM elements

import { getAlbums } from './fetch-utils.js';
import { renderAlbum } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const albumsListEl = document.querySelector('.albums-list');

window.addEventListener('load', async () => {
    fetchAndDisplayAlbums();
});

async function fetchAndDisplayAlbums() {

    const albums = await getAlbums();
    for (let album of albums) {
        const albumEl = renderAlbum(album);
        albumsListEl.append(albumEl);
    }
}