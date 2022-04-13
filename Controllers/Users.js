import express from "express";
let users = [
  {
    name: "vijay",
    role: "fronty",
    status: "active",
    id: 1,
  },
  {
    name: "malvin",
    role: "fronty",
    status: "active",
    id: 2,
  },
  {
    name: "denvi",
    role: "fronty",
    status: "active",
    id: 3,
  },
  {
    name: "alex",
    role: "fronty",
    status: "active",
    id: 4,
  },
];
export const getUsers = (req, res) => {
  //   res.send("welcome to users page");
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`user ${user.name} added successfully`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userToDelete = users.filter((user) => user.id == id);
  users = users.filter((user) => user.id != id);
  res.send(`user ${userToDelete[0].name} has delted successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const newUser = req.body;
  const updatedUsers = users.filter((user) => user.id != id);
  users = [...updatedUsers, newUser].sort((a, b) => a.id - b.id);
  res.send(`user with id ${id} is updated successfully`);
};

export const editUser = (req, res) => {
  const { id } = req.params;
  let findUser = users.filter((user) => user.id == id);
  const { name, role, status } = req.body;
  findUser[0].name = name && name;
  findUser[0].role = role && role;
  findUser[0].status = status && status;
  users = [...users.filter((user) => user.id != id), findUser[0]];
  res.send(users);
};
