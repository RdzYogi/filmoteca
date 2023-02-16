
async function userSignOut(authToken) {
  let result = false
  await fetch('/users/sign_out', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', "Authorization": authToken},
  })
  .then(response => {
    if (response.ok) {
      result = true
    } else {
      throw new Error('Something went wrong');
    }
  })
  return result
}

export default userSignOut
