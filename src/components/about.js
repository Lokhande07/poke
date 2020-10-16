import React from 'react'
import home from '../home.png'
import hhome from '../hhome.png'
import rest from '../rest.png'
const about = () => {
    return(
    <div className="container"> 
        <h4 className="center">About</h4>
        <form>
    <img src={ hhome } alt="home pic " height="200" width="200" />
    <img src={ home } alt="home pic " height="200" width="200"  />
    <img src={ rest } alt="home pic " height="200" width="200" />
    </form>
        
        <p style={{color: "white"}}>Hostels aapki jimedari hamari.......
Coacco nhi kiya kya!!!!!!!
Coacco is providing free digital promotions and advertisements on your behalf. We are certainly fulfilling the deeds and needs of owners to connect them with the quality of students they desire for. Its been hard time for everyone in pandemic so coacco has took the initiative to promote your hostels and pg on broad platform among students.
Please register with as soon as possible.
Jab coacco hai sath toh darne ki kya hai baat!!!!!!
Go further grow better....
Growing as a firm creating wholesome as a family.</p>
    </div>

    )
}

export default about