import React from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TaskItem = (props) => {
    const { task, deleteTask } = props;
    return (
        <Alert className='clearfix' variant={task.status === "Finished" ? "success" : "secondary"}>
            <Row>
                <Col className='d-flex align-items-center'>{task.name}</Col>
                <Col className='d-flex align-items-center'>{task.status}</Col>
                <Col>
                    <Button className='float-right' variant='danger' onClick={() => deleteTask(task.id)}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Alert>
    );
};

export default TaskItem;
