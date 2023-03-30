// import DatePicker from 'react-datepicker';
// import { useState, useSelector } from 'react';
// import { useDispatch } from 'react-redux';
// import { getDate, getName, getCount } from 'redux/teacher-slice';
// import { Link } from 'react-router-dom';
// import publicTeachers from 'shared/publicTeachers';
// import teachers from 'shared/teachers';
// import { getAll } from 'redux/teacher-slice';

// const Public = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const dispatch = useDispatch();
//   const name = useSelector(({ teacher }) => teacher.math.name);
//   const onChangeDate = item => {
//     setStartDate(item);
//     dispatch(getDate(item.toLocaleString()));
//   };
//   const handleCLick = item => {
//     dispatch(getName(item));
//   };
//   const handleSubmit = item => {
//     dispatch(getAll(item));
//   };

// const onChangeCount = e => {
//   dispatch(getCount(e.target.value));
// };
//   const elements = publicTeachers.map(item => {
//     return (
//       <li>
//         <h2>{item.name}</h2>
//         <button onClick={() => handleCLick(item.name)}>This</button>
//       </li>
//     );
//   });
//   return (
//     <>
//       <p>К-сть учнів</p>
//       <p>Price:</p>
//       <input type="text" name="count" onChange={onChangeCount} />
//       <ul>{elements}</ul>
//       <Link to="/succesful" onClick={() => handleSubmit(name)}>
//         Оформити замовлення
//       </Link>
//     </>
//   );
// };
// export default Public;
import publicTeachers from 'shared/publicTeachers';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import css from './Public.module.css';
import rock from '../../img/4608.webp';
import nia from '../../img/rock.jpg';
import { getName, getDate, getAll, getCount } from 'redux/teacher-slice';
const Public = () => {
  const [startDate, setStartDate] = useState(null);
  const [teacher, setTeacher] = useState('');
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const name = useSelector(({ teacher }) => teacher.name);

  const handleCLick = item => {
    setTeacher(item);
  };
  const onChangeDate = item => {
    setStartDate(item);
  };
  const onChangeCount = e => {
    if (e.target.value === '1') {
      alert('Ви не можете ввести одного учня для групових занять');
      return;
    }
    if (e.target.value > 6) {
      alert('Не може бути більше 6 учнів на одному занятті!');
      return;
    }
    setCount(e.target.value);
  };
  const handleSubmit = item => {
    dispatch(getAll(item));
    dispatch(getName(teacher));
    dispatch(getDate(startDate.toLocaleString()));
    dispatch(getCount(count));
  };
  let secondPrice;
  switch (count) {
    case '2':
      secondPrice = 180;
      break;
    case '3':
      secondPrice = 190;
      break;
    case '4':
      secondPrice = 200;
      break;
    case '5':
      secondPrice = 210;
      break;
    case '6':
      secondPrice = 220;
      break;
    default:
  }
  const elements = publicTeachers.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <img
          src={teacher !== item.name ? rock : nia}
          alt="rock"
          width="250px"
        />
        <h2>{item.name}</h2>
        <button onClick={() => handleCLick(item.name)} className={css.btn}>
          Хочу його
        </button>
      </li>
    );
  });
  return (
    <>
      <input
        onChange={onChangeCount}
        placeholder="Введість к-сть учнів"
        className={css.input}
      />
      <p>Ціна за проведений вечір:{secondPrice}</p>
      <p>Забронювати столик на:</p>
      <DatePicker
        selected={startDate}
        onChange={date => onChangeDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
      />
      <h3 className={css.title}>Виберіть свого господаря</h3>
      <ul className={css.list}>{elements}</ul>
      <Link to="/succesful" onClick={() => handleSubmit(name)}>
        Оформити замовлення
      </Link>
    </>
  );
};
export default Public;
