const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName :'a'}
    user['lastName'] ='b'
    return user;
  }
}

module.exports = functions;