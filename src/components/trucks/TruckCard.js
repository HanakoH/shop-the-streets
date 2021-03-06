import React, { useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import {LoveCheckbox} from "../parts/LoveCheckbox";
import Typography from "../parts/Typography";
import Link from "@material-ui/core/Link"


export const TruckCard = props => {
  // const { name, website, summary, imageUrl, id } = props;
 
  const activeUser = +sessionStorage.getItem("activeUser")

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  return (
    <Card key={props.id}>
      <CardHeader
        title={props.name}
        subheader={
          <Link onClick={() => openInNewTab(props.website)}>{props.website}</Link>
        }
      />
      <CardMedia style={{ height: "150px" }} image={props.imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.summary}
        </Typography>
      </CardContent>
      {activeUser ? 
        (<LoveCheckbox key={props.userSellerId} id={props.userSellerId} sellerId={props.id} activeUser={activeUser} check={props.check}/>)
        : (<Link href="/register">Register to love this!</Link>)  
      }
    </Card>
  );
};