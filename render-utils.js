export function renderAlbum(Album) {
    const albumEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const ArtistEl = document.createElement('p');
    const releaseEl = document.createElement('p');
    const genreEl = document.createElement('ul');

    albumEl.classList.add('album');

    titleEl.textContent = Album.Title;
    ArtistEl.textContent = Album.Artist;
    releaseEl.textContent = Album.Release_Date;
    
    for (let Genre of Album.Genre) {
        const li = document.createElement('li');

        li.textContent = Genre;
        genreEl.appendChild(li);
    }

    albumEl.append(
        titleEl,
        ArtistEl,
        releaseEl,
        genreEl
    );

    return albumEl;
}