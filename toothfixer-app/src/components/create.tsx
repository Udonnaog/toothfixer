import React, {useState} from 'react';
import axios from 'axios';

const New: React.FC = () => {
    const [firstName, setfirstName] = useState('');
    const [surname, setsurname] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [homeAddress, sethomeAddress] = useState('');
    const [dateOfRegistration, setdateOfRegistration] = useState('');
    const [MatriculationNumber, setMatriculationNumber] = useState('');

    const changefirstName = (event:any) => {
        setfirstName(event.target.value);
    }
    const changesurname = (event: any) => {
        setsurname(event.target.value);
    }
    const changemiddleName = (event:any) => {
        setmiddleName(event.target.value);
    }
    const changedateOfBirth = (event: any) =>{
        setdateOfBirth(event.target.value);
    }
    const changehomeAddress = (event:any) =>{
        sethomeAddress(event.target.value);
    }
    const changedateOfRegistration = (event: any) =>{
        setdateOfRegistration(event.target.value);
    }
    const changeMatriculationNumber = (event: any) =>{
        setMatriculationNumber(event.target.value);
    }
    const postData = () => {
        axios.post('http://localhost:3000/patient-data', {
            firstName,
            surname,
            middleName,
            homeAddress,
            MatriculationNumber,
            dateOfBirth,
            dateOfRegistration,
        })

    }
 return (
  
    <div className="create-form">
    <h1 className="title">TOOTHFIXER</h1>

    <div className="create-form">
        <label style= {{color:'black'}}>
            First Name
        </label>
        <p>
            <input
            type="text"
            placeholder="Please Enter your First Name..."
            onInput={changefirstName}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Surname
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Surname..."
            onInput={changesurname}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Middle Name
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Middle Name..."
            onInput={changemiddleName}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Date of Birth
        </label>
        <p>
            <input
            type="Date"
            placeholder="Enter your Date of Birth..."
            onInput={changedateOfBirth}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Home Address
        </label>
        <p>
            <input
            type="text"
            placeholder="Enter your Home Address..."
            onInput={changehomeAddress}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Date of Registration
        </label>
        <p>
            <input
            type="Date"
            placeholder="Enter your Date of Registration..."
            onInput={changedateOfRegistration}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <label style= {{color:'black'}}>
            Matriculation Number
        </label>
        <p>
            <input
            type="number"
            placeholder="Enter your Matriculation Number..."
            onInput={changeMatriculationNumber}
            style={{width: '400px', height:'25px', border: '0px', borderRadius:'10px', backgroundColor: '#f5f5f5'}}
            />
        </p>
        <button onClick={postData} type="submit" style={{width: '400px', height: '23px', border: '0px', borderRadius: '10px', alignItems: 'center', justifyContent:'center', backgroundColor: '#708090' }}>
         Submit   
        </button>
        

    </div>
    </div>

 )
}
export default New;