import { Form,Button,Container,Col } from 'react-bootstrap';

function ReplyForm () {
    return(
          <Container className="form-container">            
              <h1> Leave a reply </h1>  
              <p>Your email address will not be published. Required fields are marked *</p> 

<Form>
    <Form.Row>
    <Col xs={13}>
<Form.Group>
        <Form.Label className="float-left">Comment</Form.Label> 
        <Form.Control as="textarea" rows={9} placeholder="" />
    </Form.Group>
    
    
    <Form.Group controlId="formBasicName">
        <Form.Label className="float-left">Name*</Form.Label> 
        <Form.Control type="name" placeholder="" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label className="float-left">Email*</Form.Label> 
        <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group controlId="formBasicWebsite">
        <Form.Label className="float-left">Website</Form.Label> 
        <Form.Control type="website" placeholder="" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox"  className="text-muted float-left" label="Save my name, email, and website in this browser for the next time I comment" />
    </Form.Group>

  <Button variant="primary" type="submit" className="button">
    Post Comment
  </Button>
  </Col>
  </Form.Row>
</Form>

</Container>
   )
}

export default ReplyForm;