import { useState, useEffect } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";

export interface CardNumberFormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders: string[];
  cardNumbers?: string[];
  expirationDate?: string[];
  userName?: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<string[]>>;
  setExpirationDate?: React.Dispatch<React.SetStateAction<string[]>>;
  setUserName?: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardNumberForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardNumbers,
  setCardNumbers,
}: CardNumberFormProps) => {
  const [, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트하는 함수
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사하는 로직
  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "4자리의 숫자를 입력해주세요.");
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={4}
      data={cardNumbers || []}
      setData={setCardNumbers || (() => [])}
      setErrorMessage={setErrorMessage}
      setAllInputValid={(isValid) => updateInputValidity(index, isValid)}
      validationRule={(value) => /^[0-9]{4}$/.test(value)}
    />
  ));

  return <FormElement labelContent={labelContent} inputs={inputs} errorMessage={errorMessage} />;
};

export default CardNumberForm;
