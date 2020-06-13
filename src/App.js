import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            taskName: "",
            taskStatus: -1,
            search: "",
            tasks: [],
        };
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm });
    };

    handleTaskName = (e) => {
        this.setState({ taskName: e.target.value });
    };

    handleStatus = (e) => {
        this.setState({ taskStatus: e.target.value });
    };

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    submitForm = (e) => {
        e.preventDefault();
        const { taskName, taskStatus } = this.state;
        const newTask = {
            id: uuidv4(),
            name: taskName,
        };
        switch (parseInt(taskStatus)) {
            case 0:
                newTask.status = "Not Started";
                break;
            case 1:
                newTask.status = "In Progress";
                break;
            case 2:
                newTask.status = "Finished";
                break;
            default:
                break;
        }
        this.setState({
            tasks: [...this.state.tasks, newTask],
            taskStatus: -1,
            taskName: "",
        });
    };

    clearAll = () => {
        this.setState({ tasks: [] });
    };

    resetInput = () => {
        this.setState({
            taskName: "",
            taskStatus: -1,
        });
    };

    deleteTask = (id) => {
        this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) });
    };

    render() {
        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col xs={12} sm={8} lg={10}>
                            <Form onSubmit={this.submitSearchForm}>
                                <Form.Group className='d-b' controlId='formBasic'>
                                    <Form.Control onChange={this.handleSearch} type='text' placeholder='Search task' />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} sm={4} lg={2}>
                            <Button onClick={this.toggleForm} className='w-100' variant='primary' type='button'>
                                Show Form
                            </Button>
                        </Col>
                    </Row>
                    {this.state.showForm && (
                        <Form className='mt-2' onSubmit={this.submitForm}>
                            <Row>
                                <Col xs={8} lg={5} xl={6}>
                                    <Form.Group className='d-b'>
                                        <Form.Control value={this.state.taskName} onChange={this.handleTaskName} type='text' placeholder='Enter task name' />
                                    </Form.Group>
                                </Col>
                                <Col xs={4} lg={2}>
                                    <Form.Group controlId='exampleForm.ControlSelect1'>
                                        <Form.Control value={this.state.taskStatus} onChange={this.handleStatus} as='select'>
                                            <option value={-1}>Status</option>
                                            <option value={0}>Not Started</option>
                                            <option value={1}>In Progress</option>
                                            <option value={2}>Finished</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={5} xl={4}>
                                    <Button type='submit' className='mr-2' variant='outline-primary'>
                                        Add Task
                                    </Button>
                                    <Button onClick={this.resetInput} type='reset' className='mx-2' variant='outline-danger'>
                                        Reset
                                    </Button>
                                    <Button onClick={this.clearAll} type='button' className='ml-2' variant='danger'>
                                        Clear All Tasks
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                    {this.state.tasks
                        .filter((task) => task.name.includes(this.state.search))
                        .map((task, i) => (
                            <Alert key={i} className='clearfix' variant={task.status === "Finished" ? "success" : "secondary"}>
                                <Row>
                                    <Col className='d-flex align-items-center'>{task.name}</Col>
                                    <Col className='d-flex align-items-center'>{task.status}</Col>
                                    <Col>
                                        <Button onClick={() => this.deleteTask(task.id)} className='float-right' variant='danger'>
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>
                            </Alert>
                        ))}
                </Container>
            </div>
        );
    }
}

export default App;
