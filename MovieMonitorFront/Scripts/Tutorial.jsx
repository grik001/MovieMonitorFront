var MovieCard = React.createClass({

    render: function () {
        return (
            <div>
                <div>
                    {this.props.Name}
                </div>
                <img src={this.props.ImageUrl} />
                <div>
                    {this.props.Description}
                </div>
            </div>
          );
    }
});

var MovieList = React.createClass({
    render: function () {
        return (
              <div>
                  {this.props.data.map(movie => <MovieCard Name={movie.Name} Description={movie.Description} ImageUrl={movie.ImageUrl} />)}
              </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },

    componentWillMount: function () {
        axios.get(`http://127.0.0.1:3000/api/movies`)
          .then(res => {
              const movies = res.data.Movies;
              this.setState({ data: movies });
          });
    },

    render: function () {
        return (
          <div className="commentBox">
            <MovieList data={this.state.data} />
          </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('content'));
