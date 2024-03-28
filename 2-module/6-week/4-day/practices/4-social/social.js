// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
		this.currentID++;
		this.users[this.currentID] = { id: this.currentID, name };
		this.follows[this.currentID] = new Set();
		return this.currentID;
  }

  getUser(userID) {
	return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
		if(!this.users[userID1] || !this.users[userID2]) return false;
		this.follows[userID1].add(userID2);
		return true;
  }

  getFollows(userID) {
		return this.follows[userID];
  }

  getFollowers(userID) {
		const followers = new Set();

		for(let id in this.follows){
			if(this.follows[id].has(userID)){
				followers.add(+id);
			};
		};

		return followers;
  }

  getRecommendedFollows(userID, degrees) {
		const q = [[userID]];
		const v = new Set().add(userID);
		const res = [];

		while(q.length){
			//1. get the current path
			const currPath = q.shift();
			const currId = currPath[currPath.length - 1];

			//2. do the thing
			if(currPath.length > degrees + 2) break;
			if(currPath.length > 2) res.push(currId);

			//3. get the neighbors
			const neighbors = this.follows[currId];
			for(let person of neighbors){
				if(!v.has(person)){
					v.add(person);
					q.push([...currPath, person]);
				};
			}
		};

		return res;
  }
}

module.exports = SocialNetwork;
