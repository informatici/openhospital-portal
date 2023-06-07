import React, { useState, useEffect } from "react";

// export const ListDoctorPatientsTest = async () => {
export const DeafutlAllData = {
  getTest: async function () {
    let response = await fetch('http://api.plos.org/search?q=title:DNA');
    const data = await response.json();
    console.log("response in serv");
    console.log(data);
    return data
  }
}
