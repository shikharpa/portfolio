import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

const techStack = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col
        key={index}
        xs={4}
        md={2}
        className="tech-icons"
        style={{ textAlign: "center", padding: "10px" }}
      >
        <div style={{ fontSize: "1.5rem", width: "75%", margin: "auto" }}>
          {tech.icon}
        </div>
        <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>{tech.name}</div>
      </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
