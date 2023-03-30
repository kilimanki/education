import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSubject } from 'redux/teacher-slice';
import css from './Lessons.module.css';

const Lessons = () => {
  const dispatch = useDispatch();
  const handleCLick = e => {
    dispatch(getSubject(e.target.id));
  };
  return (
    <>
      <Link to="/">Logo</Link>
      <ul className={css.list}>
        <Link
          to="/math"
          id="math"
          onClick={handleCLick}
          className={css.subject}
        >
          Математика
        </Link>
        <Link
          to="/chemical"
          id="chemistry"
          onClick={handleCLick}
          className={css.subject}
        >
          Хімія
        </Link>
        <Link to="/english" className={css.subject}>
          англійська мова
        </Link>
        <Link to="/ukraine" className={css.subject}>
          українська мова
        </Link>
        <Link to="/phis" className={css.subject}>
          фізика
        </Link>
      </ul>
      <Link to="/order">Переглянути всі замовлення</Link>

      <Outlet />
    </>
  );
};
export default Lessons;
