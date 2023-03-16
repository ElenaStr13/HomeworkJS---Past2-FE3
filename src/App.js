import './App.css';
import React from 'react';
import Photo from './components/photo/Photo';
import Form from './components/form/Form';
import { Formik } from 'formik';

class App extends React.Component {
    render() {
    return <div className='registration-form'>
        <Photo></Photo>
        <Form></Form>
    </div>
}
}

export default App;

