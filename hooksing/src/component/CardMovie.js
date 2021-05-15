import React from 'react'
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import '../Css/CardMovie.css'


const CardMovie = ({Movie}) => {
  
    return (
        <> 
          <Card className="carte">
          <CardImg top src={Movie.posterUrl} alt={Movie.title} />
          <CardBody>
          <CardTitle tag="h5">{Movie.title}</CardTitle>
          <CardText>{Movie.description}</CardText>
          </CardBody>
          </Card>  
        </>
    )
}

export default CardMovie
