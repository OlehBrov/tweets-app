export const cardStyle = {
  display: "flex",
  flexDirection: "column",
  width: "380px",
  height: "460px",
  background:
    "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
  boxShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
  borderRadius: "20px",
};

export const LineStyle = {
  marginTop: "18px",
  width: "380px",
  height: "8px",
  marginLeft: "-20px",
  background: "#EBD8FF",
  boxShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
};

export const ImageWrapStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#EBD8FF",
  boxShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export const ImageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const TextStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "24px",
  textTransform: "uppercase",
  color: "#EBD8FF",
};

export const TextAlign = {
  marginTop: "62px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const ButtonStyle = {
  width: "196px",
  height: "50px",
  marginTop: "26px",
  borderRadius: "10px",
  ...TextStyle,
  color: "#373737",
};
