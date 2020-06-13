import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MainForm = (props) => {
    const { submitForm, handleStatus, handleTaskName, resetInput, clearAll, taskName, taskStatus } = props;

    return (
        <Form className='my-3' onSubmit={submitForm}>
            <Row>
                <Col xs={12} lg={6} xl={4}>
                    <Form.Group className='d-b'>
                        <Form.Control type='text' placeholder='Enter task name' value={taskName} onChange={handleTaskName} />
                    </Form.Group>
                </Col>
                <Col xs={12} lg={2}>
                    <Form.Group>
                        <Form.Control as='select' value={taskStatus} onChange={handleStatus}>
                            <option value={-1}>Status</option>
                            <option value={0}>Not Started</option>
                            <option value={1}>In Progress</option>
                            <option value={2}>Finished</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6} lg={2}>
                    <Button type='submit' className='mb-2 w-100' variant='outline-primary'>
                        Add Task
                    </Button>
                </Col>
                <Col xs={6} lg={2}>
                    <Button type='reset' className='mb-2 w-100' variant='outline-danger' onClick={resetInput}>
                        Reset
                    </Button>
                </Col>
                <Col xs={12} xl={2}>
                    <Button type='button' className='mb-2 w-100' variant='danger' onClick={clearAll}>
                        Clear All Tasks
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default MainForm;
