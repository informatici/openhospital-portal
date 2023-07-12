import React, { useState, useEffect } from "react";
import { dateIsoToString } from '../utils/ManageDate';
const url_0 = 'http://develop-api.ohpp.local:18080/api/';
const url_1 = 'http://localhost:18080/api/';
// export const ListDoctorPatientsTest = async () => {
export const DeafutlAllData = {


  // --- ADMIN_API
  getAllUsers: async function () {
    let data = {

    }
    return data;
  },
  // --- AUTH_API
  getToken: async function () {
    // ---
    let data = {
      "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MDEwMTAiLCJzY29wZXMiOiJST0xFX1BBVElFTlQiLCJpYXQiOjE2ODg5MjE5OTIsImV4cCI6MTY4ODkzOTk5Mn0.A-S2AuoVefl4FkiGwQnp31CAAg9O5Akz2oylhIzgk_tXNCsU2PQknEw3a2yyrOQgJrxjRkxoR8Mggss2H4gB1g",
      "displayName": "701010",
      "userId": 4,
      "patientId": 1,
      "username": "701010",
      "roles": [
        "ROLE_PATIENT"
      ]
    }
    return data;
  },
  postLogin: async function (user: any, pass: any) {
    let data = {

    }
    return data;
  },
  // --- TODO servono tutti questi dati per il logout?
  postLogout: async function (user: any, pass: any) {
    let data = {

    }
    return data;
  },
  // --- PUBLIC_API
  getPatients: async function () {
    let data = {

    }
    return data;
  },
  getHospitalevents: async function () {
    let data = {

    }
    return data;
  },
  getPatientrecords: async function () {
    let data = {

    }
    return data;
  },
  // --- TODO
  getPatientrecords_patient: async function (id_patient: any) {
    let data = [
      {
        "id": 3,
        "recordDate": "2023-02-10 17:22:10",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 90,
        "value2": 110,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 4,
        "recordDate": "2023-02-10 17:37:18",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 8,
          "code": "HR",
          "measurementValueType": "NUMERIC",
          "measurementType": "HR",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 240,
          "uom": "bpm"
        },
        "value1": 80,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 5,
        "recordDate": "2023-03-23 15:29:32",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 12,
          "code": "W",
          "measurementValueType": "NUMERIC",
          "measurementType": "WEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 200,
          "uom": "kg"
        },
        "value1": 78,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 6,
        "recordDate": "2023-07-09 17:19:21",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 6,
          "code": "H",
          "measurementValueType": "NUMERIC",
          "measurementType": "HEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 250,
          "uom": "cm"
        },
        "value1": 44,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 12,
        "recordDate": "2023-03-23 15:29:32",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 12,
          "code": "W",
          "measurementValueType": "NUMERIC",
          "measurementType": "WEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 200,
          "uom": "kg"
        },
        "value1": 79,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 16,
        "recordDate": "2023-05-15 10:17:54",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 12,
          "code": "W",
          "measurementValueType": "NUMERIC",
          "measurementType": "WEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 200,
          "uom": "kg"
        },
        "value1": 76,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 24,
        "recordDate": "2023-06-10 15:30:13",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 12,
          "code": "W",
          "measurementValueType": "NUMERIC",
          "measurementType": "WEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 200,
          "uom": "kg"
        },
        "value1": 76.5,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 27,
        "recordDate": "2023-07-09 17:19:21",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 6,
          "code": "H",
          "measurementValueType": "NUMERIC",
          "measurementType": "HEIGHT",
          "defaultOptionValue": null,
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": 0,
          "maxValue": 250,
          "uom": "cm"
        },
        "value1": 66,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 29,
        "recordDate": "2023-07-09 17:20:48",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 4,
          "code": "DIUR",
          "measurementValueType": "OPTION",
          "measurementType": "DIURESIS",
          "defaultOptionValue": "PHYSIOLOGICAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 2,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 30,
        "recordDate": "2023-07-09 17:21:08",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 4,
          "code": "DIUR",
          "measurementValueType": "OPTION",
          "measurementType": "DIURESIS",
          "defaultOptionValue": "PHYSIOLOGICAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 5,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 31,
        "recordDate": "2023-07-09 17:21:58",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 4,
          "code": "DIUR",
          "measurementValueType": "OPTION",
          "measurementType": "DIURESIS",
          "defaultOptionValue": "PHYSIOLOGICAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 0,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 33,
        "recordDate": "2023-07-07 17:22:50",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 4,
          "code": "DIUR",
          "measurementValueType": "OPTION",
          "measurementType": "DIURESIS",
          "defaultOptionValue": "PHYSIOLOGICAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 0,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 34,
        "recordDate": "2023-07-03 21:58:00",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 4,
          "code": "DIUR",
          "measurementValueType": "OPTION",
          "measurementType": "DIURESIS",
          "defaultOptionValue": "PHYSIOLOGICAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 3,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 36,
        "recordDate": "2023-07-09 18:13:09",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 3,
          "code": "BWL",
          "measurementValueType": "OPTION",
          "measurementType": "BOWEL",
          "defaultOptionValue": "REGULAR",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 1,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 37,
        "recordDate": "2023-07-09 18:13:57",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 1,
          "code": "AUSC",
          "measurementValueType": "OPTION",
          "measurementType": "AUSCULTATION",
          "defaultOptionValue": "NORMAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 2,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 38,
        "recordDate": "2023-07-09 18:15:05",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 1,
          "code": "AUSC",
          "measurementValueType": "OPTION",
          "measurementType": "AUSCULTATION",
          "defaultOptionValue": "NORMAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 1,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 39,
        "recordDate": "2023-07-09 18:15:31",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 3,
          "code": "BWL",
          "measurementValueType": "OPTION",
          "measurementType": "BOWEL",
          "defaultOptionValue": "REGULAR",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 3,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 40,
        "recordDate": "2023-07-11 18:52:06",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 0,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 41,
        "recordDate": "2023-07-12 06:41:33",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 0,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 42,
        "recordDate": "2023-07-12 06:48:33",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 82,
        "value2": 122,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 43,
        "recordDate": "2023-07-11 07:05:58",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 87,
        "value2": 127,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 45,
        "recordDate": "2023-07-12 07:07:21",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 1,
          "code": "AUSC",
          "measurementValueType": "OPTION",
          "measurementType": "AUSCULTATION",
          "defaultOptionValue": "NORMAL",
          "defaultValue1": 0,
          "defaultValue2": 0,
          "minValue": -1,
          "maxValue": -1,
          "uom": null
        },
        "value1": 1,
        "value2": -1,
        "optionValue": null,
        "note": null,
        "created": null
      },
      {
        "id": 46,
        "recordDate": "2023-07-12 07:07:46",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "recordType": {
          "id": 2,
          "code": "BP",
          "measurementValueType": "NUMERIC",
          "measurementType": "BLOOD_PRESSURE",
          "defaultOptionValue": null,
          "defaultValue1": 80,
          "defaultValue2": 120,
          "minValue": 40,
          "maxValue": 200,
          "uom": "mmHg"
        },
        "value1": 89,
        "value2": 129,
        "optionValue": null,
        "note": null,
        "created": null
      }
    ]
    return data;
  },
  getPatientrecords_measurement: async function () {
    let data = {

    }
    return data;
  },
  getPatientrecords_All_measurement: async function (id_patient: any, type_code: any) {
    let data = {

    }
    return data;
  },
  getPatientrecordsAllMeasurementById: async function (id_patient: any) {
    let data = {

    }
    return data;
  },
  getPatientsById: async function (id_patient: any) {
    let data = {
      "id": 1,
      "userId": 4,
      "firstName": "Justin",
      "secondName": "Frederick",
      "birthDate": "1955-07-30",
      "sex": "M",
      "address": "Kernigan",
      "city": "Long Road - 58",
      "nextKin": null,
      "telephone": "+343341314",
      "note": null
    }
    return data;
  },
  getHospitalEventsByPatientId: async function (id_patient: any) {
    let data = [
      {
        "id": 2,
        "date": "2023-01-10 12:07:01",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 1,
          "code": "E",
          "name": "EXAM"
        },
        "payload": "Cardiology exam",
        "created": null
      },
      {
        "id": 3,
        "date": "2023-01-10 12:12:25",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 2,
          "code": "O",
          "name": "VISIT"
        },
        "payload": "Cardiology visit",
        "created": null
      },
      {
        "id": 4,
        "date": "2023-02-23 14:15:02",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 2,
          "code": "O",
          "name": "VISIT"
        },
        "payload": "Cardiology visit",
        "created": null
      },
      {
        "id": 5,
        "date": "2023-03-03 15:31:56",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 4,
          "code": "V",
          "name": "VACCINATION"
        },
        "payload": "Covid vaccination",
        "created": null
      },
      {
        "id": 1,
        "date": "2023-05-31 20:15:47",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 1,
          "code": "E",
          "name": "EXAM"
        },
        "payload": "Blood exam",
        "created": null
      }
    ]
    return data;
  },
  getHospitalEventByPatientIdByTypeCode: async function (id_patient: any, type_code: any) {
    let data = [
      {
        "id": 3,
        "date": "2023-01-10 12:12:25",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 2,
          "code": "O",
          "name": "VISIT"
        },
        "payload": "Cardiology visit",
        "created": null
      },
      {
        "id": 4,
        "date": "2023-02-23 14:15:02",
        "patient": {
          "id": 1,
          "userId": 4,
          "firstName": "Justin",
          "secondName": "Frederick",
          "birthDate": "1955-07-30",
          "sex": "M",
          "address": "Kernigan",
          "city": "Long Road - 58",
          "nextKin": null,
          "telephone": "+343341314",
          "note": null
        },
        "eventType": {
          "id": 2,
          "code": "O",
          "name": "VISIT"
        },
        "payload": "Cardiology visit",
        "created": null
      }
    ]
    return data;
  },
  getRecordTypes: async function () {
    let data = [
      {
        "id": 1,
        "code": "AUSC",
        "measurementValueType": "OPTION",
        "measurementType": "AUSCULTATION",
        "defaultOptionValue": "NORMAL",
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": -1,
        "maxValue": -1,
        "uom": null
      },
      {
        "id": 2,
        "code": "BP",
        "measurementValueType": "NUMERIC",
        "measurementType": "BLOOD_PRESSURE",
        "defaultOptionValue": null,
        "defaultValue1": 80,
        "defaultValue2": 120,
        "minValue": 40,
        "maxValue": 200,
        "uom": "mmHg"
      },
      {
        "id": 3,
        "code": "BWL",
        "measurementValueType": "OPTION",
        "measurementType": "BOWEL",
        "defaultOptionValue": "REGULAR",
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": -1,
        "maxValue": -1,
        "uom": null
      },
      {
        "id": 4,
        "code": "DIUR",
        "measurementValueType": "OPTION",
        "measurementType": "DIURESIS",
        "defaultOptionValue": "PHYSIOLOGICAL",
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": -1,
        "maxValue": -1,
        "uom": null
      },
      {
        "id": 5,
        "code": "DIUR_V",
        "measurementValueType": "NUMERIC",
        "measurementType": "DIURESIS_VOL",
        "defaultOptionValue": null,
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": 0,
        "maxValue": 2500,
        "uom": "ml"
      },
      {
        "id": 6,
        "code": "H",
        "measurementValueType": "NUMERIC",
        "measurementType": "HEIGHT",
        "defaultOptionValue": null,
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": 0,
        "maxValue": 250,
        "uom": "cm"
      },
      {
        "id": 7,
        "code": "HGT",
        "measurementValueType": "NUMERIC",
        "measurementType": "HGT",
        "defaultOptionValue": null,
        "defaultValue1": 80,
        "defaultValue2": 0,
        "minValue": 30,
        "maxValue": 600,
        "uom": "mg/dl"
      },
      {
        "id": 8,
        "code": "HR",
        "measurementValueType": "NUMERIC",
        "measurementType": "HR",
        "defaultOptionValue": null,
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": 0,
        "maxValue": 240,
        "uom": "bpm"
      },
      {
        "id": 9,
        "code": "RR",
        "measurementValueType": "NUMERIC",
        "measurementType": "RR",
        "defaultOptionValue": null,
        "defaultValue1": 20,
        "defaultValue2": 0,
        "minValue": 0,
        "maxValue": 100,
        "uom": "apm"
      },
      {
        "id": 10,
        "code": "SAT",
        "measurementValueType": "NUMERIC",
        "measurementType": "SATURATION",
        "defaultOptionValue": null,
        "defaultValue1": 98,
        "defaultValue2": 0,
        "minValue": 50,
        "maxValue": 100,
        "uom": "%"
      },
      {
        "id": 11,
        "code": "TEMP",
        "measurementValueType": "NUMERIC",
        "measurementType": "TEMPERATURE",
        "defaultOptionValue": null,
        "defaultValue1": 36,
        "defaultValue2": 0,
        "minValue": 30,
        "maxValue": 50,
        "uom": "*C"
      },
      {
        "id": 12,
        "code": "W",
        "measurementValueType": "NUMERIC",
        "measurementType": "WEIGHT",
        "defaultOptionValue": null,
        "defaultValue1": 0,
        "defaultValue2": 0,
        "minValue": 0,
        "maxValue": 200,
        "uom": "kg"
      }
    ]
    return data;
  },
  getEventTypes: async function () {
    let data = {

    }
    return data;
  },
  getAuscultationoptions: async function () {
    let data = [
      "Normal",
      "Wheezes",
      "Rhonchi",
      "Crackles",
      "Stridor",
      "Bronchial"
    ]
    return data;
  },
  getBoweloptions: async function () {
    let data = [
      "Regular",
      "Irregular",
      "Constipation",
      "Diarrheal"
    ]
    return data;
  },
  getDiuresisoptions: async function () {
    let data = [
      "Physiological",
      "Oliguria",
      "Anuria",
      "Frequent",
      "Nocturia",
      "Stranguria",
      "Hematuria",
      "Pyuria"
    ]
    return data;
  },
  postInsertMeasurement: async function (patientId: any, value1: number, recordDate: any, recordTypeCode: any) {
    let data = {

    }
    return data;
  },

  getMeasurementbyId: async function (ins_upd: any) {
    let data = {

    }
    return data;

  },
  postUpdateMeasurement: async function (patientId: any, value1: number, recordDate: any, recordTypeCode: any, res_all: any) {
    let data = {

    }
    return data;
  },
  deleteMeasurement: async function (id_measure: number,) {
    let data = {

    }
    return data;
  },


}