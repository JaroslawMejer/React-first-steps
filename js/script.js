var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		star: 'Daniel Radcliff',
		poster: 'https://imgc.allpostersimages.com/img/posters/wizarding-world-harry-potter-fantastic-beasts_u-L-F8UMSH0.jpg?src=gp&w=300&h=375'
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


var Movie = React.createClass({
	propTypes: {
		film: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			React.createElement('li', {key: this.props.film.id},
				React.createElement(MovieTitle, {title: this.props.film.title}),
				React.createElement(MovieStar, {star: this.props.film.star}),
				React.createElement(MovieDesc, {desc: this.props.film.desc}),
				React.createElement(MoviePoster, {src: this.props.film.poster}),
			)	
		)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('h2', {}, this.props.title)	
		)
	}
})

var MovieStar = React.createClass({
	propTypes: {
		star: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('p', {}, `Główną gwiazdą filmu jest: ${this.props.star}`)
		)
	}
})

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
})

var MoviePoster = React.createClass({
	propTypes: {
		src: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('img', {src: this.props.src})
		)
	}
})


var MoviesList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},
	render: function(){
		return (
			React.createElement('ul', {},
				movies.map(movie =>{
					return React.createElement(Movie, {key: movie.id, film: movie})
				})	
			)
		)
	}
})


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {movies})
	);

	

ReactDOM.render(element, document.getElementById('app'));