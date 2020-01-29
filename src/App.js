import React from 'react';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')    //fetch for API calls
      .then(employees => employees.json())
      .then(employees => {
        console.log(employees)
        this.setState({
          employees: employees
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App container">
        <h1>Sogeti Employee Directory </h1>
        < div className="row">
          {this.state.employees.map((employee, index) => {
            return (
              <div class="media col-12 mb-4 p-3 directory-entry">
                <img id="cat-directory" class="mr-3" alt="..." src={employee.image} />
                <div class="media-body">
                  <h5 class="mt-0">{employee.name} </h5>
                 <h4> {employee.location}</h4>
                  <h5>{employee.number}</h5>
                </div>
                <img id="city" src={employee.city}/>
               <h7> <button> Things to do in {employee.location} </button></h7>
              </div>
            )
          })
          }
        </ div>
      </div>
    );
  }
}

export default App;
