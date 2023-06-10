import React from "react";

const Form = ({ state, setState }) => {
  const calculateBMI = (height, weight) => {
    let bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(2);
    return bmi;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = calculateBMI(state.height, state.weight);
    setState({ ...state, result: result });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          name="height"
          type="text"
          className="form-control"
          placeholder="cm"
          onChange={(e) => setState({ ...state, height: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          name="weight"
          type="text"
          className="form-control"
          placeholder="kg"
          onChange={(e) => setState({ ...state, weight: e.target.value })}
        />
      </div>

      <button className="btn btn-success w-100" type="submit">
        Calculate
      </button>
    </form>
  );
};

export default Form;
