import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/ui/firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
      <div className="app">
        <Header />
          <div className='app__body'>
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" exact element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
