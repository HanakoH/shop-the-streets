import React, { useEffect, useState }from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "./Typography";
import Checkbox from '@material-ui/core/Checkbox';
import { CardMedia } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Link from "@material-ui/core/Link"

const TruckCard = props => {
  const { name, website, summary, imageUrl, id } = props;
  const activeUser = +sessionStorage.getItem("activeUser")
  const [userSellers, setUserSellers] = useState([])
  const [checked, setChecked] = useState(false);

  const getUserSellers = () => {
    return fetch("http://localhost:8088/user_seller")
        .then(res => res.json())
        .then(all => all.filter(single => single.userId === activeUser ))
        .then(setUserSellers)
  }

  useEffect(() => {
    getUserSellers()
  },[])

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const existingLovedCheck = (loved) => {
    const sellerId = loved
    return fetch(`http://localhost:8088/user_seller?sellerId=${sellerId}`)
        .then(res => res.json())
        .then(sellerId => !!sellerId.length)
  }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const handleChange = async e => {
    await sleep(300)
    setChecked(!(e.target.checked));
    console.log(checked)
    const loved = e.target.value
    await existingLovedCheck(loved)
            .then((lovedExists) => {
              if (!lovedExists) {
                  fetch("http://localhost:8088/user_seller", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        userId: activeUser,
                        sellerId: id,
                      })
                  })  .then(_ => _.json())
                      .then(createdLove => {
                          if (createdLove.hasOwnProperty("id")) {
                              localStorage.setItem(`checkedBox${createdLove.sellerId}`, true)
                            }
                      })
              } else if(lovedExists){  
                  const singleUserSeller = userSellers.find(unLiked => {
                    console.log(unLiked.sellerId)
                    return unLiked.sellerId === +e.target.value
                  }) 
                  if (singleUserSeller) {
                    const {id} = singleUserSeller
                    fetch(`http://localhost:8088/user_seller/${id}`, {
                        method: "DELETE"
                  })} else {
                    console.log("Oh no")
                  }
              }
          })
  }

  return (
    <Card>
      <CardHeader
        action={
          <Checkbox 
            checked={checked}
            onClick={handleChange}
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            value={id}
            name="loveThis" 
          />
        }
        title={name}
        subheader={
          <Link onClick={() => openInNewTab(website)}>{website}</Link>
        }
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

