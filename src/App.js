import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "./App.css";

let tasks = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTaskList: true,
            showModal: false,
            taskName: "",
            taskStatus: 0,
            search: "",
        };
    }

    toggleTaskList = () => {
        this.setState({ showTaskList: !this.state.showTaskList });
    };

    toggleTaskModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleTaskName = (e) => {
        this.setState({ taskName: e.target.value });
    };

    handleStatus = (e) => {
        this.setState({ taskStatus: e.target.value });
    };

    submitForm = () => {
        const { taskName, taskStatus } = this.state;
        let statusName;
        switch (parseInt(taskStatus)) {
            case 0:
                statusName = "Not Started";
                break;
            case 1:
                statusName = "In Progress";
                break;
            case 2:
                statusName = "Finished";
                break;
            default:
                break;
        }
        tasks.push({ name: taskName, status: statusName });
        this.setState({ showModal: false });
    };

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        return (
            <div>
                <Container fluid>
                    <Form className='mt-3'>
                        <Row>
                            <Col xs={12} lg={8}>
                                <Form.Group className='d-b' controlId='formBasic'>
                                    <Form.Control onChange={this.handleSearch} type='text' placeholder='Search task' />
                                </Form.Group>
                            </Col>
                            <Col xs={6} lg={2}>
                                <Button onClick={this.toggleTaskList} className='w-100' variant='outline-secondary' type='button'>
                                    {this.state.showTaskList ? "Hide Task List" : "Show Task List"}
                                </Button>
                            </Col>
                            <Col xs={6} lg={2}>
                                <Button onClick={this.toggleTaskModal} className='w-100' variant='primary' type='button'>
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
                        {this.state.showTaskList && (
                            <tbody>
                                {tasks
                                    .filter((task) => task.name.includes(this.state.search))
                                    .map((task, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{task.name}</td>
                                            <td>{task.status}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        )}
                    </Table>

                    <Modal show={this.state.showModal} onHide={this.toggleTaskModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control onChange={this.handleTaskName} type='email' placeholder='Enter task name' />
                                </Form.Group>
                                <Form.Group controlId='exampleForm.ControlSelect1'>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control onChange={this.handleStatus} as='select'>
                                        <option value={0}>Not Started</option>
                                        <option value={1}>In Progress</option>
                                        <option value={2}>Finished</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.toggleTaskModal} variant='secondary'>
                                Close
                            </Button>
                            <Button onClick={this.submitForm} variant='primary'>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        );
    }
}

export default App;
