import React, { useState, useEffect } from "react";
const url_0 = 'http://develop-api.ohpp.local:18080/api/';
const url_1 = 'http://develop-api.ohpp.local:18080/api/';
// export const ListDoctorPatientsTest = async () => {
export const DeafutlAllData = {


  // --- ADMIN_API
  getAllUsers: async function () {
    let response = await fetch('http://develop-api.ohpp.local:18080/api/admin/users');
    const data = await response.json();
    return data;
  },
  // --- AUTH_API
  getToken: async function () {
    let response = await fetch(url_0 +'api/auth/login', {
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
    let response = await fetch(url_0 + 'auth/login', {
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
  // --- TODO servono tutti questi dati per il logout?
  postLogout: async function (user: any, pass: any) {
    let response = await fetch(url_0 + 'auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "displayName": "string",
        "patientId": 0,
        "roles": [
          "string"
        ],
        "token": "string",
        "userId": 0,
        "username": "string"
      }),
    });

    const data = await response.json();
    return data;
  },
  // --- PUBLIC_API
  getPatients: async function () {
    let response = await fetch(url_1 + 'public/patients');
    const data = await response.json();
    return data;
  },
  getHospitalevents: async function () {
    let response = await fetch(url_1 + 'public/hospitalevents');
    const data = await response.json();
    return data;
  },
  getPatientrecords: async function () {
    let response = await fetch(url_1 + 'public/patientrecords');
    const data = await response.json();
    return data;
  },
  // --- TODO
  getPatientrecords_patient: async function (id_patient: any) {
    let response = await fetch(url_1 + 'public/patientrecords/patient/' + id_patient);
    const data = await response.json();
    return data;
  },
  getPatientrecords_measurement: async function () {
    let response = await fetch(url_1 + 'public/patientrecords/measurement/1?measurementType=DIURESIS');
    const data = await response.json();
    return data;
  },
  getPatientrecords_All_measurement: async function (id_patient: any, type_code: any) {
    let arr_v = ["AUSCULTATION", "BLOOD_PRESSURE", "BOWEL", "DIURESIS", "DIURESIS_VOL", "HEIGHT", "HGT", "HR", "RR", "SATURATION", "TEMPERATURE", "WEIGHT"];

    let response = await fetch(url_1 + 'public/patientrecords/measurement/' + id_patient + '?measurementType=' + type_code);
    const data = await response.json();
    return data;
  },
  getPatientrecordsAllMeasurementById: async function (id_patient: any) {

    let response = await fetch(url_1 + 'public/patientrecords/' + id_patient);
    const data = await response.json();
    return data;
  },
  getPatientsById: async function (id_patient: any) {
    let response = await fetch(url_1 + 'public/patients/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventsByPatientId: async function (id_patient: any) {
    let response = await fetch(url_1 + 'public/hospitalevents/patient/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventByPatientIdByTypeCode: async function (id_patient: any, type_code: any) {
    let response = await fetch(url_1 + 'public/hospitalevents/eventType/' + id_patient + '?eventTypeCode=' + type_code);
    const data = await response.json();
    return data;
  },
  getRecordTypes: async function () {
    let response = await fetch(url_0 + 'public/recordtypes');
    const data = await response.json();
    return data;
  },
  getEventTypes: async function () {
    let response = await fetch(url_0 + 'public/eventtypes');
    const data = await response.json();
    return data;
  },
}