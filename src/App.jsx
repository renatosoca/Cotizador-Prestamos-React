import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotalPay } from './helpers';

function App() {
  //Estados
  const [ amount, setAmount ] = useState(10000);
  const [ months, setMonths ] = useState(6);
  const [ total, setTotal ] = useState(0);
  const [ monthly, setMonthly ] = useState(0);
  
  //Variables
  const min = 0;
  const max = 20000;
  const step = 100;

  //Cambios de Estados
  useEffect( () => {
    //Calcular el Total
    setTotal( calculateTotalPay(amount, months) );
  }, [amount, months]);
  useEffect( () => {
    //Calcular el Pago Mensual
    setMonthly( total / months );
  }, [total]);
  
  //Funciones de los Eventos
  function handleChange( e ) {
    setAmount(+e.target.value);
  };
  function handleClickDecrement() {
    const value = amount - step;
    if (value < min ) return;
    setAmount( value );
  };
  function handleClickIncrement() {
    const value = amount + step;
    if (value > max ) return;
    setAmount( value );
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <Button
          sign='-'
          fnEvent={handleClickDecrement}
        />
        <Button
          sign='+'
          fnEvent={handleClickIncrement}
        />
      </div>

      <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mt-5"
        min={min}
        max={max}
        step={step}
        value={amount}
        onChange={ handleChange }
      />

      <p className='text-center my-6 text-5xl font-extrabold text-indigo-600'>
        {formatMoney( amount )}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo </span>a pagar
      </h2>

      <select
        className='mt-5 p-2 w-full bg-white border border-gray-300 rounded-lg text-center text-lg font-bold text-gray-500'
        value={months}
        onChange={ e => setMonths( +e.target.value )}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de Pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{ months } Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{ formatMoney( total ) } Total a Pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{ formatMoney( monthly ) } Mensuales</p>
      </div>
    </div>
  );
};

export default App;
