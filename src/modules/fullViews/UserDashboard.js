import { React } from "react";
import Typography from "../components/Typography";
import AppBarNav from "../partView/AppBarNav";

export const UserDashboard = () => {
    return (
      <>
        <AppBarNav />
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Dashboard
        </Typography>
      </>
    )
}