import React,{Component} from 'react';
import API from './utils/api'
import './App.css';
import Table from './components/table'

class App extends Component{
  state = {
    employees: [], 
    asc_desc: ""
  } 

componentDidMount = () => {
  API.getUsers().then(employees => {
    this.setState({employees:employees.data.results})
    console.log(this.state.employees)
  })  
}

order = event => {
  if ((this.state.asc_desc === "")||(this.state.asc_desc === "asc")){
    var newarr = this.state.employees.sort(function(a, b){
      var keyA = a.id.value,
          keyB = b.id.value;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  }); 
this.setState({asc_desc: "desc"})
  } else if (this.state.asc_desc === "desc") {
    var newarr = this.state.employees.sort(function(a, b){
      var keyA = a.id.value,
          keyB = b.id.value;
      if(keyA < keyB) return 1;
      if(keyA > keyB) return -1;
      return 0;
  }); 
this.setState({asc_desc: "asc"})
  }



this.setState({employees:newarr})
}

  render(){  
  return (
    <div className="App">
    <Table employees={this.state.employees} order={this.order}/>
    </div>
  );
}}


export default App;

// create components for table, table rows 
//table should headers, 