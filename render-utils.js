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
    
    for (let Genre of album.Genre) {
        const pTag = document.createElement('p');

        pTag.textContent = Genre;
        genreEl.append(pTag);
    }

    albumEl.append(titleEl, artistEl, releaseEl, genreEl);

    return albumEl;
}
