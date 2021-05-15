import React,{ useState } from 'react'

const AddFilm = ({AddNewFilm}) => {

    const [title, settitle] = useState("")
    const [description, setDesc] = useState("")
    const [posterUrl, setposterUrl] = useState("")
    const [rate, setrate] = useState(0)

    const handleFilm = (e) =>{
        e.preventDefault();
        console.log(title,description,posterUrl,rate)
        AddNewFilm(title,description,posterUrl,rate)
         
    }
    return (
        <div>
            <form onSubmit={handleFilm}>
                <h2>Add Movies</h2>
                <div className="container">
                <label>Titre:</label> <input className="form-control mb-3" type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
                <label>Description:</label> <input className="form-control mb-3" type="text" value={description} onChange={(e)=>setDesc(e.target.value)}  />
                <label>lien:</label> <input className="form-control mb-3" type="text"  value={posterUrl} onChange={(e)=>setposterUrl(e.target.value)} />
                <label>note:</label> <input className="form-control mb-3" type="text"  value={rate} onChange={(e)=>setrate(e.target.value)} />
                <button className="btn btn-success mt-2"type="submit">Ajouter</button>
                </div>
            </form>
            
        </div>
    )
}

export default AddFilm
