var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    type: 'Przygodowy',
    year: '2010',
    poster: "https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    type: 'Przygodowy',
    year: '1999',
    poster: "http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg"
  },
  {
  id: 3,
  title: 'Batman',
  desc: 'Film o panu w czapce',
  type: 'Film akcji',
  year: '2014',
  poster: "http://s2.ifotos.pl/img/2_hrnwhhx.jpg"
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('h3', {}, movie.type),
    React.createElement('p', {}, movie.year),
    React.createElement('img', {src:movie.poster})
  )
});

var element = 
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );

ReactDOM.render(element, document.getElementById('app'));