const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  return names.forEach(console.log);
};

const logEachUserBio = (users) => {
  return users.forEach((e) => console.log(e.bio));
};

const users = [
  { name: "Alice", bio: "Alice is a software engineer" },
  { name: "Bob", bio: "Bob is a teacher" },
  { name: "Charlie", bio: "Charlie is a student" },
  { name: "Diana", bio: "Diana is a doctor" },
];

logEachUserBio(users);

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
