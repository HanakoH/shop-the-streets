import React, { useState, useContext, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { UserSellerContext } from '../trucks/UserSellerProvider';

export const LoveCheckbox = ({activeUser, id}) => {
    const {userSellers, addUserSeller, getUserSellers, getUserSellerBySellerId, updateUserSeller} = useContext(UserSellerContext)
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      getUserSellers()
    }, [])

    const handleChange = async (e) => {
      const loved = e.target.value
      const truckToLove = await getUserSellerBySellerId(loved)
  
      if (!truckToLove[0]) {
        addUserSeller({
          userId: activeUser,
          sellerId: +id,
          checked: true,
        })
        setChecked(true)
      } else {
        let truckToLoveId = truckToLove[1]
        console.log(truckToLoveId[0])
        updateUserSeller(truckToLoveId[0])
        setChecked(false)
      }
    }
        
    const isChecked = async () => {
      if (userSellers[0].userId === activeUser && userSellers[0].sellerId === id) {
        setChecked(true)
      } else {
        setChecked(false)
      }
    }

    return (
      <>
        <Checkbox 
            checked={checked}            
            onClick={handleChange}
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />} 
            value={id}
            name="loveThis" 
        />
      </>
    )    
}