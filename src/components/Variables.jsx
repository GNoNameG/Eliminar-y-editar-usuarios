import React from 'react'

const Variables = () => {
  const texto1="Buenas noches"
  let texto2="¿Como estás?"
const url= "https://www.gamingcoffee.com/wp-content/uploads/2022/10/Silent-Hill-2-Remake-port.jpg"
    return (
        <>
        <p>Variables en jsx, {texto1} {texto2}</p>
        <img src={url} alt="hight school"/>    
        </>
  )
}
export default Variables;