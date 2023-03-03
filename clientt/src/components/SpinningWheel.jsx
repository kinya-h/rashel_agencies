import React, { useEffect, useContext, useState } from "react";
import "./spinningwheel.css";
import { UserContext } from "../UserContext";

const SpinningWheel = () => {
  const [win, setWin] = useState(0);

  const { getBalance, updateBalance } = useContext(UserContext);
  const [list, setList] = React.useState([
    "100",
    "-50",
    "20",
    "80",
    "1",
    "-100",
    "50",
    "0",
    "-80",
  ]);
  const [radius, setRadius] = React.useState(75);
  const [rotate, setRotate] = React.useState(0);
  const [easeOut, setEaseOut] = React.useState(0);
  const [angle, setAngle] = React.useState(0);
  const [top, setTop] = React.useState(null);
  const [offset, setOffset] = React.useState(null);
  const [net, setNet] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [spinning, setSpinning] = React.useState(false);

  useEffect(() => {
    renderWheel();
  }, []);

  const renderWheel = () => {
    let numOptions = list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    setAngle(arcSize);

    topPosition(numOptions, arcSize);

    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = list[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  };

  const topPosition = (num, angle) => {
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    setTop(topSpot - 1);
    setOffset(degreesOff);
  };

  const renderSector = (index, text, start, arc, color) => {
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, start, start + arc, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(index * arc - arc / 2 + offset) * textRadius,
      baseSize + Math.sin(index * arc - arc / 2 + offset) * textRadius
    );
    ctx.rotate(index * arc - arc / 2 + Math.PI / 2 + offset);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  const getColor = () => {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  };

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    setRotate(randomSpin);
    setEaseOut(2);
    setSpinning(true);

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

  const getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    setNet(netRotation);
    setResult(result);
    setWin(parseInt(list[result]));
  };

  const reset = () => {
    updateUserBalance();
    // reset wheel and result
    setRotate(0);
    setEaseOut(0);
    setResult(null);
    setSpinning(false);
  };

  const updateUserBalance = async () => {
    let balance = await getBalance();

    balance = parseInt(balance.data.balance);
    balance += win;

    updateBalance(balance);
  };

  return (
    <div className="w-full h-screen bg-primary">
      {/* #selector {
  position: absolute;
  top: 21vh;
  right: 47.5vw;
  font-size: 40px;
  z-index: 3;
} */}
      <span className="absolute z-3 font-2xl ml-60 mt-20" id="selector">
        &#9660;
      </span>
      <canvas
        id="wheel"
        width="500"
        height="500"
        style={{
          WebkitTransform: `rotate(${rotate}deg)`,
          WebkitTransition: `-webkit-transform ${easeOut}s ease-out`,
        }}
      />

      <div className="ml-48 mt-14">
        {spinning ? (
          <button
            className="bg-red-500 text-white  py-2 px-2 rounded-md"
            type="button"
            id="reset"
            onClick={reset}
          >
            Reset
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white  py-2 px-2 rounded-md"
            type="button"
            id="spin"
            onClick={spin}
          >
            Spin
          </button>
        )}
      </div>

      <div className="ml-40 mt-5 text-2xl font-bold text-lightgray">
        {spinning && result ? (
          <span id="readout">
            YOU WON:{"  "}
            <span id="result">{list[result]}</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SpinningWheel;
