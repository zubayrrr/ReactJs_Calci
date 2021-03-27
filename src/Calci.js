import React, { useState } from "react";

const Calci = () => {
  var [inputValue, setInputValue] = useState("");
  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    // eslint-disable-next-line
    var ans = eval(inputValue);
    setInputValue(ans);
  }

  function clr() {
    setInputValue("");
  }

  return (
    <div className="container">
      <div className="row flex-center " style={{ marginTop: 100 }}>
        <input type="text" value={inputValue} />
        <button className="btn btn-danger" onClick={clr}>
          Clear
        </button>
      </div>
      <div className="row flex-end">
        <div className="col col-12">
          <div>
            <button
              onClick={() => {
                display("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                display("2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                display("3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                display("/");
              }}
              className="btn btn-primary"
            >
              /
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                display("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                display("5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                display("6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                display("+");
              }}
              className="btn btn-primary"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                display("7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                display("8");
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                display("9");
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                display("-");
              }}
              className="btn btn-primary"
            >
              -
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                display(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                display("0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                calculate();
              }}
              className="btn btn-success"
            >
              =
            </button>
            <button
              onClick={() => {
                display("*");
              }}
              className="btn btn-primary"
            >
              *
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calci;
