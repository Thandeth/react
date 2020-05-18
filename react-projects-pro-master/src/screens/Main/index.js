import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [usersList, deleteSelectedUser] = useState(usersInitial);

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const getCurrentlySelectedUser = (user) => {
    console.log(user.idUser);
    return user.idUser;
  };

  const deleteUser = (e) => {
    deleteSelectedUser(usersList.splice(users.idUser, 1));
  };

  // removePeople(e) {
  //   var array = [...this.state.users];
  //   var index = array.indexOf(e.target.value);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({users: array});
  //   }
  // };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <button type="button" onClick={deleteUser} className="btn">
          Usuń użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          getSelectedUser={getCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
      </div>
    </>
  );
}
