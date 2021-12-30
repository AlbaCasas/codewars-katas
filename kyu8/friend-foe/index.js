function friend(friends) {
  return friends.filter((world) => world.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
