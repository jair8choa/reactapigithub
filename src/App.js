import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.user = this.props.user
    this.urlAPI = `https://api.github.com/users/${this.props.user}`
    this.state={}
    fetch(this.urlAPI)
        .then(res=>res.json())
        .then(json=>{
          this.setState(json)
          console.log(json)
        })
  } 

  render() {
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="rounded-circle" alt={this.state.login} src={this.state.avatar_url}/>
          <h2 className=""><a href={this.state.html_url}>@{this.state.login}</a></h2>
          <h4>{this.state.name}</h4>
          <p>{this.state.bio}</p>
          <p>Followers {this.state.followers} - Following {this.state.following}</p>
        </div>
        <div className="col-sm-7">
        </div>
      </div>
    );
  }

}

export default App
