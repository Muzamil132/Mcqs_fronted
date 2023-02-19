import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector,useAppDispatch } from './selector';
import { loadUser,registerUser } from './actions/user';
import DisAbledQuestionsScreen from './screens/disAbledQuestionsScreen';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Home } from './screens/Home';
import QuestionsScreen from './screens/QuestionsScreen';
import AddQuestionScreen from './screens/AddQuestionScreen';
import { RequireAuth } from './components/privateRoute';
import { AdminRoutes } from './components/AdminRoute';
import UserProfile from './screens/UserProfile';
import EditQuestionScreen from './screens/EditQuestionScreen';


function App() {

  
  console.log(process.env.REACT_APP_PORT)

  
     
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route   path="/login" element={<LoginScreen/>}/>
      <Route   path="/register" element={<RegisterScreen/>}/>
      <Route   path="/questions/:questionType" element={<QuestionsScreen/>}/>
      <Route   path="/questions/disabledQuestions" element={<AdminRoutes>
        <DisAbledQuestionsScreen/>
      </AdminRoutes>}/>
      <Route   path="/questions/add" element={
       <RequireAuth>
      <AddQuestionScreen/>
      </RequireAuth>
      
      }/>
       <Route   path="/questions/edit/:id" element={
       <RequireAuth>
      <EditQuestionScreen/>
      </RequireAuth>
      
      }/>
      <Route   path="/profile/:userId" element={
       <RequireAuth>
      <UserProfile/>
      </RequireAuth>
      
      }/>
     
     
      
     </Routes>

      </BrowserRouter>

  
 
    </div>
  );
}

export default App;
