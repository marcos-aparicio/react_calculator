import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Tile from "./Tile";
import React, { useState } from "react";
import Stack from "../data_structures/Stack";

export const CalculatorContext = React.createContext();


const Calculator = () => {
  const [operationOutput, setOperationOutput] = useState("");
  const [operationStack] = useState(new Stack());

  const operationFunctions = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    x: (num1, num2) => num1 * num2,
    "÷": (num1, num2) => num1 / num2,
    mod: (num1, num2) => num1 % num2,
  };
  //non operational scenarios
  const nonOperationFunctions = {
    "clear": ()=> setOperationOutput(""),
    "🡠": ()=> setOperationOutput(operationOutput.slice(0,-1)),
    "=":()=> parse(),
  }

  const insertToken = (token) => {
    
    const defaultScenario = () => setOperationOutput(operationOutput + token);

    const actualFunction = nonOperationFunctions[token] || defaultScenario;
    actualFunction();
  };
  const parse = () => {
    let currOperations = operationOutput;
    let matchNumberRgx = /^\d+/;
    let matchSymbolRgx = /^(x|\+|÷|mod|clear|-)/;
    let nextSymbol;

    //adding the tokens to the operation stack
    while (currOperations.length > 0) {
      let match =
        currOperations.match(matchNumberRgx) !== null
          ? parseInt(currOperations.match(matchNumberRgx)[0])
          : currOperations.match(matchSymbolRgx)[0];

      let matchLength =
        currOperations.match(matchNumberRgx) !== null
          ? currOperations.match(matchNumberRgx)[0].length
          : currOperations.match(matchSymbolRgx)[0].length;

      if (typeof match === "string") nextSymbol = match;

      if (typeof match === "number") {
        operationStack.push(match);
        if (nextSymbol !== undefined) operationStack.push(nextSymbol);
        nextSymbol = undefined;
      }

      currOperations = currOperations.substring(matchLength);
    }

    if (typeof operationStack.peek() === "number") {
      operationStack.deleteAll();
      return;
    }

    let output = 0;

    //actually calculating
    while (operationStack.size() !== 0) {
      let symbol = operationStack.pop();
      let num2 = operationStack.pop();
      let num1 = operationStack.pop();

      output += operationFunctions[symbol](num1, num2);
    }
    setOperationOutput(output.toString());
  };

  return (
    <CalculatorContext.Provider value={{ insertToken }}>
      <Box
        className="calculator"
        maxHeight="80vh"
        margin={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          // flexWrap: "wrap",
        }}
        gap={1.5}
      >
        <Grid
          className="numbers&equal&output"
          container
          spacing={1.5}
          sx={numStyles}
          flexGrow={1}
        >
          <Tile
            xs={12}
            className="output"
            token={operationOutput}
            sx={{
              // boxSizing:'content-box',
              justifyContent: "end",
              paddingTop: operationOutput !== "" ? 0 : 2.5,
              paddingBottom: operationOutput !== "" ? 0 : 2.5,
            }}
          />
          <Tile token="1" xs={4} />
          <Tile token="2" xs={4} />
          <Tile token="3" xs={4} />

          <Tile token="4" xs={4} />
          <Tile token="5" xs={4} />
          <Tile token="6" xs={4} />

          <Tile token="7" xs={4} />
          <Tile token="8" xs={4} />
          <Tile token="9" xs={4} />

          <Tile token="0" xs={6} />
          <Tile token="=" xs={6} />
        </Grid>
        <Box
          className="operations"
          flexGrow={1}
          height={sizeNum}
          spacing={1.5}
          width={sizeNum * 0.2}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            width:'50px',
            gap:'10px',
            flexWrap: 'wrap'
          }}
        >
          {
            //making the operations appear appear based on the functions
            Object.keys(nonOperationFunctions).concat(Object.keys(operationFunctions)).map(token => {

              if(token === "=") return null;

              return <Tile key={token} token={token} xs={12}></Tile>
            })
          }
        </Box>
      </Box>
    </CalculatorContext.Provider>
  );
};

const sizeNum = 600;
const numStyles = {
  height: sizeNum,
  width: sizeNum,
};

// const operStyles = {};

let borderColor = "#2c2727";
let bgColor = "rgb(67, 62, 62)";
const outputStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `5px solid ${borderColor}`,
  backgroundColor: bgColor,
  fontSize: 25,
  textAlign: "center",
  borderRadius: 5,
};
export default Calculator;
