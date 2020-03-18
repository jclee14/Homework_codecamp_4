import React from 'react';
import './App.css';

class TodoList extends React.Component {
  handleDone = (event) => {
    event.target.classList.toggle('doneCircleColor');
    event.target.classList.toggle('undoneCircleColor');

    event.target.nextSibling.classList.toggle('taskDone');
    //taskLists.map
  }

  render() {
    let taskArray = this.props.task;
    let taskLists = taskArray.map((taskObj) => {
      return (
        <div className="task-container" key={taskObj.id}>
          <span className="doneCircle undoneCircleColor" onClick={this.handleDone}></span>
          <span>{taskObj.task}</span>
          <span onClick={() => this.props.removeList(taskObj.id)} className='xIcon'>&#10006;</span>
        </div>
      )
    })
    return (
      <div>
        {taskLists}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    inputValue: '',
    todo: [
      { id: 1, task: 'Buy Milk'},
      { id: 2, task: 'Buy Eggs'},
      { id: 3, task: 'Buy Bread'},
      { id: 4, task: 'Bite the dust'}
    ],
    idCount: 4
  }

  listRemove = (id) => {
    this.setState({ todo: this.state.todo.filter(function(taskObj) { 
      return taskObj.id !== id
    })});
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.state.inputValue !== '') {
      let joined = await this.state.todo.concat({ id: this.state.idCount + 1, task: this.state.inputValue});
      await this.setState({ todo: joined });
      await this.setState({ idCount: this.state.idCount + 1, inputValue: ''})
    }
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input id="input-box" type="text" value={this.state.inputValue} placeholder="Enter Todo" onChange={this.handleChange} />
          <input id="submit-btn" type="submit" value="Submit" />
        </form>
        <TodoList task={this.state.todo}  removeList={this.listRemove} />
      </div>
    );
  }
}


export default App;
