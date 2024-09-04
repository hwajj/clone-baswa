import {
  combineReducers,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";
import { sampleModalSlice } from "@/redux/reducer/modal";
import { ThunkAction, Action } from "@reduxjs/toolkit";

// Root reducer 설정
const rootReducer = combineSlices(sampleModalSlice);

// 스토어 생성 함수
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // 미들웨어 설정 (기본 미들웨어 포함)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

// 타입 정의
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
