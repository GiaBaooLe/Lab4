import React from "react";
import { Button, Icon, Select, TextInput, Textarea, } from "react-materialize";
const handleSubmit =(e)=> {
    e.preventDefault()
  }

const Contact = () => {
  return (
    <div>
      
        
        <form className="contact" onSubmit={handleSubmit}>
        <div className="subcontact">
        <h3>Contact</h3>
        <TextInput id="TextInput-31" label="Your Name" />
        <TextInput id="TextInput-31" label="Your Phone" />
        <TextInput email id="TextInput-44" label="Email" validate />
        
        <Select
          id="Select-46"
          multiple={false}
          onChange={function noRefCheck() {}}

          value=""
        >
          <option disabled value="">
            Choose your favorite option 
          </option>
          
          <option value="1">England</option>
          <option value="2">France</option>
          <option value="3">Spain</option>
        </Select>
        <Textarea
          icon={<Icon></Icon>}
          placeholder="Your content"
          id="Textarea-28"
        /><Button node="button" type="submit" waves="light">
          Submit
          
        </Button>
        </div>
        
      </form>
      
    </div>
  );
};

export default Contact;
