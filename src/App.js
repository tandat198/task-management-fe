import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import SearchForm from "./components/SearchForm";
import MainForm from "./components/MainForm";
import TaskItem from "./components/TaskItem";
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

    submitSearchForm = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <Container>
                    <SearchForm submitSearchForm={this.submitSearchForm} handleSearch={this.handleSearch} toggleForm={this.toggleForm} />
                    {this.state.showForm && <MainForm taskName={this.state.taskName} taskStatus={this.state.taskStatus} submitForm={this.submitForm} handleTaskName={this.handleTaskName} handleStatus={this.handleStatus} resetInput={this.resetInput} clearAll={this.clearAll} />}
                    {this.state.tasks.length === 0 ? <div className='text-center mt-2'>You don't have any task</div> : this.state.tasks.filter((task) => task.name.includes(this.state.search)).map((task) => <TaskItem key={task.id} task={task} deleteTask={this.deleteTask} />)}
                </Container>
            </div>
        );
    }
}

export default App;
