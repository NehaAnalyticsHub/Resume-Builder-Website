import React, { useState } from "react";

const Contact=()=>{

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent=(event)=>
    {
      const {name,value}=event.target;
      setData((preval)=>{
        return{
            ...preval,
            [name]:value,
        };
      });
    };

    const formSubmit=(e)=>
    {
      e.preventDefault();
      alert(data.fullname);
    };

    return(
        <>
            <div className="my-5">
              <h1 className="text-center">
                Contact us
              </h1>  
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-8 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter Your Full Name"/>
  </div>
   
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Phone</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="Enter Your Number"/>
  </div> 

  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea
     name="msg"
    value={data.msg}
    onChange={InputEvent}
     className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="col-12">
<button className="btn btn-outline-primary" type="submit">Submit form</button>
</div>
</form>   

                        
                        
                    </div>
                </div>
            </div>


        </>
    );
};

export default Contact;