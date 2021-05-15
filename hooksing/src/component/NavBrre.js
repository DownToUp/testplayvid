import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function NavBrre() {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
            <img src="https://img2.freepng.fr/20180324/waq/kisspng-art-film-reel-cinema-clip-art-movie-logo-cliparts-5ab623ff8bfc33.0206030315218862075734.jpg"
             alt="cinema" style={{height:"50px",marginLeft:"20px",justifyContent:'center',
             alignItems:'center'}}/>
        </NavLink>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/AddFilm">AddFilm</Link>
            <Link className="nav-item nav-link" to="/ListCardMovie">Movies</Link>
            
          </div>
        
      </nav>
    )
}

export default NavBrre
