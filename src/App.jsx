import React from 'react'
import './App.css'

let quotes = ["Books are more than the words they contain. They are also tools to stimulate your senses and adjust your thinking.", "...Justice is subject to dispute; might is easily recognized and is not disputed. So we cannot give might to justice, because might has gainsaid justice, and has declared that it is she herself who is just. And thus being unable to make what is just strong, we have made what is strong just." , "In theory, there is no difference between theory and practice. But in practice, there is.", "La vida es hermosa, pero es doblemente hermosa si se tiene una causa","Experiencing the world through endless second hand information is not enough, if we want authenticity, we have to initiate it !"];

              
let authors = ["Shogo Makishima","Blaise Pascal","?", "Pepe Mòjica", "Travis Rice"];

const TextInput = (props) => {
  return (<blockquote id="text">{props.text}</blockquote>);
};

const AuthorInput= (props) => {
  return (
    <b class="h6" id="author">{props.author}</b>)
};

const NewQuoteButton = (props) => {
  return (<button id="new-quote" class="btn btn-dark" onClick={props.updateQuote}>New quote!</button>);
}

const ShareOnMastodon = (props) => {
  return (<div><div class="share">Share!</div><a  id="toot-quote" href="https://mastodonshare.com/share" target="_blank"><i class="fa-brands fa-mastodon" aria-hidden="true"></i>
</a></div>);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex: Math.floor(Math.random()*props.textArray.length)
  };
    this.updateQuote = this.updateQuote.bind(this);
  }
  
  updateQuote(){
    this.setState(() => ({currentIndex: Math.floor(Math.random()*this.props.textArray.length)
  }))  
  };
  
  render() {
    return (
    <div class="column text-start" id="quote-box">
        <div class="control d-flex">
        <NewQuoteButton updateQuote={this.updateQuote}/>
        <ShareOnMastodon/>
        </div>
        <article class="container">
        <TextInput text={this.props.textArray[this.state.currentIndex]}/>
        <AuthorInput author={this.props.authorArray[this.state.currentIndex]}/>
        </article>
    </div>
    );
  }
}

App.defaultProps = {textArray: quotes, authorArray: authors};

export default App