
async function userSignIn(user) {
  const data = {user: user}
  const result = {
    user: {},
    authToken: '',
    isLogged: false,
    isAdmin: false
  }

  await fetch('/users/sign_in', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => {
    // console.log(response)
    if (response.ok) {
      // console.log(response.headers.get('Authorization').split(' ')[1])
      result.authToken = response.headers.get('Authorization')
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(json => {
    // console.log(json)
    result.user = json.user
    result.user ? result.isLogged = true : result.isLogged = false
    if (json.user.admin === true) {
      result.isAdmin = true
    }
  })
  .catch(error => {
  });
  return result
}

export default userSignIn
