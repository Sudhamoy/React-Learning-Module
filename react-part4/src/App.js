import './App.css'
import Count from './components/Count'
import HOC from './components/HOC'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import React,{ useEffect,useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

const containerStyle={
  border:'1px dotted black',
  padding:'20px',
  margin:'20px'
}

function App() {

  const [show,setShow] = useState(true)
  
  useEffect(()=>{
    console.log("App Component gets mounted successfully..")
  },[])

  //For State-uplifting and Props-Drilling concept:
  const [count,setCount] = useState(0)

  return (
    
    <div className="App" style={containerStyle}>
      APP Component
      {show && <Count/>}
      <button onClick={()=>setShow(!show)}>{show? "Hide":"Show"}</button>


      <HOC Component={Section1} />
      <HOC Component={Section2} />

      {/*
      ## Another method:
        <HOC>
          <Section1></Section1>
        </HOC>
        <HOC>
          <Section2></Section2>
        </HOC>

        function HOC(props){
        return(
        <div>
          {props.children} //children is a keyword
        </div>
          )
        }
      */}

      <br/>
      <br/>
      <hr/>
      <hr/>

      <p style={{fontWeight:'bold'}}>APP Component</p>
      <p style={{fontWeight:'500'}}>{count}</p>
      <div>
        <Child1 count={count} setCount={setCount}/>
        <Child2/>
      </div>

    </div>
  );
}

export default App;

/*
(i) Rendering : evaluating jsx and converting it to html as browser only understand html
Note:Component gets render fully and html doc get rendered partly.

(ii) Lifecycle of components types:
    1. Mounting (Birth) : Default state/props value----->renders
    2. Updating (Milestones):New props/set-State() invoking ---->renders(whole component)
    3. Unmounting (Death) : removing components from the DOM

Note: Components can get render multiple times.

(iii) Lifecycle Methods:
  1. Mounting:
    -componentDidMount()
    -useEffect() : with empty dependency array---->will work same as "componentDidMount()"
    -real-life example: api fetching

  2. Updating:
    -componentDidUpdate()
    -useEffect() : with states mentioned inside dependency array-->will work same as
                    componentDidUpdate()".
    -Logic depends upon the state updates
    -real-life example: password crises(after 3 attempts account got locked)

  3. Unmounting:
    -componentWillUnmount()
    -useEffect() :  return callback inside useEffect()
    -reset state value

Note: This three methods was used in class based components and we cannot use these directly in functional components.
For using these methods in functional components, we will use :
    -useEffect() hook


(iv) Note : First child component will get mounted then the parent will get mounted.

(v) Sharing data between the components:[Disadvantage of react]- From this we get to why we require "REDUX-state management tool"

##(Disadvantage):
-(1) Props-drilling: keep pushing/pass the states and states-handler to the descendent(childs) components again and again which requires it.
-[For this : there should be a central state(solution for the problem above)]
-(2) Lifting the states up : Lift states upto the components which requries it.


*/
