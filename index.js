const friendList = []
let addFriendChoice = true
console.log('Ajoutons un premier ami')
while (addFriendChoice) {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  friendList.push({ lastName: lastNameFriend, firstName: firstNameFriend })

  addFriendChoice = prompt('Souhaitez-vous ajouter un autre ami? O ou N?') === 'O'
}

console.log('Retirons un ami de votre liste')
const lastNameFriend = prompt('Quel est son nom?')
const firstNameFriend = prompt('Quel est son prénom?')
const friendToRemove = { lastName: lastNameFriend, firstName: firstNameFriend }
// A compléter

console.log("Voici votre liste d'amis:", friendList)
for (let i = 0; i < friendList.length; i++) {
  if (friendToRemove.lastName === friendList[i].lastName && friendToRemove.firstName === friendList[i].firstName) {
    friendList.splice(i, 1)
    break
  }
}
function addFriend (friends) {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  friends.push({ lastName: lastNameFriend, firstName: firstNameFriend })
  return friends
}
function removeFriend (friends) {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  const friendToRemove = { lastName: lastNameFriend, firstName: firstNameFriend }
  for (let i = 0; i < friends.length; i++) {
    if (friendToRemove.lastName === friends[i].lastName && friendToRemove.firstName === friends[i].firstName) {
      friends.splice(i, 1)
      break
    }
  }
  return friends
}
function removeFriend (friends) {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  const friendToRemove = { lastName: lastNameFriend, firstName: firstNameFriend }
  for (let i = 0; i < friends.length; i++) {
    if (JSON.stringify(friendToRemove) === JSON.stringify(friends[i])) {
      friends.splice(i, 1)
      break
    }
  }
  return friends
}
function infoFriend () {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  return { lastName: lastNameFriend, firstName: firstNameFriend }
}
function infoFriend () {
  const lastNameFriend = prompt('Quel est son nom?')
  const firstNameFriend = prompt('Quel est son prénom?')
  return { lastName: lastNameFriend, firstName: firstNameFriend }
}

function addFriend (friends) {
  friends.push(infoFriend())
  return friends
}

function removeFriend (friends) {
  const friendToRemove = infoFriend()
  for (let i = 0; i < friends.length; i++) {
    if (JSON.stringify(friendToRemove) === JSON.stringify(friends[i])) {
      friends.splice(i, 1)
      break
    }
  }
  return friends
}
