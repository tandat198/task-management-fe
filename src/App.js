import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col xs={12} sm={8} lg={10}>
                            <Form>
                                <Form.Group className='d-b' controlId='formBasic'>
                                    <Form.Control type='text' placeholder='Search task' />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} sm={4} lg={2}>
                            <Button className='w-100' variant='primary' type='button'>
                                Show Form
                            </Button>
                        </Col>
                    </Row>
                    <Form className='my-3'>
                        <Row>
                            <Col xs={12} lg={6} xl={4}>
                                <Form.Group className='d-b'>
                                    <Form.Control type='text' placeholder='Enter task name' />
                                </Form.Group>
                            </Col>
                            <Col xs={12} lg={2}>
                                <Form.Group controlId='exampleForm.ControlSelect1'>
                                    <Form.Control as='select'>
                                        <option value={-1}>Status</option>
                                        <option value={0}>Not Started</option>
                                        <option value={1}>In Progress</option>
                                        <option value={2}>Finished</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col xs={6} lg={2}>
                                <Button type='submit' className='mb-2' variant='outline-primary w-100'>
                                    Add Task
                                </Button>
                            </Col>
                            <Col xs={6} lg={2}>
                                <Button type='reset' className='mb-2' variant='outline-danger w-100'>
                                    Reset
                                </Button>
                            </Col>
                            <Col xs={12} xl={2}>
                                <Button type='button' className='mb-2 w-100' variant='danger'>
                                    Clear All Tasks
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Alert className='clearfix' variant='secondary'>
                        <Row>
                            <Col className='d-flex align-items-center'>Task name</Col>
                            <Col className='d-flex align-items-center'>Task Status</Col>
                            <Col>
                                <Button className='float-right' variant='danger'>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default App;
