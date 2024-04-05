import { useState } from "react";
export function Questions(props) {
  const [answers, setAnswers] = useState([]);

  function handelChange(e) {
    setAnswers([...answers, e.target.value]);
  }
  function handleSubmit() {
    const yesCount = answers.filter((answer) => answer === "yes").length;
    const noCount = answers.filter((answer) => answer === "no").length;
    const avg = (yesCount * 100) / 5;
    props.fun(avg);
    // setAnswers([]);
  }

  return (
    <div>
      <h1>Questions</h1>
      <div className="q1">
        <label htmlFor="Q1">Can you code in Ruby?</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q1"
          id="q1_yes"
          value="yes"
        />
        <label htmlFor="q1_yes">Yes</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q1"
          id="q1_no"
          value="no"
        />
        <label htmlFor="q1_no">No</label>
      </div>
      <div className="q2">
        <label htmlFor="Q2">Can you code in JavaScript?</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q2"
          id="q2_yes"
          value="yes"
        />
        <label htmlFor="q2_yes">Yes</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q2"
          id="q2_no"
          value="no"
        />
        <label htmlFor="q2_no">No</label>
      </div>
      <div className="q3">
        <label htmlFor="Q3">Can you code in Swift?</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q3"
          id="q3_yes"
          value="yes"
        />
        <label htmlFor="q3_yes">Yes</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q3"
          id="q3_no"
          value="no"
        />
        <label htmlFor="q3_no">No</label>
      </div>
      <div className="q4">
        <label htmlFor="Q4">Can you code in Java?</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q4"
          id="q4_yes"
          value="yes"
        />
        <label htmlFor="q4_yes">Yes</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q4"
          id="q4_no"
          value="no"
        />
        <label htmlFor="q4_no">No</label>
      </div>

      <div className="q5">
        <label htmlFor="Q5">Can you code in C#?</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q5"
          id="q5_yes"
          value="yes"
        />
        <label htmlFor="q5_yes">Yes</label>
        <input
          type="radio"
          onChange={handelChange}
          name="q5"
          id="q5_no"
          value="no"
        />
        <label htmlFor="q5_no">No</label>
      </div>
      <button onClick={handleSubmit}>Submit answer</button>
    </div>
  );
}
