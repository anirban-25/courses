import { View, Text } from 'react-native'
import React from 'react'

const cartReducer = (state, action) => {

  if(action.type === "ADD_TO_CART"){
    let {id,
      imgUrl,
      category,
      title,
      rating,
      language,
      price,
      teacher,
      description}= action.payload;

  }
return state;
}

export default cartReducer