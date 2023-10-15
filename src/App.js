import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  function handleAddFriend(friend) {
    setFriendList([...friendList, friend]);
  }
  return (
    <div className="app">
      <FriendsList friendList={friendList} />
      <SpiltBill friendList={friendList} />
      <Form friendList={friendList} onHandleAddFriend={handleAddFriend} />
    </div>
  );
}

function FriendsList({ friendList }) {
  return (
    <ul className="sidebar">
      {friendList.map((friend) => (
        <Friend
          name={friend.name}
          id={friend.id}
          key={friend.id}
          image={friend.image}
        />
      ))}
    </ul>
  );
}

function Friend({ name, image, id }) {
  return (
    <li>
      <img src={`${image}`} alt="" />
      <h3>{name}</h3>
      <p>You and {name} are even</p>
      <button className="button">Select</button>
    </li>
  );
}

function Form({ friendList, onHandleAddFriend }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  let newFriend;
  function handleName(e) {
    setName(e.target.value);
  }

  function handleImgUrl(e) {
    setImgUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imgUrl) return;
    newFriend = {
      name: name,
      image: imgUrl,
    };

    onHandleAddFriend(newFriend);
    console.log(friendList);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>👭 Friend's name: </label>
      <input
        type="text"
        onChange={(e) => handleName(e)}
        placeholder="Enter friend's name"
      ></input>

      <label>📷 Image's URL</label>
      <input onChange={(e) => handleImgUrl(e)} type="text"></input>

      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
}

function SpiltBill() {
  return (
    <div className="sidebar">
      <form className="form-split-bill">
        <h2>Split a bill with X</h2>
        <label>💰 Bill's value </label>
        <input type="text" value={""}></input>
        <label>👨 Your expense </label>
        <input type="text" value={""}></input>
        <label>👭 Friend's expense </label>
        <input type="text" value={""}></input>
        <label>🤑 Who is paying the bill </label>
        <select>
          <option value={"you"}>You</option>
          <option value={"X"}>X</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    </div>
  );
}
