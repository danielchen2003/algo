// class User {
//   constructor() {
//     this.totalProgress = 0
//   }

//   get progress() {
//     return this.rank < 8 ? this.totalProgress % 100 : 0
//   }

//   get rank() {
//     let rank = Math.floor(this.totalProgress / 100) - 8
//     return rank >= 0 ? rank + 1 : rank
//   }

//   incProgress(rank) {
//     if (rank === 0 || rank < -8 || rank > 8) {
//       throw new Error("Rank out of bounds")
//     }

//     if (rank > 0 && this.rank < 0) {
//       rank--
//     }

//     const diff = rank - this.rank
//     this.totalProgress += diff > 0 ? 10 * diff * diff : diff < 0 ? 1 : 3
//   }
// }

// //  初始化为0  征服+分
// // var user = new User()
// // console.log(user.rank) // => -8
// // user.progress // => 0
// // user.incProgress(-7)
// // user.progress // => 10
// // user.incProgress(-5) // will add 90 progress
// // // user.progress # => 0 // progress is now zero
// // // user.rank # => -7 // rank was upgraded to -7
// // user.incProgress(-6)
// // user.incProgress(8)
// // const a = user.progress
// // const b = user.rank
// // console.log(a, b)

// class User {
//   constructor() {
//     this.totalProgress = 0
//   }

//   get progress() {
//     return this.rank < 8 ? this.totalProgress % 100 : 0
//   }

//   get rank() {
//     const upgraded = Math.floor(this.totalProgress / 100) - 8
//     return upgraded >= 0 ? upgraded + 1 : upgraded
//   }

//   incProgress(rank) {
//     if (rank ==0||rank < -8 || rank > 8) throw new err("outofbountry")
//     if (rank > 0 && this.rank < 0) {
//       rank--
//     }

//     const diff = rank - this.rank
//     this.totalProgress += diff > 0 ? 10 * diff * diff : diff < 0 ? 1 : 3
//   }

// }

var User = function () {
  ////////// Hidden //////////
  var hierarchy = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
  var progress = { min: 0, max: 100 }
  var rank = { min: hierarchy[0], max: hierarchy[hierarchy.length - 1] }

  progress.acceleration = function (userRank, activityRank) {
    var d = rank.difference(userRank, activityRank)
    if (d === -1) return 1
    else if (d === 0) return 3
    else if (d > 0) return 10 * d * d
    else return 0
  }
  progress.update = function (user, acceleration) {
    user.progress += acceleration
    user.progress =
      user.rank === rank.max ? progress.min : user.progress % progress.max
  }
  rank.difference = function (userRank, activityRank) {
    return hierarchy.indexOf(activityRank) - hierarchy.indexOf(userRank)
  }
  rank.update = function (user, acceleration) {
    var d = ~~((user.progress + acceleration) / progress.max)
    var i = hierarchy.indexOf(user.rank) + d
    if (i >= hierarchy.length) i = hierarchy.length - 1
    user.rank = hierarchy[i]
  }
  rank.valid = function (r) {
    return hierarchy.indexOf(r) > -1
  }

  ////////// Exposed //////////
  var User = function () {
    this.progress = progress.min
    this.rank = rank.min
  }
  User.prototype.incProgress = function (activityRank) {
    if (!rank.valid(activityRank))
      throw new Error("Invalid activity rank given")
    var accel = progress.acceleration(this.rank, activityRank)
    rank.update(this, accel)
    progress.update(this, accel)
  }
  return User
}.call()
