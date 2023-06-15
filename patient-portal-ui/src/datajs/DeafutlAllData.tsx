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

    console.log("response in serv getToken");

    console.log(data);
    return data;
  },
  getPatients: async function () {
    let response = await fetch('http://localhost:18080/api/public/patients');
    const data = await response.json();

    console.log("response in serv getPatients");
    console.log(data);
    return data;
  },
  getHospitalevents: async function () {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents');
    const data = await response.json();
    console.log("response in serv getHospitalevents");
    console.log(data);
    return data;
  },
  getPatientrecords: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords');
    const data = await response.json();
    console.log("response in serv getPatientrecords");
    console.log(data);
    return data;
  },
  // --- TODO
  getPatientrecords_patient: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords/patient/1');
    const data = await response.json();
    console.log("response in serv getPatientrecords_patient 1");
    console.log(data);
    return data;
  },
  getPatientrecords_measurement: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords/measurement/1?measurementType=DIURESIS');
    const data = await response.json();
    console.log("response in serv getPatientrecords_measurement 1 DIURESIS");
    console.log(data);
    return data;
  },
  getPatientrecords_All_measurement: async function (element: any) {
    console.log("s--------------------------------");
    console.log(element);
    let arr_v = ["AUSCULTATION", "BLOOD_PRESSURE", "BOWEL", "DIURESIS", "DIURESIS_VOL", "HEIGHT", "HGT", "HR", "RR", "SATURATION", "TEMPERATURE", "WEIGHT"];

    let response = await fetch('http://localhost:18080/api/public/patientrecords/measurement/1?measurementType=' + element);
    const data = await response.json();
    console.log("response in serv getPatientrecords_measurement " + element);
    console.log(data);
    return data;
  },
  getPatientrecordsAllMeasurementById: async function (id_patient: any) {
    let response = await fetch('http://localhost:18080/api/public/patientrecords/' + id_patient);
    const data = await response.json();
    console.log("response in serv getPatientrecordsAllMeasurementById " + id_patient);
    console.log(data);
    return data;
  },
  getPatientsById: async function (id_patient: any) {
    let response = await fetch('http://localhost:18080/api/public/patients/' + id_patient);
    const data = await response.json();
    console.log("response in serv getPatientsById id: " + id_patient);
    console.log(data);
    return data;
  },
  getHospitalEventsByPatientId: async function (id_patient: any) {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents/patient/' + id_patient);
    const data = await response.json();
    console.log("response in serv getHospitalEventsByPatientId id: " + id_patient);
    console.log(data);
    return data;
  },
  getHospitalEventByPatientIdByTypeCode: async function (id_patient: any, type_code: any) {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents/eventType/' + id_patient + '?eventTypeCode=' + type_code);
    const data = await response.json();
    console.log("response in serv getHospitalEventByPatientIdByTypeCode id: " + id_patient + " TypeCode: " + type_code);

    console.log(data);
    return data;
  },
}