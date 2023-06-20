import React, { useState, useEffect } from "react";

// export const ListDoctorPatientsTest = async () => {
export const DeafutlAllData = {
  getTest: async function () {
    let response = await fetch('http://api.plos.org/search?q=title:DNA');
    const data = await response.json();
    return data
  },
  getToken: async function () {
    let response = await fetch('http://develop-api.ohpp.local:18080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "password": "admin",
        "username": "admin@patientportal.isf.org"
      }),
    });
    const data = await response.json();
    return data;
  },
  postLogin: async function (user: any, pass: any) {

    let response = await fetch('http://develop-api.ohpp.local:18080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "password": pass,
        "username": user
      }),
    });

    const data = await response.json();
    return data;
  },
  getPatients: async function () {
    let response = await fetch('http://localhost:18080/api/public/patients');
    const data = await response.json();
    return data;
  },
  getHospitalevents: async function () {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents');
    const data = await response.json();
    return data;
  },
  getPatientrecords: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords');
    const data = await response.json();
    return data;
  },
  // --- TODO
  getPatientrecords_patient: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords/patient/1');
    const data = await response.json();
    return data;
  },
  getPatientrecords_measurement: async function () {
    let response = await fetch('http://localhost:18080/api/public/patientrecords/measurement/1?measurementType=DIURESIS');
    const data = await response.json();
    return data;
  },
  getPatientrecords_All_measurement: async function (id_patient: any, type_code: any) {
    let arr_v = ["AUSCULTATION", "BLOOD_PRESSURE", "BOWEL", "DIURESIS", "DIURESIS_VOL", "HEIGHT", "HGT", "HR", "RR", "SATURATION", "TEMPERATURE", "WEIGHT"];

    let response = await fetch('http://localhost:18080/api/public/patientrecords/measurement/' + id_patient + '?measurementType=' + type_code);
    const data = await response.json();
    return data;
  },
  getPatientrecordsAllMeasurementById: async function (id_patient: any) {

    let response = await fetch('http://localhost:18080/api/public/patientrecords/' + id_patient);
    const data = await response.json();
    return data;
  },
  getPatientsById: async function (id_patient: any) {
    let response = await fetch('http://localhost:18080/api/public/patients/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventsByPatientId: async function (id_patient: any) {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents/patient/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventByPatientIdByTypeCode: async function (id_patient: any, type_code: any) {
    let response = await fetch('http://localhost:18080/api/public/hospitalevents/eventType/' + id_patient + '?eventTypeCode=' + type_code);
    const data = await response.json();
    return data;
  },
  getRecordTypes: async function () {
    let response = await fetch('http://develop-api.ohpp.local:18080/api/public/recordtypes');
    const data = await response.json();
    return data;
  },
}