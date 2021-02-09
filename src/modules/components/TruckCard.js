import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "./Typography";
// import Button from "./Button";
import Checkbox from '@material-ui/core/Checkbox';
import { CardMedia } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const TruckCard = props => {
  const { name, website, summary, imageUrl } = props;
  return (
    <Card>
      <CardHeader
        action={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="loveThis" />
        }
        title={name}
        subheader={website}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TruckCard;