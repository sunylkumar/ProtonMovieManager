var movieSchema = new mongoose.Schema({
	filepath: {type: String, unique: true}, 
	body:{}
})
module.exports = mongoose.model('Movie', movieSchema);
