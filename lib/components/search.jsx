import React from 'react';
import Results from './results';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
    this.displayAllResults = this.displayAllResults.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.getMoreRecipes = this.getMoreRecipes.bind(this);
    this.getInitialResults = this.getInitialResults.bind(this);
    this.state = {
      ingredients: '',
      keywords: '',
      results: [],
      page: 1
    };
  }

  componentDidMount() {
    let waiting = false;
    let endScrollHandle;
    const fetchMore = () => {
      if (document.body.offsetHeight - window.scrollY < 950) {
        console.log('reached bottom of page');
        // console.log(this.props.posts.length);
        // console.log('fetching more posts');
        // this.props.fetchMorePosts(this.props.posts.length);
        this.getMoreRecipes();
      }
    };
    $(document).on('scroll', () => {
      if (waiting) {
        return;
      }
      waiting = true;
      clearTimeout(endScrollHandle);
      // console.log('Scrolling!');
      fetchMore();
      setTimeout(() => {
        waiting = false;
      }, 600);
      endScrollHandle = setTimeout(() => {
        fetchMore();
      }, 800);
    });
  }

  componentWillUnmount() {
    $(document).off( "scroll");
    // console.log('clearing posts after leaving posts index');
    this.props.clearPosts();
  }

  updateField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  getRecipes(e) {
    e.preventDefault();
    console.log('searching for recipes');
    console.log(`ingredients: ${this.state.ingredients}`);
    console.log(`keywords: ${this.state.keywords}`);
    let url = 'http://www.recipepuppy.com/api/';
    if (this.state.ingredients.length > 0) {
      url += ('?i=' + this.state.ingredients);
    }
    if (this.state.keywords.length > 0) {
      url += ('?q=' + this.state.keywords);
    }
    url += '&p=1';
    console.log(url);
    const errors = function(data) {
      console.log(data);
    };
    $.ajax({
      url: url,
      dataType: 'jsonp',
      jsonpCallback: 'callback'
    }).then(this.getInitialResults).catch(errors);
    this.setState({page: 1});
  }

  getMoreRecipes() {
    let url = 'http://www.recipepuppy.com/api/';
    if (this.state.ingredients.length > 0) {
      url += ('?i=' + this.state.ingredients);
    }
    if (this.state.keywords.length > 0) {
      url += ('?q=' + this.state.keywords);
    }
    const newPage = this.state.page + 1;
    url += '&p=' + newPage;
    console.log(url);
    const errors = function(data) {
      console.log(data);
    };
    $.ajax({
      url: url,
      dataType: 'jsonp',
      jsonpCallback: 'callback'
    }).then(this.updateResults).catch(errors);
    this.setState({page: newPage});
  }

  getInitialResults(data) {
    this.setState({
      results: data.results
    });
  }

  updateResults(data) {
    let results = this.state.results.concat(data.results);
    this.setState({
      results
    });
  }

  displayAllResults() {
    // console.log(this.state.results);
    return (
      <Results items={this.state.results}/>
    );
  }

  render() {
    // console.log(this.state);
    return (
      <div className='search'>
        <form className='search-box'>
          <input placeholder='Recipe Name' onChange={this.updateField('keywords')}></input>
          <input placeholder='Ingredients' onChange={this.updateField('ingredients')}></input>
          <button onClick={this.getRecipes}>Search</button>
        </form>
        {this.displayAllResults()}
      </div>
    );
  }
}

export default Search;
