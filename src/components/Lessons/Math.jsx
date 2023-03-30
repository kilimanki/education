import Select from 'react-select';
import { useState } from 'react';
import Individual from 'components/Individual/Individual';
import Public from 'components/Public/Public';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getType } from 'redux/teacher-slice';
const Math = () => {
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  const options = [
    { value: 'Індивідуальний урок', label: 'Індивідуальний урок' },
    { value: 'Груповий урок', label: 'Груповий урок' },
  ];
  const handleChange = e => {
    dispatch(getType(e.value));
    setState(e.value);
  };
  return (
    <>
      <h2>Math</h2>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Обрати тип заняття..."
      />
      {state === 'Індивідуальний урок' && <Individual />}
      {state === 'Груповий урок' && <Public />}
    </>
  );
};
export default Math;
