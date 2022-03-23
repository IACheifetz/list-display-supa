export function renderAlbums(album) {

    console.log(album);

    const albumEl = document.createElement('div');
    const titleEl = document.createElement('h3');
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
    const nameEl = document.createElement('h3');
    const consoleEl = document.createElement('p');
    const originalPriceEl = document.createElement('p');

    gameEl.classList.add('games');

    nameEl.textContent = Game.Name;
    consoleEl.textContent = Game.Console;
    originalPriceEl.textContent = Game.Original_Price;


    gameEl.append(nameEl, consoleEl, originalPriceEl);

    return gameEl;
}

export function renderMovies(Movie) {

    console.log(Movie);

    const movieEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const releaseEl = document.createElement('p');
    const directorEl = document.createElement('p');
    const genresEl = document.createElement('ul');

    movieEl.classList.add('movies');

    titleEl.textContent = Movie.Title;
    releaseEl.textContent = Movie.Release_Date;
    directorEl.textContent = Movie.Director;


    for (let genre of Movie.genres) {
        const li = document.createElement('li');

        li.textContent = genre;
        genresEl.append(li);
    }


    movieEl.append(titleEl, releaseEl, directorEl, genresEl);

    return movieEl;
}

export function renderAnimals(Animal) {


    const animalEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const typeEl = document.createElement('p');
    const habitatEl = document.createElement('p');
    const lifeExpectancyEl = document.createElement('p');

    animalEl.classList.add('animals');

    nameEl.textContent = Animal.Name;
    typeEl.textContent = Animal.Type;
    habitatEl.textContent = Animal.Habitat;
    lifeExpectancyEl.textContent = Animal.Life_Expectancy;


    animalEl.append(nameEl, typeEl, habitatEl, lifeExpectancyEl);

    return animalEl;
}
