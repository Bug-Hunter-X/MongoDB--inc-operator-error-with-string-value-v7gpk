```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });
// or to increment by a variable
let incrementValue = 10;
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: incrementValue } });
```