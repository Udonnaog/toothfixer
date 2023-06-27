import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';

const ReadRecords: React.FC = () => {
  const [patientBiodata, setPatientBiodata] = useState([]);
  const [clinicalRecords, setClinicalRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/patient-records')
      .then(response => {
        setPatientBiodata(response.data);
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });

    axios.get('http://localhost:5000/clinical-record')
      .then(response => {
        setClinicalRecords(response.data);
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  }, []);

  const handleDeleteBiodata = (id: number) => {
    axios.delete(`http://localhost:5000/patient-records/${id}`)
      .then(response => {
        // Remove the deleted record from the state
        setPatientBiodata(patientBiodata.filter((record: any) => record.id !== id));
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const handleDeleteClinicalRecord = (id: number) => {
    axios.delete(`http://localhost:5000/clinical-record/${id}`)
      .then(response => {
        // Remove the deleted record from the state
        setClinicalRecords(clinicalRecords.filter((record: any) => record.id !== id));
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message to the user
      });
  };

  const handleUpdateBiodata = (id: number) => {
    // Redirect to the update page or show a modal with the update form for the selected biodata record
    // You can pass the record id as a URL parameter or use state management to carry the selected record data to the update page/modal
  };

  const handleUpdateClinicalRecord = (id: number) => {
    // Redirect to the update page or show a modal with the update form for the selected clinical record
    // You can pass the record id as a URL parameter or use state management to carry the selected record data to the update page/modal
  };

  return (
    <div className="table-container">
      <h3 className="header1">Patient Data</h3>
      <table className="record-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Home Address</th>
            <th>Matriculation Number</th>
            <th>Date of Birth</th>
            <th>Date of Registration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientBiodata.map((patient: any) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.middleName}</td>
              <td>{patient.homeAddress}</td>
              <td>{patient.matriculationNumber}</td>
              <td>{new Date(patient.dateOfBirth).toDateString()}</td>
              <td>{new Date(patient.dateOfRegistration).toDateString()}</td>
              <td>
                <button onClick={() => handleUpdateBiodata(patient.id)}>Update</button>
                <button onClick={() => handleDeleteBiodata(patient.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="header1">Clinical Records</h3>
      <table className="record-table">
        <thead>
          <tr>
            <th>Clinic Date</th>
            <th>Nature of Ailment</th>
            <th>Medicine Prescribed</th>
            <th>Procedure Undertaken</th>
            <th>Date of Next Appointment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clinicalRecords.map((record: any) => (
            <tr key={record.id}>
              <td>{new Date(record.clinicalDate).toDateString()}</td>
              <td>{record.NatureofAilment}</td>
              <td>{record.MedicinePrescribed}</td>
              <td>{record.ProcedureUndertaken}</td>
              <td>{new Date(record.dateOfNextAppointment).toDateString()}</td>
              <td>
                <button onClick={() => handleUpdateClinicalRecord(record.id)}>Update</button>
                <button onClick={() => handleDeleteClinicalRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadRecords;
