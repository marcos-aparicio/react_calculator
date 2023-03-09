import { Box } from "@mui/system";
import { Grid, Typography, Toolbar } from "@mui/material";
import Tile from "./Tile";

const Calculator = () => {

  return (
    <Box className="calculator" maxHeight="80vh" margin={2} sx={{
      display:'flex',
      flexDirection:"row",
    }}
    gap={1.5}>
      <Grid container className="numbers&equal" spacing={1.5} sx={numStyles} flexGrow={5}>
        <Tile token="1" xs={4}/>
        <Tile token="2" xs={4}/>
        <Tile token="3" xs={4}/>
        <Tile token="4" xs={4}/>
        <Tile token="5" xs={4}/>
        <Tile token="6" xs={4}/>
        <Tile token="7" xs={4}/>
        <Tile token="8" xs={4}/>
        <Tile token="9" xs={4}/>
        <Tile token="0" xs={6}/>
        <Tile token="=" xs={6}/>
      </Grid>
      <Grid container className="operations" flexGrow={1} height={sizeNum} spacing={1.5} width={sizeNum*.2}>
        <Tile token="+" xs={12}/>
        <Tile token="-" xs={12}/>
        <Tile token="x" xs={12}/>
        <Tile token="mod" xs={12}/>
        <Tile token="÷" xs={12}/>
      </Grid>
    </Box>
  );
};

const sizeNum = 600;
const numStyles = {
  height:sizeNum,
  width:sizeNum,
}

const operStyles = {

}



export default Calculator;
