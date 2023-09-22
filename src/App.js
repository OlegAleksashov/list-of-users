import React, { useState } from "react";
import Header from '../src/components/Header'
import Users from '../src/components/Users';
import AddUser from "./components/AddUser";


function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        firstname: 'Greg',
        secondname: 'Krissel',
        bio:'Spinner of Love',
        age: 58,
        isHappy: true
    },
    {
        id: 2,
        firstname: 'Brayn',
        secondname: 'Holland',
        bio:'Spinner of Hate',
        age: 57,
        isHappy: false
    }
]);

const addUser = (user) => {
  const id = users.length + 1;
  setUsers([...users, {id, ...user}])
  console.log(user)
}

const deleteUser = (id) => {
   setUsers(users.filter((el) => el.id !== id))
}

  return(
    <div className="name">
      <Header title='List of users' />
      <main>
        <Users users={users} onDelete={deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd={addUser}/>
      </aside>
    </div>
  );
}

export default App;
