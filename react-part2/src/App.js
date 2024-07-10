import './App.css';
import Student from './components/Student'
import Count from './components/Count';

const studentDetails=[
  {
  fullname:"Sudhamoy Dey",
  email:"sd@gmail.com",
  batchno:'11'
  },
  {
    fullname: "Aditya Raj M",
    email: "arm@gmail.com",
    batchno: '10'
  }
]

function App() {
  return (
    <div className="App">
      {/* PROPS PART */}
      <Student fullname="Sudhamoy Dey" email="sd@gmail.com" batchno="11"/>
      <Student fullname="Aditya Raj M" email="arm@gmail.com" batchno="10"/>
      

      {/* iterate using map in jsx
      terate over the array and spread each object individually.
       */}
      {studentDetails.map((student, index) => (
        <Student
          key={index}
          fullname={student.fullname}
          email={student.email}
          batchno={student.batchno}
        />
      ))}

      {/* STATES PART */}
      <Count/>
    </div>
  );
}

export default App;




/* 
########PROPS PART#############

Iteration over studentDetails Array:

Use map to iterate over the studentDetails array.
For each student object in the array, render the Student component and spread the properties as props.
Key Prop:

It's important to provide a unique key prop when rendering a list of components. Here, index is used for simplicity, but in a real-world scenario, it's better to use a unique identifier if available.
Removing Direct Student Component Calls:

Removed the direct calls to Student with hardcoded values, as now we are rendering them dynamically from the studentDetails array.
This way, your code becomes more maintainable and scalable, allowing you to easily manage a list of students without having to hard-code each Student component individually.
 */