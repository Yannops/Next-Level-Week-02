import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import TeacherList from './pages/TeachersList';
import TeacherForm from './pages/TeachersForm';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/study" exact component={TeacherList} />
            <Route path="/give-classes" exact component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;