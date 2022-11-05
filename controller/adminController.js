const getAllUsers = (req, res) => {
  res.status(200).json({ message: 'All users', app: 'Mantun' });
};

const getUser = (req, res) => {
  res.status(200).json({ message: 'Get specific user', app: 'Mantun' });
};

const newUser = (req, res) => {
  res.status(200).json({ message: 'Post a new user', app: 'Mantun' });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: 'Update users', app: 'Mantun' });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: 'Delete user', app: 'Mantun' });
};

export { getAllUsers, getUser, newUser, updateUser, deleteUser };
