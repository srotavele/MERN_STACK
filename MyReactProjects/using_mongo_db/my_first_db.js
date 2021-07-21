// start HERE create DB
use my_first_db

// CREATE collection of STUDENTS
db.createCollection("student")

// create 5 students with required info
db.students.insert({name: "Karl", home_state: "Solid", lucky_number: 43, birthday: {month: 01 , day:01 , year:01 }})
db.students.insert({name: "Murray", home_state: "Gas", lucky_number: 44, birthday: {month: 02 , day:02 , year:02 }})
db.students.insert({name: "Juice", home_state: "Liquid", lucky_number: 45, birthday: {month: 03 , day:03 , year:03 }})
db.students.insert({name: "Dutch", home_state: "Plasma", lucky_number: 46, birthday: {month: 04 , day:04 , year:04 }})
db.students.insert({name: "Blaze", home_state: "California", lucky_number: 47, birthday: {month: 05 , day:05 , year:05 }})

// get all students
db.students.find()

// retrieve all students who are from California ("Blaze")
db.students.find({home_state : "California"})

// Get all students whose luckly number is > 3 (Everyone)
db.students.find({lucky_number:{$gt:3}})

// get all students whose lucky number is less than or equal to 10 (Nobody - no result returned)
db.students.find({lucky_number:{$lte:10}})

// get all students whose lucky number is between 1 & 9 (Nobody again)
db.students.find({lucky_number: {$gte:1,$lte:9}}) 

// add 'interests' field to each student collection MUST be an ARRAY.
// Add the following entries: coding','brunch','MongoDB'
db.students.updateMany({}, {$set: {"interests":[
    'coding', 'brunch', 'MongoDB'
]}})

// add unique interests for each student into their interest arrays. I feel like there must be a better way...
db.students.updateOne({"name":"Karl"}, {$push:{"interests":"Oatmeal"}})
db.students.updateOne({"name":"Karl"}, {$push:{"interests":"Klezmer Music"}})
db.students.updateOne({"name":"Karl"}, {$push:{"interests":"Movie Subtitles"}})
db.students.updateOne({"name":"Murray"}, {$push:{"interests":"Vagabonding"}})
db.students.updateOne({"name":"Murray"}, {$push:{"interests":"Hula Hooping"}})
db.students.updateOne({"name":"Juice"}, {$push:{"interests":"Breakdancing"}})
db.students.updateOne({"name":"Juice"}, {$push:{"interests":"Ad Libs"}})
db.students.updateOne({"name":"Dutch"}, {$push:{"interests":"Thoughtography"}})
db.students.updateOne({"name":"Dutch"}, {$push:{"interests":"Christian Metal"}})
db.students.updateOne({"name":"Blaze"}, {$push:{"interests":"Tubes"}})
db.students.updateOne({"name":"Blaze"}, {$push:{"interests":"Brews"}})

// add 'taxes' into someone's interests
db.students.update({name: "Murray"}, {$push: {interests: "Taxes"}})
// remove 'taxes' interest
db.students.update({name: "Murray"}, {$pop: {interests: (1)}})

// remove all students from California (Bye Blaze)
db.students.remove({home_state:"California"})

// remove a student by name
db.students.remove({name:"Murray"})

// remove ONLY one student whose lucky number is < 5 (Bye, Juice)
db.students.remove({lucky_number:{$gte:45}},true)

// add a field to each student collection called 'number_of_belts' and set to 0.
db.students.updateMany({}, {$set: {"number_of_belts":0}})

// increment belts by 1 for all students in Washington but I don't have Washington people. Updated Dutch / Plasma .
db.students.updateMany({home_state:""}, {$inc:{"number_of_belts":1}})

// Rename 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, { $rename: { "number_of_belts": "belts_earned" } } )

// remove 'lucky_number' field
db.students.updateMany({},{ $unset: { lucky_number: ""}})

// add 'updated_on' field, set value to the current date.
db.students.updateMany({}, {$currentDate: {"updated_on":{$type: "date"}}})