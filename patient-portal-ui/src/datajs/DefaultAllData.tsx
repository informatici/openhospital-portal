import React, { useState, useEffect } from "react";
import { dateIsoToString, stringToDate } from '../utils/ManageDate';
const url_0 = 'http://api-develop.ohpp.local:18080/api/';
export const DefaultAllData = {


  // --- ADMIN_API
  getAllUsers: async function () {
    let response = await fetch(url_0 + 'api/admin/users');
    const data = await response.json();
    return data;
  },
  // --- AUTH_API
  getToken: async function () {
    let response = await fetch(url_0 + 'api/auth/login', {
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
    let response = await fetch(url_0 + 'public/patients');
    const data = await response.json();

    return data;
  },
  getHospitalevents: async function () {
    let response = await fetch(url_0 + 'public/hospitalevents');
    const data = await response.json();
    return data;
  },
  getPatientrecords: async function () {
    let response = await fetch(url_0 + 'public/patientrecords');
    const data = await response.json();
    return data;
  },
  getPatientrecords_patient: async function (id_patient: any) {
    let response = await fetch(url_0 + 'public/patientrecords/patient/' + id_patient);
    const data = await response.json();
    let sort_data = data.sort((a: any, b: any) => stringToDate(b.recordDate).valueOf() - stringToDate(a.recordDate).valueOf());
    return sort_data;
  },
  getPatientrecords_measurement: async function () {
    let response = await fetch(url_0 + 'public/patientrecords/measurement/1?measurementType=DIURESIS');
    const data = await response.json();
    return data;
  },
  getPatientrecords_All_measurement: async function (id_patient: any, type_code: any) {
    let arr_v = ["AUSCULTATION", "BLOOD_PRESSURE", "BOWEL", "DIURESIS", "DIURESIS_VOL", "HEIGHT", "HGT", "HR", "RR", "SATURATION", "TEMPERATURE", "WEIGHT"];

    let response = await fetch(url_0 + 'public/patientrecords/measurement/' + id_patient + '?measurementType=' + type_code);
    const data = await response.json();
    return data;
  },
  getPatientrecordsAllMeasurementById: async function (id_patient: any) {

    let response = await fetch(url_0 + 'public/patientrecords/' + id_patient);
    const data = await response.json();
    return data;
  },
  getPatientsById: async function (id_patient: any) {
    let response = await fetch(url_0 + 'public/patients/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventsByPatientId: async function (id_patient: any) {
    let response = await fetch(url_0 + 'public/hospitalevents/patient/' + id_patient);
    const data = await response.json();
    return data;
  },
  getHospitalEventByPatientIdByTypeCode: async function (id_patient: any, type_code: any) {
    let response = await fetch(url_0 + 'public/hospitalevents/eventType/' + id_patient + '?eventTypeCode=' + type_code);
    const data = await response.json();
    let sort_data = data.sort((a: any, b: any) => stringToDate(b.recordDate).valueOf() - stringToDate(a.recordDate).valueOf());
    return sort_data;
  },
  getRecordTypes: async function () {
    let response = await fetch(url_0 + 'public/recordtypes');
    const data = await response.json();
    return data;
  },
  getEventTypes: async function () {

  },
  getAuscultationoptions: async function () {
    let response = await fetch(url_0 + 'public/recordtypes/auscultationoptions');
    const data = await response.json();
    return data;
  },
  getBoweloptions: async function () {
    let response = await fetch(url_0 + 'public/recordtypes/boweloptions');
    const data = await response.json();
    return data;
  },
  getDiuresisoptions: async function () {
    let response = await fetch(url_0 + 'public/recordtypes/diuresisoptions');
    const data = await response.json();
    return data;
  },
  postInsertMeasurement: async function (patientId: any, value1: number, value2: number, recordDate: any, recordTypeCode: any) {
    let response = await fetch(url_0 + 'public/patientrecords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "note": null,
        "optionValue": null,
        "patientId": patientId,
        "recordDate": dateIsoToString(recordDate),
        "recordTypeCode": recordTypeCode,
        "value1": value1,
        "value2": value2
      }),
    });
    const data = await response.json();
    return data;
  },

  getMeasurementbyId: async function (ins_upd: any) {
    let response = await fetch(url_0 + 'public/patientrecords/' + ins_upd);
    const data = await response.json();
    return data;

  },
  getHospitalEventType: async function (id_patient: any) {
    let response = await fetch(url_0 + 'public/hospitalevents/patient/' + id_patient);
    const data = await response.json();
    return data;

  },
  postUpdateMeasurement: async function (patientId: any, value1: number, recordDate: any, recordTypeCode: any, res_all: any) {
    console.log("postUpdateMeasurement -1--");
    res_all.value1 = value1;
    console.log(res_all);
    // let response = await fetch(url_0 + 'public/patientrecords/' + res_all.id, {
    //   method: 'PUT',
    //   body: JSON.stringify(
    //     res_all),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    // const data = await response.json();
    // console.log("--------------------------------");
    // console.log(data);
    fetch(url_0 + 'public/patientrecords/' + res_all.id, {
      method: 'PUT',
      body: JSON.stringify(
        res_all),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return true;
  },

  deleteMeasurement: async function (id_measure: number,) {
    let response = await fetch(url_0 + 'public/patientrecords/' + id_measure, {
      method: 'DELETE',

    });
    return response;
  },


}