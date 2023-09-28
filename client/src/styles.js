import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    boxShadow: "white 0px 0px 10px 0px",
  },
  heading: {
    color: "#69ACC2",
    fontFamily: "serif",
  },
  image: {
    marginLeft: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
