import react, { Component } from 'react';
import { CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));

  }


  render() {
    return (
      <div className="App">
      <CardList >
        {this.state.monsters.map(monster => ())}
      </CardList>
   
      </div>
    );
  }
}




export default App;
