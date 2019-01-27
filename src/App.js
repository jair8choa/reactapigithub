import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={      
      username: 'jair8choa',
      repos:[]
    }    
    this.FetchReq = this.FetchReq.bind(this)
    this.FetchReq(this.state.username)
  } 

  render() {
    const repos = this.state.repos.map((repo,key)=>{
        let urlRepo = `https://github.com/${this.state.username}/${repo.name}`
      return(
        <div className="card mb-2" key={key}>
          <div className="card-body">
            <h5 className="card-title">{repo.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted font-italic">{repo.language}</h6>
            <p className="card-text">{repo.description}</p>
            <a href={urlRepo} className="card-link">Repository</a>
          </div>
        </div>
      )
    })

    return (
      <div className="row">
        <div className="col-sm-5 mx-auto" id="user">
          <img className="rounded-circle w-75 mt-2" alt={this.state.login} src={this.state.avatar_url}/>
          <h2 className=""><a href={this.state.html_url}>@{this.state.username}</a></h2>
          <h4>{this.state.name}</h4>
          <p>{this.state.bio}</p>
          <p>Followers {this.state.followers} - Following {this.state.following}</p>
          <p className="font-weight-bold">{this.state.location}</p>
        </div>
        <div className="col-sm-7">
          <nav className="nav mb-4">
            <form className="form-inline mt-3 ml-3" onSubmit={this.searchUser}>
              <input className="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search" onChange={this.onUserNameChange}></input>
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
          <div className="container">
            <p>Repos: <span className="font-weight-bold">{this.state.public_repos}</span></p>
            { repos }
          </div>
          {/* <div class="alert alert-danger" role="alert">
            User {this.state.username} not found
          </div> */}
        </div>
      </div>
    );
  }

  onUserNameChange = e =>{
    if (e.target.value === "") {
      this.setState({
        username: this.state.login
      })
    }else{
      this.setState({
        username: e.target.value
      })
    }    
  }

  searchUser = e =>{  
    e.preventDefault()
    this.FetchReq(this.state.username)
  }

  FetchReq(username){
    fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(json=>{
          this.setState(json)          
        })
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res2=>res2.json())
        .then(json2=>{
          if (json2.message === "Not Found") {
            this.setState({repos: []})
          }else{
            this.setState({repos: json2})
          }    
        })
  }
}
export default App