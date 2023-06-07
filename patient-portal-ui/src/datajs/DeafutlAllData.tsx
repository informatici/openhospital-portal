import React, { useState, useEffect } from "react";

// export const ListDoctorPatientsTest = async () => {
export const DeafutlAllData = {
  getTest: async function () {
    let response = await fetch('http://api.plos.org/search?q=title:DNA');
    const data = await response.json();
    console.log("response in serv");
    console.log(data);
    return data
  },
  getToken: async function () {
    let response = await fetch('http://localhost:18080/auth/login?password=admin&username=admin%40patientportal.isf.org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log("response in serv");
    console.log(data);
    return data;
  },
  getPatients: async function () {
    let response = await fetch('http://localhost:18080/api/public/patients');
    const data = await response.json();
    console.log("response in serv");
    console.log(data);
    return data;
  },
}
