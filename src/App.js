import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [usersList, setUsersList] = useState([]);

    const onAddUser = (uName, uAge) => {
        setUsersList(prevUserList => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}  ]
        })
    }
  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
