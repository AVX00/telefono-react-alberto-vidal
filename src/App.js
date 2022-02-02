import { useContext } from "react";
import PhoneContext from "./contexts/phoneContext/phoneContext";

function App() {
  const value = useContext(PhoneContext);
  return (
    <>
      <span className="message">Calling...{value}</span>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
          </ol>
        </div>
        <div className="actions">
          <span className="number">667359961</span>
          <a href="call" className="call">
            Call
          </a>
          <a href="hang" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </>
  );
}
export default App;
