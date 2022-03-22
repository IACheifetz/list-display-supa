export function renderAlbum(Albums) {
    const albumEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const ArtistEl = document.createElement('p');
    const releaseEl = document.createElement('p');
    const genreEl = document.createElement('ul');

    albumEl.classList.add('album');

    titleEl.textContent = Albums.Title;
    ArtistEl.textContent = Albums.Artist;
    releaseEl.textContent = Albums.ReleaseDate;
    
    for (let genre of Albums.Genre) {
        const li = document.createElement('li');

        li.textContent = genre;
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