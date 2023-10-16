// 언팩으로 사용하고 싶으면 함수명과 이벤트핸들러의 명이 같아야함.
// onClick 이벤트에 주고 싶으면 const onClick = () => {} 이런식

import { useState } from "react";

// vaild 특정 문자를 걸러주는 함수.
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const inputValue = event.target.value;
    // 문자길이를 확인하는 변수
    let checkValid = true;
    // validator의 타입이 function이라면 true ,false값이 checkVaild에 들어감.
    if (typeof validator === "function") {
      checkValid = validator(value);
    }
    // inputValue가 한번에 2개가 지워지는 건. inputValue에서는 지워젔는데
    // setValue 조건이 true가 되지 않아서 반영이 안되고 있다가 한번 더 지워면 true로 조건이 바뀌어서
    // setValue가 작동이 되는 것.
    if (checkValid || inputValue.length < value.length) {
      setValue(inputValue);
    }
    // console.log("inputValue-> ", inputValue, "value -> ", value);
    // console.log(checkValid);
    // console.log(
    //   inputValue.length,
    //   "<",
    //   value.length,
    //   "//",
    //   inputValue.length < value.length
    // );
  };
  return { value, onChange };
};
