import React, {useState} from 'react';
import axios from 'axios';

const New: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [matriculationNumber, setmatriculationNumber] = useState('');
    const [clinicalDate, setclinicalDate] = useState('');
    const [NatureofAilment, setNatureOfAilment] = useState('');
    const [MedicinePrescribed, setMedicinePrescribed] = useState('');
    const [ProcedureUndertaken, setProcedureUndertaken] = useState('');
    const [dateOfNextAppointment, setdateOfNextAppointment] = useState('');

    const changeFirstName = (event:any) => {
        setFirstName(event.target.value);
    }
    const changelastName = (event: any) => {
        setlastName(event.target.value);
    }
    const changeMiddleName = (event:any) => {
        setMiddleName(event.target.value);
    }
    const changeDateOfBirth = (event: any) =>{
        setDateOfBirth(event.target.value);
    }
    const changeHomeAddress = (event:any) =>{
        setHomeAddress(event.target.value);
    }
    const changeDateOfRegistration = (event: any) =>{
        setDateOfRegistration(event.target.value);
    }
    const changematriculationNumber = (event: any) =>{
        setmatriculationNumber(event.target.value);
    }
    const changeClinicalDate = (event: any) =>{
        setclinicalDate(event.target.value);
    }
    const changeNatureofAilment = (event: any) =>{
        setNatureOfAilment(event.target.value);
    }
    const changeMedicinePrescribed = (event: any) =>{
        setMedicinePrescribed(event.target.value);
    }
    const changeProcedureUndertaken = (event: any) =>{
        setProcedureUndertaken(event.target.value);
    }
    const changedateOfNextAppointment = (event: any) =>{
        setdateOfNextAppointment(event.target.value);
    }
    const postData = async () => {
        try {
          await axios.post('http://localhost:5000/patient-records', {
            firstName,
            lastName,
            middleName,
            homeAddress,
            matriculationNumber,
            dateOfBirth: new Date(dateOfBirth).toISOString(),
            dateOfRegistration: new Date(dateOfRegistration).toISOString(),
          });
      
          await ClinicalRecords();
        } catch (error) {
          console.log(error);
        }
      };
      
      const ClinicalRecords = async () => {
        try {
          await axios.post('http://localhost:5000/clinical-record', {
            clinicalDate: new Date(clinicalDate).toISOString(),
            NatureofAilment,
            MedicinePrescribed,
            ProcedureUndertaken,
            dateOfNextAppointment: new Date(dateOfNextAppointment).toISOString(),
          });
        } catch (error) {
          console.log(error);
        }
      };
      
      
 return (
    <div className="app-container">
    <h1 className="app-title">WELCOME TO TOOTHFIXER</h1>
    <div className="create-form">
      <div className="table">
        <h2 className="title2">Patient Record</h2>
        <div className="table-container">
          <div className="table-row">
            <label style={{ color: 'black' }}>First Name</label>
            <input
              type="text"
              placeholder="Please enter your First Name..."
              onInput={changeFirstName}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Last Name</label>
            <input
              type="text"
              placeholder="Enter your Surname..."
              onInput={changelastName}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Middle Name</label>
            <input
              type="text"
              placeholder="Enter your Middle Name..."
              onInput={changeMiddleName}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Date of Birth</label>
            <input
              type="Date"
              placeholder="Enter your Date of Birth..."
              onInput={changeDateOfBirth}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Home Address</label>
            <input
              type="text"
              placeholder="Enter your Home Address..."
              onInput={changeHomeAddress}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Date of Registration</label>
            <input
              type="Date"
              placeholder="Enter your Date of Registration..."
              onInput={changeDateOfRegistration}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Matriculation Number</label>
            <input
              type="number"
              placeholder="Enter your Matriculation Number..."
              onInput={changematriculationNumber}
            />
          </div>
  
          <button onClick={postData} type="submit">
            Submit
          </button>
        </div>
      </div>
  
      <div className="table">
        <h2 className="title2">Clinical Record</h2>
        <div className="table-container">
          <div className="table-row">
            <label style={{ color: 'black' }}>Clinic Date:</label>
            <input
              type="date"
              placeholder="Enter clinical date..."
              value={clinicalDate}
              onChange={changeClinicalDate}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Nature of Ailment</label>
            <input
              type="text"
              placeholder="Enter Nature of Ailment..."
              onChange={changeNatureofAilment}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Medicine Prescribed</label>
            <input
              type="text"
              placeholder="Enter Medicine Prescribed..."
              onChange={changeMedicinePrescribed}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Procedure Undertaken</label>
            <input
              type="text"
              placeholder="Enter Procedure Undertaken..."
              onChange={changeProcedureUndertaken}
            />
          </div>
  
          <div className="table-row">
            <label style={{ color: 'black' }}>Date of Next Appointment</label>
            <input
              type="Date"
              placeholder="Enter Date of Next Appointment..."
              onChange={changedateOfNextAppointment}
            />
          </div>
  
          <button type="button" onClick={postData} className="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
 )
}  
  
export default New;