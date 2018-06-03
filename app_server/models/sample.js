/**
 * Created by kerwi on 6/2/2018.
 */


// This is the data population script ; need to find a better way of doing this.

// 1st location
db.locations.save({name: 'Starcups',address: '125 High Street, Reading, RG6 1PS',rating: 3,facilities: ['Hot drinks', 'Food', 'Premium wifi'],coords: [-0.9690884, 51.455041], openingTimes:[{days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false},{days: 'Saturday', opening: '8:00am',closing: '5:00pm', closed: false},{days: 'Sunday', closed: true}]})
db.locations.update({name: 'Starcups'}, {$push: { reviews: {author: 'Simon Holmes', id: ObjectId(), rating: 5, timestamp: new Date("Jul 16, 2013"), reviewText: "What a great place. I can't say enough good things about it." }}})
db.locations.update({name: 'Starcups'}, {$push: { reviews: {author: 'Inday Badiday', id: ObjectId(), rating: 4, timestamp: new Date("Aug 21, 2015"), reviewText: "They have great coffee. Wifi is fast." }}})
db.locations.update({name: 'Starcups'}, {$push: { reviews: {author: 'Rex Cortes', id: ObjectId(), rating: 2, timestamp: new Date("Jan 4, 2014"), reviewText: "The place was clean. A bit noisy." }}})


// 2ndlocation
db.locations.save({name: 'Kerwin House',address: '238 5th Street, Jersey City, NJ07302',rating: 5,facilities: ['Hot drinks', 'Premium wifi'],coords: [-74.044348074, 0.724843040], openingTimes:[{days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false},{days: 'Saturday', opening: '8:00am',closing: '5:00pm', closed: false},{days: 'Sunday', closed: true}]})
db.locations.update({name: 'Kerwin House'}, {$push: { reviews: {author: 'Ace Vergel', id: ObjectId(), rating: 5, timestamp: new Date("Jul 16, 2013"), reviewText: "What a great place. I can't say enough good things about it." }}})
db.locations.update({name: 'Kerwin House'}, {$push: { reviews: {author: 'Angel Locsin', id: ObjectId(), rating: 4, timestamp: new Date("Aug 21, 2015"), reviewText: "They have great coffee. Wifi is fast." }}})
db.locations.update({name: 'Kerwin House'}, {$push: { reviews: {author: 'Sino Ito', id: ObjectId(), rating: 2, timestamp: new Date("Jan 4, 2014"), reviewText: "The place was clean. A bit noisy." }}})


// 3rd location
db.locations.save({name: 'Dave and Buster',address: '111 8th Avenue, New York, NY',rating: 5,facilities: ['Hot drinks', 'Food', 'Premium wifi', 'ATM'],coords: [-74.003387074, 40.741469040], openingTimes:[{days: 'Monday - Friday', opening: '8:00am', closing: '6:00pm', closed: false},{days: 'Saturday', opening: '8:00am',closing: '6:00pm', closed: false},{days: 'Sunday', closed: true}]})
db.locations.update({name: 'Dave and Buster'}, {$push: { reviews: {author: 'Anak ni Gamora', id: ObjectId(), rating: 5, timestamp: new Date("Jul 16, 2013"), reviewText: "What a great place. I can't say enough good things about it." }}})
db.locations.update({name: 'Dave and Buster'}, {$push: { reviews: {author: 'Gary Valenciano', id: ObjectId(), rating: 4, timestamp: new Date("Aug 21, 2015"), reviewText: "They have great coffee. Wifi is fast." }}})
db.locations.update({name: 'Dave and Buster'}, {$push: { reviews: {author: 'Mike Atom', id: ObjectId(), rating: 2, timestamp: new Date("Jan 4, 2014"), reviewText: "The place was clean. A bit noisy." }}})
