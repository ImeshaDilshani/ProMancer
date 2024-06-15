import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProjects } from '../actions/projectAction';
import { Col, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProjectLists = () => {
  // Get data from store
  const dispatch = useDispatch();
  const projectLists = useSelector(state => state.projectLists);
  const {success, loading, projects} = projectLists;

  console.log(projects);

  useEffect(() => {
    dispatch(getListProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>all Projects List</h1>
      <hr />
      <Container>
      <Row>
        {projects.map((projects) =>(
          <Col xs={12} md={6} lg={4} key={projects.id}>
            <Card style = {{width:'18rem'}} className='m-3 pd-2'>
            <Card.Img variant='top' height='150px' src={projects.thumbnail}/>
            <Card.Body>
              <Card.Title>{projects.title}</Card.Title>
              <Card.Text><b>({projects.category})</b></Card.Text>
              <hr/>
              <span><a className='btn btn-info m-2' href={projects.demo} target = '_blank' rel="noreferrer">Demo</a>
              {/* <Link style={{textDecoration:'none', marginLeft:'2px', marginRight:'2px'}} className='m-2 pd-2 btn btn-success'>View</Link> */}
              </span>
            </Card.Body>
            </Card>
            
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default ProjectLists;