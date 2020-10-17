import React from "react";
import "./Contact-form.css";
import { Form ,Button } from "react-bootstrap";
const ContactForm = () => {
  return (
    <section className="mt-10">
    <div className="color-bg ">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5 ">
            <h1 className="font-weight-bold">
              Let us handle your <br /> project ,professionally{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              dicta molestiae a, maiores dolorem esse
            </p>
          </div>
          <div className="col-md-7 mt-5">
            <Form>
              <Form.Group>
                
                <Form.Control type="text" placeholder="Your email address"  />
              </Form.Group>

              <Form.Group>
           
                <Form.Control type="text" placeholder="Your name/company's name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
               
                <Form.Control as="textarea" placeholder="Message" rows="6" />
              </Form.Group>
              <Button variant="primary" type="submit">
    Send
  </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    
  );
};

export default ContactForm;
