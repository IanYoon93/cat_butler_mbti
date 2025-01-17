import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import QuestionPage from '../pages/QuestionPage';
import ResultPage from '../pages/ResultPage';

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default Router;
