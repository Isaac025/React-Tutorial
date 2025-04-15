import { useState } from "react";
//controlled input - set up state values for all input fields
//value
const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //functions
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
