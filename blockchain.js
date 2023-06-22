import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {ethers} from 'ethers';
import { LearningPlatformContractAddress } from "./config";
import LearningPlatformAbi from './utils/LearningPlatform.json'
import './shim'
import { useState } from "react";

const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
const [currentAccount, setCurrentAccount] = useState('');

  const MMSDK = new MetaMaskSDK({
    openDeeplink: (link) => {
      Linking.openURL(link); // Use React Native Linking method or your favourite way of opening deeplinks
    },
    timer: BackgroundTimer, // To keep the app alive once it goes to background
    dappMetadata: {
      name: 'My App', // The name of your application
      url: 'https://myapp.com', // The url of your website
    },
  });

  const connectWallet = async () => {
    try {
      const ethereum = MMSDK.getProvider();
      if(!ethereum) {
        console.log('Please install MetaMask!');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Found Account',accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const providerPresent = () => {
    const ethereum = MMSDK.getProvider();
    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(MMSDK.getProvider());
      const signer = provider.getSigner();
      const TaskContract = new ethers.Contract(LearningPlatformContractAddress, LearningPlatformAbi.abi, signer);
      return TaskContract;
    }
    return null;
  }

  async function createCourse(title, description, duration, requiredTokens, totalQuizzes, totalAssignments) {
    try{
    const TaskContract = providerPresent();
    if(TaskContract) {
    const transaction = await TaskContract.createCourse(
      title,
      description,
      duration,
      requiredTokens,
      totalQuizzes,
      totalAssignments
    ).then(res => {
      console.log(res);
    });
  
    await transaction.wait();
    }
    else {
      console.log('Eth provider not present');
    }
   } catch (error) {
      console.log(error);
    }
  }

  // Function to enroll in a course
  async function enrollCourse(courseId) {
    try{
      const TaskContract = providerPresent();
      if(TaskContract) {
        const transaction = await TaskContract.enrollCourse(courseId).then
          (res => {
            console.log(res);
          });
        await transaction.wait();
      }else {
        console.log('Eth provider not present');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function completeAssignment(courseId) {
    try{
      const TaskContract = providerPresent();
      if(TaskContract) {
        const transaction = await TaskContract.completeAssignment(courseId).then
          (res => {
            console.log(res);
          });
        await transaction.wait(); 
      } else {
        console.log('Eth provider not present');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function earnTokens(amount) {
    try{
      const TaskContract = providerPresent();
      if(TaskContract) {
        const transaction = await TaskContract.earnTokens(amount).then
          (res => {
            console.log(res);
          });
        await transaction.wait();
      } else {
        console.log('Eth provider not present');
      }
    } catch (error) {
      console.log(error);
    }
  }
