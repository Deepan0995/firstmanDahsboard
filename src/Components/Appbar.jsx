import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import avatar from "../images/avatar.svg";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Notes } from "@mui/icons-material";

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
import { Avatar, Grid, ListItem, Menu, Stack } from "@mui/material";

import Home from "./Home";
import MyTeam from "./MyTeam";
import Register from "./Register";
import MenuListComposition from "./MenuListComposition";
import Leveltable from "./Leveltable";

const drawerWidth = 250;
// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });
// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: theme.spacing(7),
//   [theme.breakpoints.up("sm")]: {
//     width: theme.spacing(8),
//   },
// });
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // justifyContent: "flex-end",
  // height: "50%",
  padding: 4,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: "fixed", // Set the position to fixed
  width: `calc(100% - ${drawerWidth}px)`, // Adjust width based on drawer width
  marginLeft: `${drawerWidth}px`, // Adjust margin left based on drawer width
  ...(open && {
    marginLeft: `calc(100% - ${drawerWidth}px)`, // Adjust margin left when drawer is open
    width: `calc(80% - ${drawerWidth}px)`, // Adjust width when drawer is open
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "fixed", // Fix the position of the drawer
  // Align the drawer to the top of the viewport
  height: "80%",
  // Set the height of the drawer to fill the viewport
  // paddingLeft:'20px',
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
      overflow: "hidden",
    },
  }),
}));
export default function Appbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(true);
  const [upgradeOpen, setUpgradeOpen] = React.useState(false);
  const [walletOpen, setWalletOpen] = React.useState(false);
  const [payoutOpen, setPayoutOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(null);

  const navigate = useNavigate();
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setUpgradeOpen(false); // Close the upgrade list if it was open
  //   setWalletOpen(false);
  //   setPayoutOpen(false);
  //   setProfileOpen(false); // Close the wallet list if it was open
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const handleProfileClick = (event) => {
    setProfileMenu(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileMenu(null);
  };
  const handleClickUpgrade = () => {
    setUpgradeOpen(!upgradeOpen);
    setAnchorEl(null); // Close the anchor if it was open
    setWalletOpen(false);
    setPayoutOpen(false);
    setProfileOpen(false); // Close the wallet list if it was open
  };

  const handleClickWallet = () => {
    setWalletOpen(!walletOpen);
    setAnchorEl(null); // Close the anchor if it was open
    setUpgradeOpen(false);
    setPayoutOpen(false);
    setProfileOpen(false); // Close the upgrade list if it was open
  };
  const handleClickPayout = () => {
    setPayoutOpen(!payoutOpen);
    setAnchorEl(null); // Close the anchor if it was open
    setUpgradeOpen(false);
    setWalletOpen(false);
    setProfileOpen(false); // Close the upgrade list if it was open
  };
  const handleClickProfile = () => {
    setProfileOpen(!profileOpen);
    setAnchorEl(null); // Close the anchor if it was open
    setUpgradeOpen(false);
    setWalletOpen(false);
    setPayoutOpen(false); // Close the upgrade list if it was open
  };
  // const handleCloseUpgrade = () => {
  //   setUpgradeOpen(false);
  //   setAnchorEl(null);
  // };

  // const handleCloseWallet = () => {
  //   setWalletOpen(false);
  //   setAnchorEl(null);
  // };
  // const handleClosePayout = () => {
  //   setWalletOpen(false);
  //   setAnchorEl(null);
  // };
  // const handleCloseProfile = () => {
  //   setProfileOpen(false);
  //   setAnchorEl(null);
  // };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
      {/* <Grid container spacing={2}>
        <Grid item> */}
      <AppBar
        position="absolute"
        open={open}
        sx={{
          backgroundColor: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: open ? `calc(94% - ${drawerWidth}px)` : "90%", // Adjust width based on drawer state
          marginLeft: open ? `${drawerWidth}px` : 0, // Shift content when drawer is open
          margin: 4,
          height: "64px",
          borderRadius: 0.5,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid item>
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
              {open ? <Notes /> : <ArrowForwardIcon />}
            </IconButton>
          </Grid>

          <Grid
            item
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            bgcolor="#e8eaf6"
            mr={3}
          >
            <Grid item m={1}>
              <Avatar src={avatar} onClick={handleProfileClick} />
              <Menu
                id="simple-menu"
                anchorEl={profileMenu}
                keepMounted
                open={Boolean(profileMenu)}
                onClose={handleProfileClose}
                style={{
                  position: "absolute",
                  willChange: "transform",
                  top: "20px",
                  left: "100px",
                  transform: "translate3d(-104px, 10px,0px)",
                }}
              >
                <MenuItem>Welcome HC Sankara Raman S</MenuItem>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item m={1}>
              <Typography color={"#000000"}>HC Sankara Raman S</Typography>
              <Typography color={"#bdbdbd"}>EF177448</Typography>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{ overflow: "hidden" }}
      >
        <DrawerHeader sx={{ mt: 3 }}>
          {open ? (
            <img
              alt="logo"
              src="https://firstmanefuel.in/user/assets/images/logo-dark.png"
              style={{
                width: "230px",
                height: "80px",
              }}
            />
          ) : (
            <img
              alt="logo"
              src="https://firstmanefuel.in/user/assets/images/logo-sm.png"
              style={{
                width: "100px",
                height: "50px",
              }}
            />
          )}
        </DrawerHeader>
        <Grid lg={4} sx={{ backgroundColor: "#3c6904", height: "100vh" }}>
          {open && (
            <Typography
              sx={{
                textAlign: "start",
                padding: "5px",
                color: "grey",
              }}
              component="body1"
              textAlign={"start"}
              fontSize="15px"
            >
              Menu
            </Typography>
          )}
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
                onClick={() => {
                  navigate("/home");
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
                  px: 2.5,
                }}
                onClick={() => {
                  navigate("/myteam");
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
                    fontSize: "30px",
                    color: "white",
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
                onClick={() => {
                  navigate("/register");
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
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  Register
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
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  Upgrade
                </ListItemText>
              </ListItemButton>
            </ListItem>

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
                    fontSize: "30px",
                    color: "white",
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
                      minHeight: 7,
                      justifycontent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,
                        fontSize: "20px",
                        color: "white",
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
                        fontSize: "20px",
                        color: "white",
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
                        fontSize: "20px",
                        color: "white",
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
                    fontSize: "30px",
                    color: "white",
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
                    onClick={() => {
                      navigate("/leveltable");
                    }}
                  >
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,
                        fontSize: "20px",
                        color: "white",
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
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      <RemoveIcon /> Level Income
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
          {open && (
            <Typography
              sx={{
                textAlign: "start",

                color: "grey",
              }}
              component="body1"
              textAlign={"start"}
              fontSize="15px"
            >
              Profile Info
            </Typography>
          )}
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
                    fontSize: "30px",
                    color: "white",
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
                        fontSize: "20px",
                        color: "white",
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
                        fontSize: "20px",
                        color: "white",
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
                    fontSize: "30px",
                    color: "white",
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
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  Logout
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Drawer>
      <DrawerHeader />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 12,
          marginLeft: open ? `${drawerWidth}px` : 0,
          transition: "margin-left 0.2s ease",
        }}
      >
        <DrawerHeader />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menulist" element={<MenuListComposition />} />
          <Route path="/leveltable" element={<Leveltable />} />
        </Routes>
      </Box>
      {/* </Grid>
      </Grid> */}
    </div>
  );
}
