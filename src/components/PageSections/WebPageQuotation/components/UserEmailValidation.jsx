import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/user/UserContext';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { iconsList } from '@/components/icons';

const UserEmailValidation = () => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  const [validationCodeErrorMsg, setValidationCodeErrorMsg] = useState('');
  const [validateCodeBtn, setValidateCodeBtn] = useState(true);
  const [sendRequestBtn, setSendRequestBtn] = useState(false);
  const { BiPaperPlane } = iconsList;

  const router = useRouter();

  const handleInputChange = (event, index) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
    if (index < 3 && event.target.value !== '') {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  /** Compare global context uniqueCode and input user value */
  const compareValidationCode = () => {
    const inputUserCode = `${inputValues[0]}${inputValues[1]}${inputValues[2]}${inputValues[3]}`;
    const contextUserCode = state.validationCode.uniqueCode;

    if (inputUserCode !== contextUserCode) {
      setValidationCodeErrorMsg('Código de verificación no válido');
      return;
    }

    //success
    setValidationCodeErrorMsg('');
    setValidateCodeBtn(false);
    setSendRequestBtn(true);
  };

  const onValidateClick = () => {
    compareValidationCode();
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    dispatch({
      type: 'UPDATE_USER_AUTH',
      payload: [state.user],
    });
    router.push('/web-demos');
  };

  return (
    <div className="bg-white p-5">
      <div className="mb-5 text-center">
        <small className="text-sm font-light text-gray-500">
          Ingresa el código de verificación{' '}
        </small>
      </div>

      <form onSubmit={onFormSubmit}
        className="w-full bg-white p-5"

      >
        <div className="flex flex-row">
          <input
            type="text"
            id="input-0"
            value={inputValues[0]}
            onChange={(event) => handleInputChange(event, 0)}
            autoFocus
            className="mx-1 text-center text-xl px-4 py-6 w-[25%] border-gray-300 rounded-md focus:outline-none border-2 focus:shadow-sm focus:border-amber-300"
          />
          <input
            type="text"
            id="input-1"
            value={inputValues[1]}
            onChange={(event) => handleInputChange(event, 1)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('input-2').focus();
              }
            }}
            className="mx-1 text-center text-xl px-4 py-6 w-[25%] border-gray-300 rounded-md focus:outline-none border-2 focus:shadow-sm focus:border-amber-300"
          />
          <input
            type="text"
            id="input-2"
            value={inputValues[2]}
            onChange={(event) => handleInputChange(event, 2)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('input-3').focus();
              }
            }}
            className="mx-1 text-center text-xl px-4 py-6 w-[25%] border-gray-300 rounded-md focus:outline-none border-2 focus:shadow-sm focus:border-amber-300"
          />
          <input
            type="text"
            id="input-3"
            value={inputValues[3]}
            onChange={(event) => handleInputChange(event, 3)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById('submit-button').click();
              }
            }}
            className="mx-1 text-center text-xl px-4 py-6 w-[25%] border-gray-300 rounded-md focus:outline-none border-2 focus:shadow-sm focus:border-amber-300"
          />
        </div>

        <div className="my-5">
          {validationCodeErrorMsg && (
            <div
              className="flex p-4 mb-4 text-sm rounded-lg bg-red-50 text-red-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{validationCodeErrorMsg},</span>{' '}
                intenta nuevamente
              </div>
            </div>
          )}
        </div>

        <div className="mb-5 text-center">
          <small className="text-sm font-light text-gray-500">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              Revisa tu bandeja de entrada
            </span>
          </small>
        </div>

        {validateCodeBtn && (
          <div className="flex items-center justify-center mt-10">
            <Button onClick={onValidateClick}>Validar código</Button>
          </div>
        )}
{/* 
        {sendRequestBtn && (
          <div className="flex items-center justify-center">
            <Button type="submit" className="flex items-center justify-center">
              Ver Demos
            </Button>
          </div>
          
        )} */}

{sendRequestBtn && (
          <div className="flex items-center justify-center">
            <Button type="submit" className="flex items-center justify-center">
              Ver Demos
            </Button>
          </div>)}
          
      </form>
    </div>
  );
};

export default UserEmailValidation;
