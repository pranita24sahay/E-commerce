import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText} from 'reactstrap';


function trending_women(props) {
    const PICKS = props.arr.map(cloth =>
        {
            if(cloth.women)
            {
                return(
                <div  className="col-sm-3">
                    <Card className="style">
                        <CardImg className="style-pic" width="200px" src={cloth.image} alt={cloth.name} />
                        <CardBody className="style-body">
                            <CardHeader className="justify-content-center">{cloth.name} <CardSubtitle className="justify-content-center">{cloth.price}</CardSubtitle></CardHeader>

                            <CardText>{cloth.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )
            }
        })
    return (
        <div className="container">
            <div className="row justify-content-center">
                Trending in women
            </div>
            <div className="row">
            {PICKS}
            </div>
        </div>
    );
}

export default trending_women;