var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		star: 'Daniel Radcliff',
		poster: 'https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-philosophers-stone-movie-poster-style-b.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		star: 'Simba',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/41kSXzSlnJL.jpg'
	},
	{
		id: 3,
		title: 'Matrix',
		desc: 'Bunch of weird guys',
		star: 'Keanu reeves',
		poster: 'https://www.movieposter.com/posters/archive/main/9/A70-4902'
	}
];

var moviesElements = movies.map(movie => {
	return React.createElement('li', {key: movie.id},
			React.createElement('h2', {}, movie.title),
			React.createElement('p', {}, `The main star of the movie is: ${movie.star}`),
			React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.poster}, )
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));