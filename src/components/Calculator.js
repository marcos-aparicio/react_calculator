import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Tile from "./Tile";
import { useContext } from "react";

const Calculator = () => {
  return (
    <Box
      className="calculator"
      maxHeight="80vh"
      margin={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap:'wrap'
      }}
      gap={1.5}
    >
      <Box className="output"
      sx={outputStyles}
      >
      hello world
      </Box>
      <Grid className="numbers&equal"
        container
        spacing={1.5}
        sx={numStyles}
        flexGrow={1}
        // flexBasis={300}
      >
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
      <Grid className="operations"
        container
        flexGrow={1}
        height={sizeNum}
        spacing={1.5}
        width={sizeNum * 0.2}
      >
        <Tile token="+" xs={12} />
        <Tile token="-" xs={12} />
        <Tile token="x" xs={12} />
        <Tile token="mod" xs={12} />
        <Tile token="÷" xs={12} />
      </Grid>
    </Box>
  );
};

const sizeNum = 600;
const numStyles = {
  height: sizeNum,
  width: sizeNum,
};

const operStyles = {};

const outputStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor:"rgb(67, 62, 62)",
  alignItems: "center",
  fontSize:25,
  padding: 2.5,
  textAlign: "center",
  borderRadius: 5,
};

export default Calculator;
