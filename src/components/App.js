import React, { useContext } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const obj = {name:"Newton", age:3};
const ThemeContext = React.createContext(obj);
const App = () => {

  const value = useContext(ThemeContext);

  return (
    <div id="main">
        <UserProfile value = {value} />
      
    </div>
  )
}


export default App;
// export {UserContext}
