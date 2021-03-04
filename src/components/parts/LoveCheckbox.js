import React, { useState, useContext, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { UserSellerContext } from '../trucks/UserSellerProvider';

export const LoveCheckbox = ({activeUser, id, check}) => {
    const { addUserSeller, getUserSellers, getUserSellerBySellerId, updateUserSeller} = useContext(UserSellerContext)
    const [checked, setChecked] = useState(check);

    useEffect(() => {
      getUserSellers()
    }, [])

    const handleChange = async (e) => {
      const loved = e.target.value
      const truckToLove = await getUserSellerBySellerId(loved)
      console.log(truckToLove)
      if (!truckToLove) {
        addUserSeller({
          userId: activeUser,
          sellerId: +id,
          checked: true,
        })
        getUserSellers()
        setChecked(true)
      } else if(truckToLove.checked === true) {
        updateUserSeller(truckToLove)
        setChecked(false)
      } else {
        updateUserSeller(truckToLove)
        setChecked(true)
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