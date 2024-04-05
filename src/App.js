import { useState } from "react";
import { Questions } from "./Questions";
import "./styles.css";
//   1: "Can you code in Ruby?",
//     2: "Can you code in JavaScript?",
//     3: "Can you code in Swift?",
//     4: "Can you code in Java?",
//     5: "Can you code in C#?"

export default function App() {
  const [avg, setAvg] = useState();
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [userScore, setUserScore] = useState([]);
  const [total, setTotal] = useState();
  function getAvg(answers) {
    setAvg(answers);
    setUserScore([...userScore, { [users[users.length - 1]]: answers }]);
    setTimeout(() => {
      setUser([]);
      setAvg(null);
    }, 5000);
  }
  const totalscore =
    userScore.reduce((total, current) => {
      console.log(current, total);
      return total + current.user;
    }, 0) / users.length;

  console.log(userScore);

  function handelSetUser() {
    // setUser([]);
    console.log(user);
    if (user.length > 0) {
      setUsers([]);
    }
    setUser(["user"]);

    setUsers([...users, "user"]);
  }
  return (
    <div className="App">
      <button onClick={handelSetUser}>Start Test</button>

      {user &&
        user
          .filter((use, index) => {
            console.log(index, user.length - 1);
            return index === user.length - 1;
          })
          .map(() => {
            return <Questions fun={getAvg} />;
          })}

      {avg && <h1>{avg}</h1>}
      {totalscore && <h1>avarage score:{totalscore}</h1>}
    </div>
  );
}
