import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/python-django.png";
import lms from "../../Assets/Projects/lms.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="KalviOS"
              description="Open Source Infrastructure for Online Education. Easily launch educational platforms, craft online courses, sell mock tests, and foster communities - without building from scratch."
              ghLink="https://github.com/kalvilabs/kalvi"
              demoLink="https://www.kalvi.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Django Roles and permission Package"
              description="The Django Roles and Permissions Package is designed to provide a robust and flexible system for managing user roles and permissions within a Django application. It aims to simplify the implementation of Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) mechanisms, allowing for fine-grained access control to various features and data objects in a Django-based application."
              // ghLink="https://github.com/"
              demoLink="https://test.pypi.org/project/edison-authorization/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
