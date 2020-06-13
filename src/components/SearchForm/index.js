import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = (props) => {
    const { submitSearchForm, handleSearch, toggleForm } = props;

    return (
        <Row className='mt-3'>
            <Col xs={12} sm={8} lg={10}>
                <Form onSubmit={submitSearchForm}>
                    <Form.Group className='d-b'>
                        <Form.Control type='text' placeholder='Search task' onChange={handleSearch} />
                    </Form.Group>
                </Form>
            </Col>
            <Col xs={12} sm={4} lg={2}>
                <Button onClick={toggleForm} className='w-100' variant='primary' type='button'>
                    Show Form
                </Button>
            </Col>
        </Row>
    );
};

export default SearchForm;
