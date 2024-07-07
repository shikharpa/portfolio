import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython, DiGit } from "react-icons/di";
import {
  SiPostgresql,
  SiGraphql,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiRedis,
  SiOwasp,
  SiDocker,
  SiNginx,
  SiSplunk,
  SiTalend,
  SiPandas,
  SiNumpy,
  SiAmazonaws,
  SiSelenium,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  const techStack = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiOwasp />, name: "OWASP" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <SiSplunk />, name: "Splunk" },
    { icon: <SiTalend />, name: "Talend" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiAmazonaws />, name: "AWS S3" },
  ];

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

export default Techstack;
