import React from "react";
import Card from "react-bootstrap/Card";
import CustomNavbar from "../components/CustomNavbar";

export default function Layout({ children }) {
  return (
    <div>
      <Card className="text-center">
        <CustomNavbar />
        <div>{children}</div>
        <Card.Footer>
          <small className="text-muted">Copyright 2024 Tomasz Konieczny</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
