import { configureStore, createSlice } from "@reduxjs/toolkit";

const test = createSlice({
  // 스테이트 이름, 값, 변경함수 등 넣을 수 있음
  name: 'test' ,
  initialState: 'hello'
})

export default configureStore({
  reducer: {
    test: test.reducer
  }

})