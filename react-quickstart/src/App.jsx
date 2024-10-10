import './App.css'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

function MyApp() {
  let isLoggedIn = false;

  
  return (
    <>
      <h1>Welcome to my app</h1>
      {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
    </>
  )
}

export default MyApp