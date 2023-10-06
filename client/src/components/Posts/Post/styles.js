import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    boxShadow: "white 0px 0px 20px 0px",
  },
  overlay: {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "5px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    padding: "0 16px",
    fontFamily: "cursive",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  dialog: {
    "& .MuiDialog-paper": {
      borderRadius: "15px",
      backgroundColor: "#f5f5f5",
      boxShadow: "red 0px 0px 10px 0px",
      position: "fixed",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
});
