import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,  Button
} from 'reactstrap';

const NASACard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.imgurl} alt="Card image cap" style={props.style} />
        <CardBody>
          <CardTitle>{props.titletxt}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>{props.bodytxt}</CardText>
          <Button>NASA</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NASACard;