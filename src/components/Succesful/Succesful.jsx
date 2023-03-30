import { useSelector } from 'react-redux';
import { getCount, getName, getDate } from 'redux/teacher-slice';

const Succesful = () => {
  return (
    <>
      {getName === '' || getCount === '' || getDate === '' ? (
        <h2>Вітаємо, ви успішно замовили послугу</h2>
      ) : (
        <p>Повторіть спробу та введіть всі дані</p>
      )}
    </>
  );
};
export default Succesful;
