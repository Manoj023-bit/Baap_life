import React from 'react';
import "./OurStudents.css";

const OurStudent = () => {
  return (
    <div className='body1'>
      <div>
          
      </div>
      <div className='color'>
        <h1>Student Data</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name*</th>
            <th>Email*</th>
            <th>School Branch*</th>
            <th>Select Grade*</th>
            <th>Mobile*</th>
            <th>Academic Year*</th>
            <th>City Name*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pratik Patil</td>
            <td>Pratik@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <td>Omkar Patil</td>
            <td>Omkar@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Kokan</td>
          </tr>
          <tr>
            <td>Rahul Patil</td>
            <td>Rahul@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Maharashtra</td>
          </tr>
          <tr>
            <td>Vijay Patil</td>
            <td>Vijay@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Indore</td>
          </tr>
          <tr>
            <td>Vivek Patil</td>
            <td>Vivek@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Bangalore</td>
          </tr>
          <tr>
            <td>Vaibhav Patil</td>
            <td>Vaibhav@gmail.com</td>
            <td>Mumbai</td>
            <td>KG</td>
            <td>9876543210</td>
            <td>2020-2021</td>
            <td>Pune</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OurStudent;
