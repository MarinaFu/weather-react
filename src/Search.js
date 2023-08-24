import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Form, Button } from "react-bootstrap";
import "./Search.css";

export default function Search() {
  return (
    <Container className="mt-2">
      <Form>
        <div className="row">
          <div className="col-8">
            <Form.Group controlId="searchInput">
              <Form.Control
                type="search"
                placeholder="Enter City"
                autoFocus="on"
              />
            </Form.Group>
          </div>
          <div className="col-4">
            <Button
              value="Search"
              type="submit"
              className="btn btn-primary mr-2"
            >
              Search
            </Button>
            <Button
              value="Search"
              type="submit"
              className="btn btn-secondary ml-2"
            >
              Current
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
