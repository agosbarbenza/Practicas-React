import React, { useState } from 'react';
import UserOutput from './userOutput/UserOutput';
import UserInput from './userInput/UserInput';
import './userOutput/userOutput.css';

const App = () => {
  const [usersState, usersSetState] = useState({  //primero hay que llamar a useState y definir el estado inicial.
    users: [
      { user: "Bilbo" },
    ]
  })


  const switchUser2 = (e) => {
    usersSetState({ //para cambiar de estado llamo a la función que declaré arriba.
      users: [
        { user: e.target.value },
      ]
    })
  }

  const style = {
    color: "red",
    fontWeight: "bolt",
    fontSize: "1rem"
  }
  return (
    <div>
      <UserInput user={usersState.users[0].user} change={switchUser2} />
      <UserOutput style={style} user={usersState.users[0].user} />
      <UserOutput style={style} user={usersState.users[0].user} />
    </div>
  )
}

export default App;
