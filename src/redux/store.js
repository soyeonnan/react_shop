import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./CartSlice";

const test = createSlice({
  // 스테이트 이름, 값, 변경함수 등 넣을 수 있음
  name: 'test' ,
  initialState: 'hello'
})

const item = createSlice({
  name: 'item',
  initialState: ['apple','banana']
})



const num = createSlice({
  name: 'num',
  initialState: 1,
  reducers:{
    // changrNum은 작명
    changeNum(){
      return 10
    },

    plusNum(state) {
      //매개변수에state를 넣으면 초기값이 들어오게 됨
      return state+1; //++도 가능?
    },
    // state는 현재 값, actions는 매개변수-> 함수값
    nPlusNum(state, action){
      console.log(action);
      return state + action.payload
    }

  }
})

const obj = createSlice({
  name: 'obj',
  initialState: { name:'hong', age:20},
  reducers:{
    changeAge(state, action) {
      state.age = action.payload
    }
  }
})

export const { changeNum, plusNum, nPlusNum } = num.actions
export const { changeAge } = obj.actions

export default configureStore({
  reducer: {
    test: test.reducer,
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,

  }

})