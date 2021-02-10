// import React, { useState, createContext } from "react"

// export const UserSellerContext = createContext()


// export const UserSeller = (props) => {
//     const [userSellers, setUserSellers] = useState([])
//     const activeUser = +sessionStorage.getItem("activeUser")
    
//     const addUserSeller = (userSeller) => {
//         return fetch("http://localhost:8088/user_seller", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(userSeller)
//         })
//         .then(response => response.json())
//     }

//     const getUserSellers = () => {
//         return fetch("http://localhost:8088/user_seller")
//             .then(res => res.json())
//             .then(all => all.filter(single => single.userId === activeUser ))
//             .then(setUserSellers)
//     }

//     const getUserSellerById = (id) => {
//         return fetch(`http://localhost:8088/user_seller/${id}`)
//             .then(res => res.json())
//     }
    
//     return (
//         <UserSellerContext.Provider value={{
//             userSellers, addUserSeller, getUserSellers, getUserSellerById
//         }}>
//             {props.children}
//         </UserSellerContext.Provider>
//     )
// }