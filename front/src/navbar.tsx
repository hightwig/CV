import React from "react";
import { useHistory } from "react-router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import JobSeekersTable from "./jobSeeker";
import AdsTable from "./advertise";
import axios from "axios";
import StickyFooter from "./footer";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  let history = useHistory();
  //React.useEffect(() => {}, []);
  /*axios
    .get("user")
    .then((res) => {
      console.log(res.data.statusCode);
      if (res.data.statusCode !== 200) {
        //history.push("/");
      }
    })
    .catch(() => {
      history.push("/");
    });*/
  const classes = useStyles();
  const [navBarState, setNavBarState] = React.useState<string>();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              setNavBarState("jobseek");
            }}
          >
            JobSeekers List
          </Button>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button
            onClick={() => {
              setNavBarState("Ads");
            }}
            color="inherit"
          >
            Advertise
          </Button>
        </Toolbar>
      </AppBar>
      {navBarState === "jobseek" ? (
        <JobSeekersTable></JobSeekersTable>
      ) : (
        <AdsTable></AdsTable>
      )}
      <StickyFooter></StickyFooter>
    </div>
  );
}
