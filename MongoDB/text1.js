use mydbs

// db.people.insertMany(
// [
// {user_id : "AB001", age : 45, status : "A"},
// {user_id : "AB002", age : 25, status : "B"},
// {user_id : "AA003", age : 50, status : "A"},
// {user_id : "AA004", age : 35, status : "A"},
// {user_id : "BB001", age : 28, status : "B"}
// ]
// )

// db.people.insertMany(
// [
// {user_id : "bcd002", age : 45, status : "A"},
// {user_id : "bcd003", age : 25, status : "B"},
// {user_id : "bcd004", age : 50, status : "A"},
// ]
// )

// db.users.renameCollection("people")
// db.people.find({ }, { user_id: 1, status: 1, _id: 0 })
//db.people.find({ }, { user_id: 0, status: 0, _id: 0 })
//db.people.find({ status: "A", age: 50 })
//db.people.find({ $or: [ { status: "A(Document)" } , { age: 50 } ] })
//db.people.find({ }, {user_id: "bcd002", age: 1, status: 1, _id: 1})
//db.people.find({ }, {user_id: "bcd003", age: 1, status: 1, _id: 0})
// db.people.find({$or : [{user_id: "bcd004"}, {age: 28}]}) 
// db.people.find({ }, {user_id: "bcd004", age: 1, status: 1, _id: 0})
// db.people.find({age: {$gt: 20}}, {user_id: 1, _id: 0 })
// db.people.find({age:{$gt: 50},status: "A"}, {user_id: 1, _id: 0})
//db.people.find({age: {$lt: 60}}, {user_id: 1, _id:0})
// db.people.distinct("user_id")

//db.people.updateMany({age: {$gt: 25}}, {$set: {status: "C"}})
// db.people.updateOne({age : {$gt: 25}}, {$set: {status: "C"}})
// db.people.updateMany({status: "A"}, {$inc: {age: 3}}) 
// db.people.deleteOne({age: {$lt: 30 }})
