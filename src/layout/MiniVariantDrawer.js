import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HomeIcon from "@mui/icons-material/Home";
import RemoveIcon from "@mui/icons-material/Remove";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ButtonBase, Container, Grid, ListItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Button } from "bootstrap";

const drawerWidth = 270;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(7),
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(8),
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  border: "5px solid gold ",
  display: "flex",
  marginTop: "30px",
  marginLeft: "19px",
  marginBottom: "10px",
  padding: theme.spacing(3, 0),
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `20px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  ...(open && {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
    },
  }),
  ...(!open && {
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8),
    },
    "& .MuiDrawer-paper": {
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
      },
    },
  }),
}));
export default function MiniDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(true);
  const [upgradeOpen, setUpgradeOpen] = React.useState(false);
  const [walletOpen, setWalletOpen] = React.useState(false);
  const [payoutOpen, setPayoutOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setUpgradeOpen(false);
    setWalletOpen(false);
    setPayoutOpen(false);
    setProfileOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickUpgrade = () => {
    setUpgradeOpen(!upgradeOpen);
    setAnchorEl(null);
    setWalletOpen(false);
    setPayoutOpen(false);
    setProfileOpen(false);
  };

  const handleClickWallet = () => {
    setWalletOpen(!walletOpen);
    setAnchorEl(null);
    setUpgradeOpen(false);
    setPayoutOpen(false);
    setProfileOpen(false);
  };
  const handleClickPayout = () => {
    setPayoutOpen(!payoutOpen);
    setAnchorEl(null);
    setUpgradeOpen(false);
    setWalletOpen(false);
    setProfileOpen(false);
  };
  const handleClickProfile = () => {
    setProfileOpen(!profileOpen);
    setAnchorEl(null);
    setUpgradeOpen(false);
    setWalletOpen(false);
    setPayoutOpen(false);
  };
  const handleCloseUpgrade = () => {
    setUpgradeOpen(false);
    setAnchorEl(null);
  };

  const handleCloseWallet = () => {
    setWalletOpen(false);
    setAnchorEl(null);
  };
  const handleClosePayout = () => {
    setWalletOpen(false);
    setAnchorEl(null);
  };
  const handleCloseProfile = () => {
    setProfileOpen(false);
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <CssBaseline />

      <AppBar
        position="absolute"
        open={open}
        sx={{
          backgroundColor: "white",
          width: "80%",
          height: "70px",
          mt: "30px",
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? `calc(${drawerWidth}px + 20px)` : 0,
        }}
      >
        <Toolbar sx={{}}>
          <IconButton
            color="black"
            aria-label={open ? "close drawer" : "open drawer"}
            onClick={handleDrawerToggle}
            sx={{
              marginRight: 1,
              border: "none",
              marginTop: "8px",
            }}
          >
            {open ? <MenuIcon /> : <ArrowForwardIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" anchor="left" open={open} sx={{ mt: "8px" }}>
        <DrawerHeader sx={{ margint: "10px", padding: "10px",border:"2px solid gold" }}>
          {open ? (
            <img
              alt="logo"
              src="https://firstmanefuel.in/user/assets/images/logo-dark.png"
              style={{
                width: "249px",
                height: "70px",
                mt: "10px",
              }}
            />
          ) : (
            <img
              alt="logo"
              src="https://firstmanefuel.in/user/assets/images/logo-sm.png"
              style={{
                width: "100px",
                height: "50px",
                mt: "10px",
              }}
            />
          )}
        </DrawerHeader>
        <Grid lg={4} sx={{ backgroundColor: "#3c6904", marginLeft: "20px" }}>
          <Typography
            sx={{
              textAlign: "start",
              padding: "5px",
              color: "grey",
            }}
            variant="h6"
            component="body1"
            textAlign={"start"}
            fontSize="15px"
          >
            Menu
          </Typography>
          <List>
            <ListItem
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              <ListItemButton
                sx={{
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: "white",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3c6904",
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: "30px",
                    color: "#3c6904",
                    fontSize: "14px",
                  }}
                >
                  Dashboard
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  My Team
                </ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Register
                </ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleClickUpgrade}
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <MedicalServicesIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Upgrade
                  <ArrowDropDownIcon />
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {upgradeOpen && (
              <>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Upgrade
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Upgrade List (Self)
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Upgrade List (Other)
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleClickWallet}
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Wallet
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {walletOpen && (
              <>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Wallet
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Request Wallet
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Request Wallet List
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleClickPayout}
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PaymentsIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Payout List
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {payoutOpen && (
              <>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> ROI Income
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Level Income
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
          <Typography
            sx={{
              textAlign: "start",
              padding: "5px",

              color: "grey",
            }}
            variant="h6"
            component="body1"
            textAlign={"start"}
            fontSize="15px"
          >
            Profile Info
          </Typography>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleClickProfile}
                sx={{
                  minHeight: 48,
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Profile
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {profileOpen && (
              <>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> View Profile
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <RemoveIcon /> Edit Profile
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <KeyIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,

                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Change Password
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  justifycontent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Logout
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Drawer>
    </Container>
  );
}
