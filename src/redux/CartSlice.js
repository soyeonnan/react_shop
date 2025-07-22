import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name : 'cart',
  initialState : [
    // {id:0, title:'apple', count:3},
    // {id:2, title: 'watermelon', count:10},
    

  ],
  reducers: {
    
    addCount(state, action){
      state[action.payload].count++;
      //payload에는 Cart쪽의 인수(i값)가 들어옴
      //state는 여기에 있는 cart의 원본값이 들어있고
      //action이라는 매개변수(지정이름?)를 만들어서 다른 쪽에서 받아올 인수값을 받고
      // .count에 있는 것만 지정해서 ++한다고 생각하면 됨 
    },

    addItem(state, action) {
      // action은 작명?
      // state.push(action.payload);
      // push의 역활 알아보기

      // 장바구니에 내가 주문하기 누른 상품이 있는지 없는지 판단

      // 판단 기준을 어떤걸로 할 건지 정해야 함(이름으로 할 경우 비슷한 이름이 많을수도 있어서 id(식별번호)로 정하는게 멀리 보았을 때 좋음)
      // 주문하기 누른 id가 장바구니에 있나 없나를 검사해보면 될 듯
      // 반복문 이용하면 검사 가능 할 듯?
      
      // findIndex함수 : 조건식에 만족하는 인덱스를 리턴, 없으면 -1 리턴
      let index = state.findIndex(data=>{
        return data.id == action.payload.id
      })

      if( index !== -1 ) {
        state[index].count++;
      }else {
        state.push(action.payload);
      }
    },

    removeItem (state, action) {
      state.splice(action.payload,1);
      
    }
  }
})


export const { addCount, addItem, removeItem } = cart.actions;
export default cart;
//보통은 이렇게 관련있는 것들끼리 파일 분류를 해둠