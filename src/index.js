import ReactDOM from "react-dom";
import "./index.css";
import ListUsers from "./ListUsers";
import Profile from "./Profile";

function App() {
  return (
    <>
      <section>
        <h1 className="heading">Github Users API</h1>
        <Profile />
        <div className="userList">
          <ListUsers />
        </div>
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
