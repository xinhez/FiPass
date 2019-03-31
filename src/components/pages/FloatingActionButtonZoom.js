import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PositionCard from "./PositionCard.js";
import logo from "../test-img/test-logo.jpg";
import linkImg from "../test-img/link.png";
import locationImg from "../test-img/location.png";
import heart from "../test-img/heart.png";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "60%",
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    },
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "20px",
    "line-height": "normal",
    color: "#333333"
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "300",
    "font-size": "28px",
    "line-height": "25px",
    color: "#000000"
  }
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderPositions(positions) {
    console.log("positions:", positions);
    const { classes } = this.props;
    const listItems = positions.map(position =>
      this.renderPositionCard(
        position.id,
        position.name,
        position.location,
        position.description,
        position.percent
      )
    );
    return (
      <ul className={classes.ulmargin}>
        <PerfectScrollbar>{listItems}</PerfectScrollbar>
      </ul>
    );
  }

  renderPositionCard(id_, name_, location_, description_, percent_) {
    console.log("renderPositionCard", this.props);
    return (
      // <ButtonBase onClick={(e) => this.handleClick(id_, e)}>
      <PositionCard
        key={id_}
        id={id_}
        company_id={this.props.company_id}
        imgSrc={logo}
        heartSrc={heart}
        name={name_}
        location={location_}
        locationImg={locationImg}
        description={description_}
        likePosition={this.props.likePosition}
        percent={percent_}
      />
      // </ButtonBase>
    );
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // const { position } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="About"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Postion"
          />
        </Tabs>
        {value == 0 && (
          <Typography className={classes.typography}>
            Ant Design UI powered by Material-UI
          </Typography>
        )}

        {value == 1 && this.renderPositions(this.props.positions)}
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtonZoom);

// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import SwipeableViews from "react-swipeable-views";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Zoom from "@material-ui/core/Zoom";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
// import UpIcon from "@material-ui/icons/KeyboardArrowUp";
// import green from "@material-ui/core/colors/green";

// function TabContainer(props) {
//   const { children, dir } = props;

//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//       {children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired
// };

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     position: "relative",
//     minHeight: 200
//   },
//   fab: {
//     position: "absolute",
//     bottom: theme.spacing.unit * 2,
//     right: theme.spacing.unit * 2
//   },
//   fabGreen: {
//     color: theme.palette.common.white,
//     backgroundColor: green[500],
//     "&:hover": {
//       backgroundColor: green[600]
//     }
//   }
// });

// class FloatingActionButtonZoom extends React.Component {
//   state = {
//     value: 0
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   handleChangeIndex = index => {
//     this.setState({ value: index });
//   };

//   render() {
//     const { classes, theme } = this.props;
//     const transitionDuration = {
//       enter: theme.transitions.duration.enteringScreen,
//       exit: theme.transitions.duration.leavingScreen
//     };

//     const fabs = [
//       {
//         color: "primary",
//         className: classes.fab
//         // icon: <AddIcon />,
//       },
//       {
//         color: "secondary",
//         className: classes.fab
//         // icon: <EditIcon />,
//       },
//       {
//         color: "inherit",
//         className: classNames(classes.fab, classes.fabGreen),
//         icon: <UpIcon />
//       }
//     ];

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="fullWidth"
//           >
//             <Tab label="About" />
//             <Tab label="Postion" />
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={this.state.value}
//           onChangeIndex={this.handleChangeIndex}
//         >
//           <TabContainer dir={theme.direction}>About</TabContainer>
//           <TabContainer dir={theme.direction}>Postion</TabContainer>
//         </SwipeableViews>
//       </div>
//     );
//   }
// }

// FloatingActionButtonZoom.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(
//   FloatingActionButtonZoom
// );
