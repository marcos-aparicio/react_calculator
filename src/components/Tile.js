import { Grid, Paper } from "@mui/material";
import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

// const size = 20;

const Tile = (props) => {
  const { insertToken } = useContext(CalculatorContext);
  

  return (
    <Grid
      xs = {props.xs}
      item
      className={`tile ${props.className !== undefined ? props.className: ''} user-select-none`}
    >
      <Paper
      sx={[ tileStyles,props.sx ]}
      onClick={()=>{
        if(props.className === undefined) insertToken(props.token)
      }}
      >
      {props.token}
      </Paper>
    </Grid>
  );
};

let borderColor = "#2c2727";
let bgColor = "rgb(67, 62, 62)";
const tileStyles = {
  height:'100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `5px solid ${borderColor}`,
  backgroundColor: bgColor,
  fontSize:25,
  padding: 2.5,
  textAlign: "center",
  borderRadius: 5,
};

export default Tile;
