import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "white 0px 0px 10px 0px",
  },
  heading: {
    fontFamily: "serif",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    letterSpacing: "3px",
    fontSize: "2.5rem",
    textTransform: "uppercase",
    WebkitTextFillColor: "transparent",
    padding: "10px 0",
    background: "linear-gradient(to right, #AED5C7, #5D6D7E)",
    WebkitBackgroundClip: "text",
  },
  image: {
    marginLeft: "15px",
    marginRight: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
