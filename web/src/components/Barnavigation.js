import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";

export default function BarNavigation({ activeMenu }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={activeMenu}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Servicios"
          icon={<HandshakeIcon />}
          onClick={() => navigate("/servicios")}
        />
        <BottomNavigationAction
          label="Presupuestos"
          icon={<CurrencyExchangeRoundedIcon />}
          onClick={() => navigate("/presupuestos")}
        />
        <BottomNavigationAction
          label="Salir"
          icon={<LogoutRoundedIcon />}
          onClick={() => navigate("/")}
        />
      </BottomNavigation>
    </Box>
  );
}
