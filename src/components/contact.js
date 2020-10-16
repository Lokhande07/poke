import React from 'react'
import { ImPhone,ImLocation} from "react-icons/im";
import { MdEmail } from "react-icons/md";
const contact = () => {
    return(
    <div class="container">
     <h4 className="center">Contact Us</h4>
        <div ><MdEmail/> Email</div>
        <p1>shashanklokhande2@gmail.com</p1>
        <div ><ImPhone/> Phone</div>
        <p1>022-5438647</p1>
        <div ><ImLocation/> Address</div>
        <p1>421 camp road,Mumbai</p1>  
       
 <form>  <div class="con">
        <textarea name="text" placeholder="First Name" required></textarea>
        <textarea name="text" placeholder="Last Name" required></textarea>
        <textarea name="Email" placeholder="Email" required></textarea>
       <textarea name="message" placeholder="Message" required></textarea>
      <button class="submit" >Submit Message</button> 
</div>
    </form>

    </div>

    )
}

export default contact