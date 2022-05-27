// import 'bootstarp/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import {useEffect,useState } from 'react';
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

 function SearchRecord() {
 
    const[search,setSearch]=useState([]);
    const[record,setRecod]=useState([]);
    // const[rate, GetRate]=useState([]);

    var i=1;

    const loadRecords=async()=>{
      axios.get("http://localhost:3000/products")
      .then(response=>{
          setSearch(response.data);
      });
      
    }
    useEffect(()=>{
        loadRecords();
    },[]);

    //Search Record by Speciality
    const searcgRecords=()=>{
           axios.get(`http://localhost:3000/products/?Speciality=${record}`)
           .then(response=>{
               setSearch(response.data);
           });
       }
       const searcgRate=()=>{
        axios.get(`http://localhost:3000/products/?Rate=${record}`)
        .then(response=>{
            setSearch(response.data);
        });
    }
    return(
        <div class="container">
        <h4 className="text-center text-success mt-5"><b>Search Movie by Doctor Speciality and Rate</b></h4>
          <div class="input-group mb-4 mt-3">
           <div class="form-outline">
              <input type="text" id="form1" onChange={(e)=>setRecod(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
         </div>
         <button type="button" onClick={searcgRecords} class="btn btn-success">
             Search Speciality
         </button>
         <div class="input-group mb-4 mt-3">
           <div class="form-outline">
              <input type="text" id="form1" onChange={(e)=>setRecod(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
         </div>
         <button type="button" onClick={searcgRate} class="btn btn-success">
             Search Rate
         </button>
        </div>                   
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>DoctorName</th>
              <th>Speciality</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {search.map((name)=>
            <tr>
              <td>{i++}</td>  
              <td><h6>{name.DoctorName}</h6></td>  
              <td><h6>{name.Speciality}</h6></td> 
              <td><h6>{name.Rate}</h6></td>
               
            </tr>
            )}  
       
          </tbody>
        </table>
      </div>
      </div>
       
        );
      }
    
export default SearchRecord;
