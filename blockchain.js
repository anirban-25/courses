import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {ethers} from 'ethers';
import { LearningPlatformContractAddress } from "./config";
import {LearningPlatformAbi} from './utils/LearningPlatform.json'
import './shim'
import { useState } from "react";
import { initWallet } from '@metamask/onboarding';
import { detect } from '@metamask/detect-provider';
import { withWalletConnect } from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
const [currentAccount, setCurrentAccount] = useState('');

export default withWalletConnect(App, {
  clientMeta: {
    description: 'Connect with WalletConnect',
  },
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});

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

  export const connectWallet = async () => {
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

  export const initializeMetaMask = async () => {
    const provider = await detect();
    if (provider) {
      const onboarding = initWallet(provider);
      if (onboarding) {
        if (provider.request) {
          const accounts = await provider.request({ method: 'eth_requestAccounts' });
          console.log(accounts);
          setIsUserLoggedIn(true);
          setCurrentAccount(accounts[0]);
        }
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();
        const TaskContract = new ethers.Contract(LearningPlatformContractAddress, LearningPlatformAbi.abi, signer);
        return TaskContract;
        // Now you can use the signer for your transactions
        // For example, signer.sendTransaction({...})
      }
    } else {
      console.log('Provider not present!');
      return null;
    }
  };  

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

  // Register as an educator
  async function registerAsEducator() {
    try{
    const learningPlatformContract = providerPresent();
    if(!learningPlatformContract) {
      console.log('Eth provider not present');
      return;
    }
    const tx = await learningPlatformContract.registerAsEducator().then
    (res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  // Register as a learner
  async function registerAsLearner() {
    try{
    const learningPlatformContract = providerPresent();
    const tx = await learningPlatformContract.registerAsLearner().then
    (res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  // Create a course
  async function createCourse(courseLink, courseDetails, courseFee) {
    try{
    const learningPlatformContract = providerPresent();
    const tx = await learningPlatformContract.createCourse(courseLink, courseDetails, courseFee).then
    (res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  // Get all course addresses
  async function getAllCourseAddresses() {
    try{
    const learningPlatformContract = providerPresent();
    const addresses = await learningPlatformContract.getAllCourseAddresses();
    return addresses;
    } catch (error) {
      console.log(error);
    }
  }

  // Get course details
  async function getCourseDetails(courseAddress) {
    try{
    const learningPlatformContract = providerPresent();
    const details = await learningPlatformContract.getCourseDetails(courseAddress);
    return details;
    } catch (error) {
      console.log(error);
    }
  }

  // Get courses enrolled by a learner
  async function getCoursesEnrolledByLearner(learnerAddress) {
    try{
    const learningPlatformContract = providerPresent();
    const courseAddresses = await learningPlatformContract.getCoursesEnrolledByLearner(learnerAddress);
    return courseAddresses;
    } catch (error) {
      console.log(error);
    }
  }

  // Enroll in a course
  async function enrollCourse(educatorAddress, courseFee) {
    try{
    const learningPlatformContract = providerPresent();
    const tx = await learningPlatformContract.enrollCourse(educatorAddress, { value: courseFee }).then
    (res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  // Complete an assignment
  async function completeAssignment(educatorAddress) {
    try{
    const learningPlatformContract = providerPresent();
    const tx = await learningPlatformContract.completeAssignment(educatorAddress)
    .then(res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  // Verify course completion
  async function verifyCourseCompletion(educatorAddress, learnerAddress) {
    try{
    const learningPlatformContract = providerPresent();
    const isCompleted = await learningPlatformContract.verifyCourseCompletion(educatorAddress, learnerAddress);
    return isCompleted;
    } catch (error) {
      console.log(error);
    }
  }

  // Withdraw funds from the contract
  async function withdrawFunds(amount) {
    try{
    const learningPlatformContract = providerPresent();
    const tx = await learningPlatformContract.withdrawFunds(amount).then
    (res => {
      console.log(res);
    });
    await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

