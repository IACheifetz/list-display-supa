export function renderAlbums(album) {

    console.log(album);

    const albumEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const artistEl = document.createElement('p');
    const releaseEl = document.createElement('p');
    const genreEl = document.createElement('h4');

    albumEl.classList.add('album');

    titleEl.textContent = album.Title;
    artistEl.textContent = album.Artist;
    releaseEl.textContent = album.Release_Date;
    
    for (let genre of album.Genre) {
        const pTag = document.createElement('p');

        pTag.textContent = genre;
        genreEl.append(pTag);
    }

    albumEl.append(titleEl, artistEl, releaseEl, genreEl);

    return albumEl;
}

export function renderGames(Game) {

    console.log(Game);

    const gameEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const consoleEl = document.createElement('p');
    const originalPriceEl = document.createElement('p');

    gameEl.classList.add('games');

    nameEl.textContent = Game.Name;
    consoleEl.textContent = Game.Console;
    originalPriceEl.textContent = Game.Original_Price;
    
    // for (let Genre of Game.Genre) {
    //     const pTag = document.createElement('p');

    //     pTag.textContent = Genre;
    //     genreEl.append(pTag);
    // }

    gameEl.append(nameEl, consoleEl, originalPriceEl);

    return gameEl;
}
