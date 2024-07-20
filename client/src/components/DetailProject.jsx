import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProjects } from '../actions/projectAction';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';

const DetailProject = () => {
    // Catch id from useParams
    const { id } = useParams();
    const dispatch = useDispatch();
    const projectDetail = useSelector(state => state.DetailProject);

    const { loading, error, project, success } = projectDetail;

    useEffect(() => {
        dispatch(getDetailProjects(id));
    }, [dispatch, id]);

    const deleteSingleProject = (id) => {
        // Your delete logic here
        console.log(`Deleting project with id ${id}`);
    };

    const singleProject = project; // Assuming 'project' contains the details

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" />
                        </div>
                    ) : error ? (
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    ) : singleProject ? (
                        <Card>
                            <Card.Img variant="top" src={singleProject.thumbnail} alt={singleProject.title} />
                            <Card.Body>
                                <Card.Title>{singleProject.title}</Card.Title>
                                <Card.Text><b>Category: {singleProject.category}</b></Card.Text>
                                <Card.Text>{singleProject.description}</Card.Text>
                                <a className='btn btn-warning m-2' href={singleProject.demo} target="_blank" rel="noopener noreferrer">Project Demo Link</a>
                                <Link to={`/update-project/${singleProject.id}`} className='btn btn-primary m-2'>Update</Link>
                                <Button variant='danger' className='m-2' onClick={() => deleteSingleProject(singleProject.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ) : (
                        <Alert variant="info">
                            No project found.
                        </Alert>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default DetailProject;
