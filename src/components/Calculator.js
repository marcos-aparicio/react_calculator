import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Tile from "./Tile";
import React, { useState } from "react";
import Stack from "../data_structures/Stack";

export const CalculatorContext = React.createContext();
const operationsRegex = /^(-|\+|\*|\/|÷|(mod))$/;

//flujo
// operationstack -> realOperationStack -> parsing

const Calculator = () => {
  const [operations, setOperations] = useState("");
  const [operationStack] = useState(new Stack());
  const [canInsertSymbol, setCanInsertSymbol] = useState(false);
  const [symbolToInsert, setSymbolToInsert] = useState("");

  const insertToken = (token) => {
    if (token === "clear") {
      setOperations("");
      return;
    }
    if (token === "=") {
      parse();
      return;
    }
    //handling two operations together (thrown an error)

    setOperations(operations + token);
    // let prevToken = operationStack.peek();

    // //first input
    // if (prevToken === null && /^\d+$/.test(token)) {
    //   operationStack.push(parseInt(token));
    //   setCanInsertSymbol(true);
    //   return;
    // }

    // if (typeof prevToken === "number" && /^\d+$/.test(token)) {
    //   prevToken = prevToken.toString() + token;
    //   operationStack.pop();
    //   operationStack.push(parseInt(prevToken));
    //   return;
    // }
    // if (typeof prevToken === "number" && !/^\d+$/.test(token)) {
    //   operationStack.push(token);
    //   return;
    // }
    // if (typeof prevToken === "string" && /^\d+$/.test(token)) {
    //   operationStack.push(parseInt(prevToken));
    //   return;
    // }
  };
  const parse = () => {
    let currOperations = operations;
    let matchNumberRgx = /^\d+/;
    let matchSymbolRgx = /^(x|\+|÷|mod|clear|-)/;
    let numberCount = 0;

    while (currOperations.length > 0) {

      let match = (currOperations.match(matchNumberRgx) !== null) ? parseInt(currOperations.match(matchNumberRgx)[0]) : currOperations.match(matchSymbolRgx)[0];


      let prevToken = operationStack.peek();

      if(prevToken === null && typeof(match) === 'number' || typeof(prevToken) === 'string'){
        operationStack.push(match[0]);
        numberCount++;
      }
      if(prevToken === null && typeof(match) === 'string') return;

      if(typeof(prevToken) === 'number' && numberCount === 1){
        operationStack.push(match[0]);
        numberCount = 0;
      }





      currOperations = currOperations.substring(
        match[0].length,
        currOperations.length
      );
    }
  };

  return (
    <CalculatorContext.Provider value={{ insertToken }}>
      <Box
        className="calculator"
        maxHeight="80vh"
        margin={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
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
            token={operations}
            sx={{
              // boxSizing:'content-box',
              justifyContent: "end",
              paddingTop: operations !== "" ? 0 : 2.5,
              paddingBottom: operations !== "" ? 0 : 2.5,
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
        <Grid
          className="operations"
          container
          flexGrow={1}
          height={sizeNum}
          spacing={1.5}
          width={sizeNum * 0.2}
        >
          <Tile token="clear" xs={12} />
          <Tile token="+" xs={12} />
          <Tile token="-" xs={12} />
          <Tile token="x" xs={12} />
          <Tile token="mod" xs={12} />
          <Tile token="÷" xs={12} />
        </Grid>
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
