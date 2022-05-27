
import './App.css';
import Nav from './components/Navb';
// import Input from './components/Input';
// import DoctorTable from './components/DoctorTable';
import SearchRecord from './components/SearchRecord';

function App() {
  return (
    <div className="App">
     <Nav/>
     {/* <Input/>
     <DoctorTable/> */}
     <SearchRecord/>
     
    </div>
  );
}

export default App;
