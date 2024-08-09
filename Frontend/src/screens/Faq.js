import React from "react";
import {Card, Accordion, Button, Body} from 'react-bootstrap';

const Faq = () => {
    return(
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      What is the return policy?
      </Accordion.Toggle>
    </Card.Header>
    We offer a 14-day return policy for most items.
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      How do I track my order?
      </Accordion.Toggle>
    </Card.Header>
    You can track your order by logging into your account and viewing your order history.
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      What payment methods are accepted?
      </Accordion.Toggle>
    </Card.Header>
    We accept Visa, Mastercard, and American Express.
  </Card>
</Accordion>
    );
}

export default Faq;