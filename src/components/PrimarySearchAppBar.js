import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { StaticImage } from "gatsby-plugin-image"
import ListItem from "@material-ui/core/ListItem"

import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import SearchIcon from "@material-ui/icons/Search"
import MoreIcon from "@material-ui/icons/MoreVert"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: 50
  },
  title: {
    // display: "none",
    fontStyle: "normal",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

const PrimarySearchAppBar = ({ pages, logo, siteName }) => {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }


  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }


  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages.map(({ name, link }) => (
        <MenuItem key={name}>
          <Link underline="none" style={{ color: "inherit" }} to={link}>
            {name}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            style={{ boxShadow: "none", padding: 0 }}
          >
            <Link to="/">
              
              
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: '100%'}} viewBox="320 220 640 800" class="animate">
              <g id="layer" class="svg-logo" transform-origin="center">
                  <g id="layer_v" class="animate-translate2top" transform="translate(0 -350)" >
                      <path id="v"
                          d="M829.52,662.38C823,813.75,750.46,948,640,1037.13,529.54,948,457,813.75,450.48,662.38a509.61,509.61,0,0,0-123.68,71.1C355.65,930.6,474.35,1098.55,640,1194.37c165.65-95.82,284.35-263.77,313.2-460.89A509.61,509.61,0,0,0,829.52,662.38Z">
                      </path>
                  </g>
                  <g id="layer_i_a" transform="translate(0 150)">
                      <g id="layer_i" class="animate-translate2bottom">
                          <path id="i" d="M640,420.53a388.17,388.17,0,0,1,0,438.94,388.17,388.17,0,0,1,0-438.94Z" />
                      </g>
                      <g id="layer_a" class="animate-translate2bottom">
                          <path id="a"
                              d="M450.48,662.38Q450,651.25,450,640c0-160.48,74.12-303.65,190-397.13C755.88,336.35,830,479.52,830,640q0,11.25-.48,22.38a509.61,509.61,0,0,1,123.68,71.1A644.65,644.65,0,0,0,960,640c0-236.89-128.71-443.71-320-554.37C448.71,196.29,320,403.11,320,640a644.65,644.65,0,0,0,6.8,93.48A509.61,509.61,0,0,1,450.48,662.38Z">
                          </path>
                      </g>
                  </g>
              </g>
            </svg>


            </Link>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {pages.map(({ name, path }) => (
              <ListItem key={name}>
                <Link underline="none" style={{ color: "inherit" }} to={path}>
                  {name}
                </Link>
              </ListItem>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  )
}

export default PrimarySearchAppBar
