import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from "axios";
import NumberList from './components/NumberList.js';


function App() {

  const [phoneNumbers, setNumbers] = useState([])
  const [userId, setId] = useState(1)
  const API = "http://127.0.0.1:5000/"

  const addNumber = (newNumberData) => {
    axios
      .post(`${API}/number/${userId}/`, newNumberData)
      .then((result) => {
        getAllNumbers(userId);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getAllNumbers = () => {
    axios
      .get(`${API}/number/account/${userId}/`)
      .then((result) => {
        setNumbers(result.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteNumber = (number_id) => {
    axios
      .get(`${API}`)
  }

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <View>
      <NumberList numbers={phoneNumbers} />
    </View>
  );
}

export default App;
