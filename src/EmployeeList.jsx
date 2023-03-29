import React, { useState } from "react";

function EmployeeList() {
  const [formData, setFormData] = useState({
    Uniqueid:"",
    Image :"",
    Name: "",
    Email: "",
    phoneNumber: "",
    Designation:"",
    Gender:"",
    Course:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      // Add new data to table
      setTableData([...tableData, formData]);
    } else {
      // Update existing data in table
      const newData = [...tableData];
      newData[editingIndex] = formData;
      setTableData(newData);
      setEditingIndex(null);
    }
    setFormData({
        Uniqueid:"",
        Image :"",
        Name: "",
        Email: "",
        phoneNumber: "",
        Designation:"",
        Gender:"",
        Course:"",
    });
  };

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  
  const handleEdit = (index) => {
    const editData = tableData[index];
    setFormData(editData);
    setEditingIndex(index);
  };

  return (
    <>
      <div id="app" className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <h1>Create Employee</h1>
          <label htmlFor="Name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="Name"
            id="Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
          </div>
          <div className="input-container">
          <label htmlFor="lastName">Email:</label>
          <input
            className="form-control"
            type="email"
            name="Email"
            id="Email"
            value={formData.Email}
            onChange={handleInputChange}
          />
          </div >
          <div className="input-container">
          <label htmlFor="phoneNumber">Mobile No :</label>
          <input
            className="form-control"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          </div>

          <div className="input-container">
          <label htmlFor="Designation">Designation </label>
          <select  
            type="text"
            name="Designation"
            id="Designation"
            value={formData.Designation}
            onChange={handleInputChange}>
            <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
          </select>
          </div>

          <div>
          <label htmlFor="Gender">Gender:</label>
          <div className="gender-inputs"></div>
          <label htmlFor="Gender">      
          <input className="form-control"
            type="radio"
            name="Gender"
            id="Gender"
            value="Male"
            onChange={handleInputChange}
            ></input>
            Male</label>
          <label htmlFor="Gender">
          <input className="form-control"
            type="radio"
            name="Gender"
            id="Gender"
            value="Female"
            onChange={handleInputChange} 
            ></input>
            Female</label>
          </div>
          <br></br>
          <div>
          <label htmlFor="Course">Course:</label>
          <br /><br />
          <div className="course-inputs">
          <input className="form-control"
            type="checkbox"
            name="Course"
            id="Course"
            value="MCA"
            onChange={handleInputChange}></input>
          <label htmlFor="Course">MCA</label>
          <input className="form-control"
            type="checkbox"
            name="Course"
            id="Course"
            value="BCA"
            onChange={handleInputChange}></input>
          <label htmlFor="Course">BCA</label><br/>

          <input className="form-control"
            type="checkbox"
            name="Course"
            id="Course"
            value="BSC"
            onChange={handleInputChange}></input>

          <label htmlFor="Course">BSC</label>
          </div>
          </div>

          <div className="input-container">
          <label htmlFor="Image">Upload Img</label>
          <input
          className="form-control"
          type="file"
          name="Image"
          id="Image"
          value={formData.Image}
          onChange={handleInputChange} accept="image/png,image/jpg"  />
          </div>
          <button className="btn btn-primary" type="submit">
            {editingIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
        <br/>

        {/* tabel */}
        <div className="tabel">
        <table border="2px" rules="all" cellPadding="10px">
          <thead>
            <tr>
            <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.Image}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.Designation}</td>
                <td>{data.Gender}</td>
                <td>{data.Course}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                 Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;