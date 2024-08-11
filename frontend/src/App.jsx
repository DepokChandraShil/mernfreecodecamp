import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import Form from './pages/Form';
import SubmitedBy from './pages/SubmitedBy';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/books/create' element={<CreateBook />}/>
        <Route path='/books/details/:id' element={<ShowBook />}/>
        <Route path='/books/edit/:id' element={<EditBook />}/>
         <Route path='/books/delete/:id' element={<DeleteBook />}/>
         <Route path='/form' element={<Form />}/>
         <Route path='/form/submitedBy' element={<SubmitedBy />}/>
      </Routes>
    </div>
  )
}

export default App