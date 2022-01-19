import "./newcustomer.css";

export const NewCustomer = () => {
  return (
    <div className="newUser m-5 d-flex flex-column">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label className="form-label" >NIT</label>
          <input className="form-control" type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Full Name</label>
          <input className="form-control" type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Email</label>
          <input className="form-control" type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Password</label>
          <input className="form-control" type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Phone</label>
          <input className="form-control" type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Address</label>
          <input className="form-control" type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label className="form-label" >Gender</label>
          <div className="newUserGender">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
            <label className="form-check-label mx-2" >Male</label>
            <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
            <label className="form-check-label mx-2" >Female</label>
            <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
            <label className="form-check-label mx-2" >Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label className="form-label" >Active</label>
          <select className="form-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="btn btn-primary mt-5">Create</button>
      </form>
    </div>
  );
};
