import React from "react";
import RequiresArray from "./components/RequiresArray";
import ReactDOM from "react-dom";
// import Card from "./components/Card";
// import CardTitle from "./components/CardTitle";
import VladsButtonWrapper from "./components/VladsButtonWrapper";
import useClicker from "./hooks/useClicker";
import "./styles.css";

// function Business(props) {
//   function handleButtonClick(name) {
//     console.log(name, " - Vlad's Button");
//   }

//   return (
//     <div className="col-4">
//       <Card style={{ width: "18rem" }}>
//         <img className="card-img-top" src={props.img} />
//         <div className="card-body">
//           <CardTitle name={props.name} onButtonClick={handleButtonClick} />
//           <p className="card-text">{props.children}</p>
//           {/* <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a> */}
//         </div>
//       </Card>
//     </div>
//   );
// }

function ChildComponent({ click }) {
  return (
    <VladsButtonWrapper
      onIncrement={() => click(1)}
      onDecrement={() => click(-1)}
    />
  );
}

function App() {
  const { timesClicked, click } = useClicker();
  return (
    <div className="row">
      <h1>Times Clicked: {timesClicked}</h1>
      <RequiresArray />
      <div>
        <ChildComponent click={click} />
        <VladsButtonWrapper
          onIncrement={() => click(5)}
          onDecrement={() => click(-5)}
        />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
