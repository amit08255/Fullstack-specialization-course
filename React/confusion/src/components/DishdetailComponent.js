import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish(dish) {
    
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    function RenderComments(comments) {
      
        if(comments === null){
            return <div></div>;
        }

        return (
            <ul className="list-unstyled">
                {
                    comments.map((comment, index) => (
                        <li key={`comment-${index}`}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    ))
                }
            </ul>
        );
    }

    const  DishDetail = (props) => {

        const {dish} = props;

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {RenderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {RenderComments(dish.comments)}
                </div>
            </div>
        );
      
    }

export default DishDetail;

