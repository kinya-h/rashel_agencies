import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import {MdLightMode,MdDarkMode,MdNotifications,MdSettings,MdPersonAddAlt1,MdSearch} from "react-icons/md";
import {BsWalletFill} from 'react-icons/bs';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <MdSearch />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <MdDarkMode />
          ) : (
            <MdLightMode />
          )}
        </IconButton>
        <IconButton>
          <BsWalletFill />
        </IconButton>
        <IconButton>
          <MdNotifications />
        </IconButton>
        <IconButton>
          <MdSettings />
        </IconButton>
        <IconButton>
          <MdPersonAddAlt1 />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
