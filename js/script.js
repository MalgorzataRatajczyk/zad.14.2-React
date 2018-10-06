"use strict"
/* var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Poter'),
                React.createElement('p', {}, 'Film o czaroodzieju')),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    ); 
*/
// tablica z danymi filmów
var movies = [
    { 
        id: 1,
        title: 'Dawno temu w Ameryce',
        desc: 'Gatunek: Dramat, gangsterski',
        director: 'Reżyser: Sergio Leone',
        year: 'Data premiery: ' + 1984,
        src: './image/Dawno_temu.jpg'
    },
    { 
        id: 2,
        title: 'Chłopcy z Ferajny',
        desc: 'Gatunek: Dramat, gangsterski',
        director: 'Reżyser: Martin Scorsese',
        year: 'Data premiery: ' + 1990,
        src: './image/Chłopcy_z_ferajny.jpg'
    },
    { 
        id: 3,
        title: 'Gorączka',
        desc: 'Gatunek: Sensacyjny',
        director: 'Reżyser: Michael Mann',
        year: 'Data premiery: ' + 1995,
        src: './image/Gorączka.jpg'
    },
    { 
        id: 4,
        title: 'Ojciec Chrzestny',
        desc: 'Gatunek: Dramat, gangsterski',
        director: 'Reżyser: Francis Ford Coppola',
        year: 'Data premiery: ' + 1972,
        src: './image/Ojciec_Chrzestny.jpg'
    },
    { 
        id: 5,
        title: 'Ojciec Chrzestny II',
        desc: 'Gatunek: Dramat, gangsterski',
        director: 'Reżyser: Francis Ford Coppola',
        year: 'Data premiery: ' + 1974,
        src: './image/Ojciec_..._II.jpg'
    },
    { 
        id: 6,
        title: 'Człowiek z blizną',
        desc: 'Gatunek: Dramat, gangsterski',
        director: 'Reżyser: Brian De Palma',
        year: 'Data premiery: ' + 1983,
        src: './image/Człowiek_z_blizną.jpg'
    }
];
/* zmapowanie listy na odpowiadające im Reactowe elementy za pomocą metody .map(),
która przyjmuje jako parametr funkcję, przez którą przechodzi każdy z elementów tablicy (czyli każdy film),
który następnie jest mapowany do postaci ReactElementu korzystającego z informacji o filmie (movie.title, movie.desc itd. */ 
 var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.director),
        React.createElement('p', {}, movie.year),
        React.createElement('img', {src: movie.src}),
    );
 });

 // umieszczenie elementów w liście
 var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));