import React,{useState} from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import ListCardMovie from './component/ListCardMovie'
import MoviesList from './Asset/MoviesList'
import AddFilm from './component/AddFilm'
import NavBrre from './component/NavBrre'
import Home from './component/Home'
import Filter from './component/Filter'

const AddNewFilm = (title,description,posterUrl,rate) => {
  const [MovieList,setMoviesList]=useState(MoviesList)
  setMoviesList([...MovieList,
    title,
    description,
    posterUrl,
    rate
  ]);
    };


function App() {


  return (
    <Router>
    <div className="App container">
     
             <NavBrre />
             <Filter />
      <div className="listMovie">
       <Route strict path="/ListCardMovie" render={()=>(
          <ListCardMovie MoviesList={MoviesList} />
       )}>
      </Route>
      <Route exact path="/" component={Home} />
       <Route path="/AddFilm" AddNewFilm={AddNewFilm} >
         <AddFilm />
      </Route>
      </div> 
    </div>
    </Router>
  );
}

export default App;
