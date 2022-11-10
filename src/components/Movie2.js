import React,{useState} from 'react'
import "./App.css"
const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=89a8c783`).then(
      response => response.json()
    ).then(value => {
      setData(value.Search);
    })
  }
 
  return (
    <div>
        <center>
          <h1>Search Your Favorite Movie</h1>
          <form onSubmit={submitHandler}>
            <input  style={{width:"300px",height:'20px',position:'relative',bottom:"10px"}} type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <input type="submit" value="Search" style={{position:'relative',bottom:"10px"}}  />
          </form>
          <div  >
          {data.length>=1?data.map(movie=>
          <div key={movie.imdbID}>
            <div className="cards" style={{"width": "18rem"}}>
              <img src={movie.Poster}  alt={movie.Title} />
              <div >
                <h4 >{movie.Title}</h4>
                <p>{movie.Year}</p>
                
              </div>
            </div>
          </div>
            ):null}
            </div>
        </center>
    </div>
  )
}

export default App