import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProjects } from '../actions/projectAction';

const AddProject = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [demo, setDemo] = useState('');

    const clearData = () => {
        setThumbnail(null);
        setTitle('');
        setCategory('');
        setDescription('');
        setDemo('');
    };

    const projectSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('thumbnail', thumbnail);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('demo', demo);

        dispatch(addProjects(formData));
        clearData();
        navigate('/');
    };

    return (
        <div className='container mt-4 mb-4 pd-3'>
            <h1>Add Project</h1>
            <hr />
            <div>
                <Form onSubmit={projectSubmitHandler} encType="multipart/form-data">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>

                    <Form.Select aria-label="Default select example" value={category} required onChange={(e) => setCategory(e.target.value)}>
                        <option>Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                    </Form.Select>

                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" value={demo} onChange={(e) => setDemo(e.target.value)} placeholder="Enter Demo Link" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Thumbnail</Form.Label>
                        <Form.Control type="file" required onChange={(e) => setThumbnail(e.target.files[0])} />
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Add Project
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProject;
