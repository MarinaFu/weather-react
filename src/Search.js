import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Form, Button } from "react-bootstrap";
import "./Search.css";

export default function Search() {
  return (
    <Container className="mt-5">
      <Form>
        <div className="row">
          <div className="col-9">
            <Form.Group controlId="searchInput">
              <Form.Control type="search" placeholder="Enter City" />
            </Form.Group>
          </div>
          <div className="col-3">
            <Button variant="primary" type="submit">
              Search
            </Button>
            <Button variant="secondary" type="submit">
              Current
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
