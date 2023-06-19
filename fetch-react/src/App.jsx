import "./style.css";
import { useEffect, useState } from "react";
import _ from "lodash";
import Modal from "./Modal";

function App2() {
  const [data, setData] = useState({
    results: [],
  });

  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");

  const [store, setStore] = useState({
    modalProperty: {
      showModal: false,
      title: "",
    },
    modalText: "",
  });

  const { results } = data;

  // the async function inside useEffect is using IIFE (Immediately Invoked Function Expression)
  useEffect(() => {
    //   fetch("https://randomuser.me/api/?results=32")
    //     .then((data) => {
    //       return data.json();
    //     })
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   // setData(parsedData);
    //
    (async () => {
      const rawData = await fetch("https://randomuser.me/api/?results=32");
      const data = await rawData.json();
      setData(data);
      setUsers(data.results || []);
    })();
  }, []);

  useEffect(() => {
    const newUsers = results?.filter((user) => {
      const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      if (fullName.toLowerCase().replaceAll(" ", "").includes(searchData)) {
        return true;
      }
      return false;
    });
    setUsers(newUsers || []);
    console.log(newUsers);
  }, [results, searchData]);

  return (
    <div id="app">
      <h1>List of random profiles</h1>

      <div className="container">
        <input
          id="filter"
          className="form-control mb-3 form-control-lg"
          placeholder="Filter the list of profiles (title, first name, last name)..."
          onChange={(event) => {
            setSearchData(event.target.value.toLowerCase().replaceAll(" ", ""));
          }}
        />
        <div className="users row">
          {users.map((item, index) => {
            const fullName = `${item.name.title} ${item.name.first} ${item.name.last}`;
            const profileDetails = `Gender: ${users[index].gender}\n
            Age: ${users[index].dob.age}\n
            Location: ${users[index].location.street.number} ${users[index].location.street.name}\n
            City: ${users[index].location.city}\n
            State: ${users[index].location.state}\n
            Country: ${users[index].location.country}\n
            Email: ${users[index].email}
            `;
            return (
              <div className="col-2 user" key={`item-${index}`}>
                <img src={item.picture.large} alt={fullName}></img>
                <h3>{fullName}</h3>
                <button
                  key={`modal-${index}`}
                  onClick={() => {
                    const newStore = _.cloneDeep(store);
                    _.set(newStore, `modalProperty.showModal`, true);
                    _.set(newStore, `modalProperty.title`, fullName);
                    _.set(newStore, `modalText`, profileDetails);
                    setStore(newStore);
                  }}
                >
                  Show details
                </button>
                <Modal store={store} setStore={setStore} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App2;
