import ReactDOM from "react-dom";
import "./index.css";
import ListUsers from "./ListUsers";
import Profile from "./Profile";
import api from "./api";

function App() {
  return (
    <>
      <section>
        <h1 className="heading">Github Users API</h1>
        <Profile api={api.umeshmk} />
        <div className="userList">
          <ListUsers api={api.all_users} />
        </div>
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
