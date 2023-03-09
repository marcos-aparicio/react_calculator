import { Box } from "@mui/system";
import { Grid, Typography, Toolbar } from "@mui/material";
import "./App.css";
import CalculateIcon from '@mui/icons-material/Calculate';
import Calculator from "./components/Calculator";


function App() {
  return (
    <Box className="body">
      <Toolbar className="header" variant="navbar" sx={{ justifyContent: "center", padding: 2 }}>
        <CalculateIcon fontSize="large"/>
        <Typography variant="h4" marginLeft={5}>React Calculator App</Typography>
      </Toolbar>
      <Box className="main" justifyContent="center">
        <Calculator />
      </Box>
    </Box>
  );
}
export default App;