import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProjects } from '../actions/projectAction';
import { Col, Card, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectLists = () => {
  const dispatch = useDispatch();
  const projectLists = useSelector(state => state.projectLists);
  const { loading, projects } = projectLists;

  useEffect(() => {
    dispatch(getListProjects());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Project Tracker</h1>
      <hr />

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={project.thumbnail} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="mb-2 text-muted"><b>({project.category})</b></Card.Text>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="info" className="me-2" href={project.demo} target="_blank" rel="noreferrer">Demo</Button>
                  <Link to={'/detail-project/'+project.id} className="btn btn-success">View Details</Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProjectLists;
