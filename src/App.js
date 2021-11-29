import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

//1. To Do List
// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") return;
//     setToDo("");
//     setToDos((currentArray) => [toDo, ...currentArray]);
//   };
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//2. Coin Tracker
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [money, setMoney] = useState(0);

//   const onChange = (event) => setMoney(event.target.value);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <input
//         type="text"
//         placeholder="How much do you have?"
//         onChange={onChange}
//       />{" "}
//       USD
//       <ul>
//         {coins.map((coin, index) => (
//           <li key={index}>
//             {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD{" "}
//             {money > 0
//               ? `= ${money / coin.quotes.USD.price} ${coin.symbol}`
//               : null}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//3. Movie app
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
