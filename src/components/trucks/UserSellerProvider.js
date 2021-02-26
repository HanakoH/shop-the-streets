import React, { useState, createContext } from "react"

export const UserSellerContext = createContext()

export const UserSellerProvider = (props) => {
    const [userSellers, setUserSellers] = useState([])
    const activeUser = +sessionStorage.getItem("activeUser")
    
    const addUserSeller = async (userSeller) => {
        const res = await fetch("http://localhost:8088/user_seller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userSeller)
        })
        const data = await res.json()

        setUserSellers([...userSellers, data])
    }

    const getUserSellers = async () => {
        const res = await fetch("http://localhost:8088/user_seller?_expand=seller")
        const data = await res.json()
        const filtered = await data.filter(single => single.userId === activeUser )
        setUserSellers(filtered)
    }

    const getUserSellerBySellerId = async (sellerId) => {
        const res = await fetch(`http://localhost:8088/user_seller?sellerId=${sellerId}`)
        const data = await res.json()
        const isSeller = (!!data.length)
        return [isSeller, data]
    }

    const deleteUserSeller = async (id) => {
        await fetch(`http://localhost:8088/user_seller/${id}`, {
            method: 'DELETE'
        })

        setUserSellers(userSellers.filter((userSeller) => userSeller.id !== id))
    }

    const updateUserSeller = async (userSeller) => {
        const userSellerId = userSeller.id
        const updatedUserSeller = !userSeller.checked
        const res = await fetch(`http://localhost:8088/user_seller/${userSellerId}`, {
            method: 'PATCH',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify({checked: updatedUserSeller})
        })

        const data = await res.json()

        setUserSellers(data)
    }
    
    
    return (
        <UserSellerContext.Provider value={{
            userSellers, addUserSeller, getUserSellers, getUserSellerBySellerId, deleteUserSeller, updateUserSeller
        }}>
            {props.children}
        </UserSellerContext.Provider>
    )
}