import { useSelector } from 'react-redux';

export const OrderPage = () => {
  const allTeachers = useSelector(({ teacher }) => teacher.math);
  const typeOfLesson = useSelector(({ teacher }) => teacher.math.type);

  const elements = allTeachers.map(item => {
    const id = item.id;
    const count = item.count;

    let price;
    let secondPrice;
    switch (count) {
      case '1':
        secondPrice = 170;
        break;
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
    switch (id) {
      case '1':
        price = 175;
        break;
      case '2':
        price = 195;
        break;
      case '3':
        price = 135;
        break;
      case '4':
        price = 200;
        break;
      default:
    }
    return (
      <>
        <li key={item.name}>
          <h2>{item.subject}</h2>
          <p> {item.type}</p>
          <p>{secondPrice}</p>
          <p>{price}</p>

          <p>{item.name}</p>
          <p>{item.date}</p>

          {item.count}
        </li>
      </>
    );
  });
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};
