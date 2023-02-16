
async function userCheckToken(authToken) {
  const result = {isLogged: false, isAdmin: false}
  await fetch('/users/sign_in', {
    method: 'GET',
    headers: {'Content-Type': 'application/json', "Authorization": authToken},
  })
  .then(response => {
    if (response.ok) {
      result.isLogged = true
      return response.json();
    }
  })
  .then(json => {
    // check if user is admin
    if (json.user.admin === true) {
      result.isAdmin = true
    }
  })
  return result
}

export default userCheckToken
