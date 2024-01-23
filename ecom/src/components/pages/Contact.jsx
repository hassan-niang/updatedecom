import React from 'react'
import "../../Styles/contact.css"
const contact = () => {
  return (
    <>
      <section class="sec1" id="sec2"> 
            <div id="error2" class="error"></div>
            <form id="contact" >
                <h2> Are You Looking to Coustomized Any of Our Items? </h2>
                <h2>Connect With Us</h2>
                <ul>
                    <li>
                        <label for="emp_name"> Name </label> <br/>
                        <input type="text" id="emp_name" name="emp_name"/>
                    </li> 
                    <li>
                        <label for="emp_email"> Email </label> <br/>
                        <input type="text" id="emp_email" name="emp_email"/>
                    </li> 
                    <li>
                        <label for="emp_number">Phone Number</label> <br/>
                        <input type="text" id="emp_number" name="emp_number" placeholder="(123)-456-7890"/>
                    </li>
                    <li>
                        <label for="skill"> Comments </label> <br/>
                        <input type="text" id="skill" name="skill"/>
                    </li>
                </ul> 
                <button type="submit" >Submit</button>
            </form>
        </section>
    </>
  )
  }

export default contact
