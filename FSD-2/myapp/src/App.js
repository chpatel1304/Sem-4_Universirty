// import logo from './logo.svg';
import './App.css';
import Events from './Events';
import Events1 from './Events1';
import Events2 from './Events2';
import Filter1 from './Filter1';
// import FirstComponent from './FirstComponent';
// import PicImage from "./PicImage"
import Props from './Props';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Map from './map';
import pc from "./pc.jpg"
import MainFile from "./MainFile"
import Hooks from './hooks';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import Task7 from './Task7';
import Task9 from './Task9';
import Task8 from './Task8';
import Task11 from './Task11';
import Task12 from './Task12';
import Task13 from './Task13';

function App() {
  const xyz="Computer"
  const students=[{"student_name":"Tanvi","uni_name":"LJIET"},{"student_name":"Chirag","uni_name":"LJKU"}]
  const arr=[{"Name":"ABC","Pic":pc,"Price":"20000"},{"Name":"XYZ","Pic":pc,"Price":"45000"}]
  return (
    <div className="App">
      {/* <h1>Welcome To Rohit Universe</h1> */}
      {/* <FirstComponent/> */}
      {/* <PicImage/> */}
      {/* <Props Name={xyz} Price="7000"/>
      <Props Name="Mobile" Price="8000"/>
      <Task1 obj={students}/>
      <Events/>
      <Events1/>
      <Events2/>
      <Map/>
      <Task2 arr={arr}/>
      <Task3/>
      <Filter1/> */}
      {/* <Task8/> */}
      {/* <MainFile/>
      <Hooks/>
      <Task4/>
      <Task5/>
      <Task6/>
      <Task7/>
      <Task9/> */}
      {/* <Task11/> */}
      <Task12/>
      <Task13/>
    </div>
  );
}

export default App;
