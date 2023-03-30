// import teachers from 'shared/teachers';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import { Link } from 'react-router-dom';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useSelector } from 'react-redux';
// import css from './Individual.module.css';
// import { useDispatch } from 'react-redux';
// import { getName, getDate, getAll, getId } from 'redux/teacher-slice';
// const Individual = () => {
// const [startDate, setStartDate] = useState(null);
// const [teacher, setTeacher] = useState('');
// const [id, setId] = useState(0);
// const dispatch = useDispatch();
// const name = useSelector(({ teacher }) => teacher.name);

// const handleCLick = e => {
//   setTeacher(e.name);
//   setId(e.id);
// };
//   const onChangeDate = item => {
//     setStartDate(item);
//   };

// const handleSubmit = item => {
//   dispatch(getAll(item));
//   dispatch(getName(teacher));
//   dispatch(getId(id));
//   dispatch(getDate(startDate.toLocaleString()));
// };
//   const elements = teachers.map(item => {
//     return (
//       <li
//         key={item.id}
//         className={name === item.name ? `${css.list}` : `${css.none}`}
//       >
//         <h2>{item.name}</h2>
//         <p>Ціна за урок:{item.price}</p>
//         <button onClick={() => handleCLick(item)} id={item.id}>
//           This
//         </button>
//       </li>
//     );
//   });
//   return (
//     <>
//       <DatePicker
//         selected={startDate}
//         onChange={date => onChangeDate(date)}
//         minDate={new Date()}
//         showDisabledMonthNavigation
//       />
//       <h3>Choose</h3>
//       <ul>{elements}</ul>
//       <Link to="/succesful" onClick={() => handleSubmit(name)}>
//         Оформити замовлення
//       </Link>
//     </>
//   );
// };
// export default Individual;
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
import teachers from 'shared/teachers';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import css from './Individual.module.css';
import rock from '../../img/4608.webp';
import nia from '../../img/rock.jpg';
import { getName, getDate, getAll, getId } from 'redux/teacher-slice';
const Individual = () => {
  const [startDate, setStartDate] = useState(null);
  const [teacher, setTeacher] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const name = useSelector(({ teacher }) => teacher.name);

  const handleCLick = e => {
    setTeacher(e.name);
    setId(e.id);
  };

  const onChangeDate = item => {
    setStartDate(item);
  };
  const handleSubmit = item => {
    if (id === null || teacher === null || startDate === null) {
      alert('Ку-ку');
      return;
    }
    dispatch(getAll(item));
    dispatch(getName(teacher));
    dispatch(getId(id));
    dispatch(getDate(startDate.toLocaleString()));
  };
  const elements = teachers.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <img
          src={teacher !== item.name ? rock : nia}
          alt="rock"
          width="250px"
        />
        <h2>{item.name}</h2>
        <p>Price: {item.price}</p>
        <button
          onClick={() => handleCLick(item)}
          className={css.btn}
          id={item.id}
        >
          Хочу його
        </button>
      </li>
    );
  });
  return (
    <>
      <p>Забронювати столик на:</p>
      <DatePicker
        selected={startDate}
        onChange={date => onChangeDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
      />
      <h3 className={css.title}>Виберіть свого господаря</h3>
      <ul className={css.list}>{elements}</ul>
      <Link
        to="/succesful"
        onClick={() => handleSubmit(name)}
        className={css.submit}
      >
        Оформити замовлення
      </Link>
    </>
  );
};
export default Individual;
