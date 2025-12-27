import { useEffect, useState } from "react";
import {getUsers} from "../../services/userservice.js"
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./Users.css"

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  return (
    <div className="users">
        <Header></Header>
        <div className="users-container">
          <div className="title">
            <h2>Users List</h2>
            <hr />
          </div>
          <div className="users-content">
            {users.map(user => (
                <div key={user.id} className="card">
                  <div className="user-name">
                    <h4><strong>{user.name}</strong></h4>
                    <p>@{user.username}</p>
                  </div>
                  <hr />
                  <div className="user-information">
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
}
