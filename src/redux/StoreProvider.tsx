import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore, AppDispatch } from "@/redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  // store를 ref로 관리하여 첫 렌더링 시에만 생성되도록 합니다.
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // 처음 렌더링 시 store 인스턴스를 생성합니다.
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current) {
      // dispatch를 ThunkDispatch 타입으로 명확하게 캐스팅
      const dispatch = storeRef.current.dispatch as ThunkDispatch<
        any,
        any,
        AnyAction
      >;

      // refetchOnFocus, refetchOnReconnect 동작을 위한 listeners 설정
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return () => unsubscribe(); // 컴포넌트 언마운트 시 unsubscribe 호출
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
