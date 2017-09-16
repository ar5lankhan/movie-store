module.exports = function(mongoose) {

    var Schema = mongoose.Schema;

    var customer = new Schema({
        userId : String,
        totalRented : Number,
        createdDate : Date,
        updateDate : Date
    });

    return mongoose.model('customer', customer);
};