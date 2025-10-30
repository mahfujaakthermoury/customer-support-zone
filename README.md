1. What is JSX, and why is it used?
Ans: JSX or JavaScript XML is an extension to javascript syntax. It allow writing code that look similar HTML, and it is a special syntex used in React to simplify building user interface. JSX makes easierr to write and add HTML in React.

2. What is the difference between State and Props?
Ans: The main difference between State and Props is that the Props are passed the data from a component to a child, while State is used to manage the component's own local data.

3. What is the useState hook, and how does it work?
Ans: The useState hook is a React function that add a state variable to a  functinal components. The useState() hook takes in the initial value of the state variable as an argument and provides us with the state variable and the setter function.

4. How can you share state between components in React?
Ans: Move state to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”.
 
function App(){
    const [data, setData] = useState("Start);

    return(
        <Count data={data} setData={setData}></Count>
    )
}


const Count = ({data, setData}) =>{

    return(
        <div>
        <button onClick={()=> setData("Add more")} >Add more </button>
        </div>
    )
}


5.How is event handling done in React?
Ans: Event handling in React is done using function that respond to user actions. Event are written in camelcase, example- hendleClick.