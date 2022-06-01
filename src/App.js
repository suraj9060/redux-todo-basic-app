
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from "./components/ListTodo"


function App() {
   
  return (
    <div className="App">
      <h1> Todo app using redux </h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
