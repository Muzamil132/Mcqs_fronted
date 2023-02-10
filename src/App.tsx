import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector,useAppDispatch } from './selector';
import { loadUser,registerUser } from './actions/user';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Home } from './screens/Home';
import QuestionsScreen from './screens/QuestionsScreen';
import AddQuestionScreen from './screens/AddQuestionScreen';

// import { fetchTodos } from './Reducers/count';

// import { selectCount } from './Reducers/count';
function App() {

  
  console.log(process.env.REACT_APP_PORT)

  
     
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route   path="/login" element={<LoginScreen/>}/>
      <Route   path="/register" element={<RegisterScreen/>}/>
      <Route   path="/" element={<Home/>}/>
      <Route   path="/questions/add" element={<AddQuestionScreen/>}/>
      <Route   path="questions/:questionType" element={<QuestionsScreen/>}/>
      
      
     </Routes>

      </BrowserRouter>

  
 
    </div>
  );
}

export default App;
