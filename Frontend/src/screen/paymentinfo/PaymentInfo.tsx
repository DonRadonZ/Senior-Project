import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { colors } from '../../component/color';

const InputWrapper = styled.View`
 width: 100%
`;

const LeftIcon = styled.View`
 position: absolute;
 top: 35px;
 left: 15px;
 z-index: 1;
 border-right-width: 2px;
 border-color: ${colors.white};
 padding-right: 10px;
`;

