import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Lessons from './components/Lessons/Lessons';
import PagesMath from 'components/Lessons/Math';
import Succesful from 'components/Succesful/Succesful';
import { OrderPage } from 'pages/Math/OrderPage/OrderPage';
function UserRoutes() {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<Lessons />}>
          <Route path="/math" element={<PagesMath />}>
            <Route index element={<div>444444</div>} />
          </Route>
          <Route path="/succesful" element={<Succesful />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default UserRoutes;
