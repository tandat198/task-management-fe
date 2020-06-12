import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Form className='mt-3'>
                        <Row>
                            <Col xs={4} lg={7}>
                                <Form.Group className='d-b' controlId='formBasicEmail'>
                                    <Form.Control type='text' placeholder='Search task' />
                                </Form.Group>
                            </Col>
                            <Col xs={4} lg={1}>
                                <Button className='w-100' variant='outline-primary' type='submit'>
                                    Search
                                </Button>
                            </Col>
                            <Col xs={4} lg={2}>
                                <Button className='w-100' variant='outline-secondary' type='button'>
                                    Show Task List
                                </Button>
                            </Col>
                            <Col xs={4} lg={2}>
                                <Button className='w-100' variant='primary' type='button'>
                                    Add Task
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task Name</th>
                                <th>Task Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Test e-commerce app</td>
                                <td>In Progress</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Check progress</td>
                                <td>Not Started</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Modal show={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' />
                                </Form.Group>
                                <Form.Group controlId='exampleForm.ControlSelect1'>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as='select'>
                                        <option value='0'>Not Started</option>
                                        <option value='1'>In Progress</option>
                                        <option value='2'>Finished</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary'>Close</Button>
                            <Button variant='primary'>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        );
    }
}

export default App;
