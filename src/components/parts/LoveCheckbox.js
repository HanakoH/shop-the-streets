import React, { useState, useContext, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { UserSellerContext } from '../trucks/UserSellerProvider';

export const LoveCheckbox = ({activeUser, id, check, sellerId}) => {
    const { addUserSeller, getUserSellers, getUserSellerBySellerId, deleteUserSeller} = useContext(UserSellerContext)
    const [checked, setChecked] = useState(check);

    useEffect(() => {
      getUserSellers()
    }, [])
     
    const handleChange = async (e) => {
      e.preventDefault()
      const loved = e.target.value
      let truckToLove = ""

        if(loved){
          truckToLove = await getUserSellerBySellerId(loved)
            deleteUserSeller(id)
            getUserSellers()
            setChecked(false)
        } else {
            addUserSeller({
              userId: activeUser,
              sellerId: +sellerId
            })
            getUserSellers()
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
        />
      </>
    )    
}