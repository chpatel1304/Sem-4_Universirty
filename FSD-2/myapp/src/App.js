// import logo from './logo.svg';
import './App.css';
import Events from './Events';
import Events1 from './Events1';
import Events2 from './Events2';
// import FirstComponent from './FirstComponent';
// import PicImage from "./PicImage"
import Props from './Props';
import Task1 from './Task1';
import Task2 from './Task2';
import Map from './map';
import pc from "./pc.jpg"
function App() {
  const xyz="Computer"
  const students=[{"student_name":"Tanvi","uni_name":"LJIET"},{"student_name":"Chirag","uni_name":"LJKU"}]
  const arr=[{"Name":"ABC","Pic":pc,"Price":"20000"},{"Name":"XYZ","Pic":pc,"Price":"45000"}]
  return (
    <div className="App">
      {/* <h1>Welcome To Rohit Universe</h1> */}
      {/* <FirstComponent/> */}
      {/* <PicImage/> */}
      <Props Name={xyz} Price="7000"/>
      <Props Name="Mobile" Price="8000"/>
      <Task1 obj={students}/>
      <Events/>
      <Events1/>
      <Events2/>
      <Map/>
      <Task2 arr={arr}/>
    </div>
  );
}

export default App;
