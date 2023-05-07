import { cardStyle } from "../components/userListItemStyles";

export const tweetCardStyle = {
  ...cardStyle,
  flexGrow: "1",
  height: "100%",
  background:
    "linear-gradient(114.99deg, #dbd9df -0.99%, #afafb1 54.28%, #bab8c1 78.99%)",
};

export const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
};

export const LinkBoxStyle = {
  height: "50px",
  width: "196px",
  lineHeight: "1.2",
  transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",

  borderRadius: "18px",
  fontSize: "22px",
  fontWeight: "600",
  bg: "#5CD3A8",
  boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",

  color: "#fff",
  fontFamily: "Montserrat",

  padding: "14px 15px",

  display: "block",
  justifyContent: "center",
  alignItems: "center",
};
