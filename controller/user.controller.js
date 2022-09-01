const users = [
  {
    id: 1,
    name: "morshed Ahmed",
    gender: "male",
    contact: "01900000",
    address: "bogura",
    photoUrl:
      "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
  },
  {
    id: 2,
    name: "morshed Ahmed",
    gender: "male",
    contact: "01900000",
    address: "bogura",
    photoUrl:
      "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
  },
  {
    id: 3,
    name: "morshed Ahmed",
    gender: "male",
    contact: "01900000",
    address: "bogura",
    photoUrl:
      "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
  },
  {
    id: 4,
    name: "morshed Ahmed",
    gender: "male",
    contact: "01900000",
    address: "bogura",
    photoUrl:
      "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
  },
  {
    id: 5,
    name: "morshed Ahmed",
    gender: "male",
    contact: "01900000",
    address: "bogura",
    photoUrl:
      "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
  },
];

module.exports.randomUser = (req, res) => {
  res.send(users);
};

module.exports.allUser = (req, res) => {
  res.send(users);
};

module.exports.addUser = (req, res) => {
  const newData = req.body;
  users.push(newData);
  res.send(users);
};

module.exports.userDetails = (req, res) => {
  const { id } = req.params;
  const filter = users.find((user) => user.id === Number(id));
  res.send(filter);
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const newData = users.find((user) => user.id === Number(id));
  newData.id = id;
  newData.name = req.body.name;
  newData.gender = req.body.gender;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.photoUrl = req.body.photoUrl;

  res.send(newData);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = users.filter((user) => user.id !== Number(id));

  res.send(filter);
};
