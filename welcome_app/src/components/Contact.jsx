import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
    <div style={{textAlign:'center'}}><h1 className='head'>Contact Us</h1>
    <p className='subHead' style={{textAlign:'center'}}>We all need people who will give us feedback. That’s how we improve</p>
    </div>

   <div className="row">
    <div className="col">
        <img src="undraw.svg" alt="logo" />
    </div>
    <div className="col">
    <form action="">
        <label htmlFor="">First Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Last Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Mobile</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <div class="mb-3">
            <label for="" class="form-label">City</label>
            <select name="" id="">
                <option selected>Select one</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
            </select>
        </div> 
        <div class="mb-3">
            <label for="" class="form-label">Country</label>
            <select name="" id="">
                <option selected>Select one</option>
                <option value="China">China</option>
                <option value="America">America</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                <option value="Pakisthan">Pakisthan</option>
            </select>
        </div>  
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'170px'}}></textarea>
        <input type="submit" value="Submit"/>

    </form>
    </div>
   </div>
    
    </div>
  )
}

export default Contact