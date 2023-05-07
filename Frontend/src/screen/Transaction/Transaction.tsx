import React, {useState,FunctionComponent} from 'react';
//import {StyleSheet,TextInput} from 'react-native';

import styled from 'styled-components/native'
import PayCard from '../Balance/paybalance'
import { Container } from '../../component/shared';
import { colors } from '../../component/color';
//import payInfo from '../paybox/paybox';
import StyledTextInput from '../../component/Inputs/StyledTextInput';
import MainContainer from '../../component/Container/MainContainer';
import RegularButton from '../../component/Buttons/RegularButton';






export const Transaction = () => {
  const [accountNo,setAccountNo] = useState('')
  const [amount,setAmount] = useState('')
  const [note,setNote] = useState('')
  return (
    <MainContainer>
      <PayCard/>
      <StyledTextInput 
      label= "Account No" 
      //icon="account-cash"
      value={accountNo}
      onChangeText={setAccountNo}
      placeholder='Account No.'
      keyboardType='number-pad'
      style={{marginBottom: 20}}
      />

      <StyledTextInput 
      label= "Amount" 
      //icon="account-cash"
      value={amount}
      onChangeText={setAmount}
      placeholder='Account No.'
      keyboardType='number-pad'
      style={{marginBottom: 20}}
      />
      <StyledTextInput 
      label= "Account No" 
      //icon="account-cash"
      value={note}
      onChangeText={setNote}
      placeholder='Note.'
      keyboardType='default'
      style={{marginBottom: 20}}
      />
      <RegularButton onPress={() => {}}>
        Checkout
      </RegularButton>
    </MainContainer>
  );
};

