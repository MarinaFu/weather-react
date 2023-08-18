import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Form, Button } from "react-bootstrap";
import "./Search.css";

export default function Search() {
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group controlId="searchInput">
          <Form.Control type="search" placeholder="Search" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="secondary" type="submit">
          Current
        </Button>
      </Form>
    </Container>
  );
}
