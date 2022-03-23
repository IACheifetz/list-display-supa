// import functions and grab DOM elements

import { getAlbums, getGames } from './fetch-utils.js';
import { renderAlbums, renderGames } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', async () => {
    fetchAndDisplayAlbums();
    fetchAndDisplayGames();
});

const albumsListEl = document.querySelector('.albums-list');

async function fetchAndDisplayAlbums() {

    const albums = await getAlbums();
  
    for (let album of albums) {
        const albumEl = renderAlbums(album);
        
        albumsListEl.append(albumEl);
    }
}

const gamesListEl = document.querySelector('.games-list');

async function fetchAndDisplayGames() {

    const games = await getGames();

    for (let Game of games) {
        const GameEl = renderGames(Game);
      
        gamesListEl.append(GameEl);
    }
}