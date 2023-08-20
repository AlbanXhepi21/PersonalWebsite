import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airline_booking from "../../Assets/Projects/airline_booking.png";
import travel_management_system from "../../Assets/Projects/travel_management_system.png";
import gender_detection from "../../Assets/Projects/gender_detection.jpg";
import eye_tracking from "../../Assets/Projects/eye_traking.jpg";
import movie_review from "../../Assets/Projects/movie_review.jpg";
import traffic_sing_detection_and_recognition from "../../Assets/Projects/trafficSignDetectionAndRecognition.jpg";

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
              imgPath={eye_tracking}
              isBlog={false}
              title="Eye Tracking"
              description="A sophisticated vision-based system that precisely tracks eye movements(left, center or right), also detecting eyeblinking and tiredness of the eye."
              ghLink="https://github.com/AlbanXhepi21/eye-tracking"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic_sing_detection_and_recognition}
              isBlog={false}
              title="Traffic Sign Detection And Recognition"
              description="An advanced computer vision system that accurately detects and recognizes trafficsigns, facilitating enhanced safety and efficiency in real-world driving scenarios."
              ghLink="https://github.com/AlbanXhepi21/TrafficSignDetectionAndRecognition"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gender_detection}
              isBlog={false}
              title="Gender Detection"
              description="A machine learning-based program that accurately predicts the gender of individuals based on their facialfeatures."
              ghLink="https://github.com/AlbanXhepi21/GenderDetection"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airline_booking}
              isBlog={false}
              title="Airline Booking System"
              description="A simple airline booking system that efficiently handles flight reservations, allowing users to search, select, and book flights for their desired travel plans."
              ghLink="https://github.com/AlbanXhepi21/AirlineBooking"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_review}
              isBlog={false}
              title="Moview Review App"
              description="A movie review app that provides users with a platform to read and write reviews and rate movies."
              ghLink="https://github.com/AlbanXhepi21/movieApp"
              // demoLink="#" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel_management_system}
              isBlog={false}
              title="Travel Management System"
              description="While searching for a travel destination we all have often dealt with the uncertanity of which travel agency should I choose or if I am missing any occasions from travel agencies. On the other hand, even travel agencies would like to have a platform where they could be in direct contact with a targeted audience (clients who are ready to travel). Creating a platoform that could bring together traveling agencies with clients would be a good solution for this problem."
              ghLink="https://github.com/AlbanXhepi21/TravelAgency"
              // demoLink="#"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
