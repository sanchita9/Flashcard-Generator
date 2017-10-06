// require fs
var fs = require("fs");

// / Constructor function for the BasicFlashcard.
function BasicFlashCard(front, back) {
	this.front = front;
	this.back = back;
	this.create = function() {
		// flashcard object to be append to file
		var data = {
			front: this.front,
			back: this.back,
			type: "basic",
		};
		// add card to log.txt
		fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
			// if there is an error, log the error
			if (error) {
				console.log(error);
			}
		});
	};

}

module.exports = BasicFlashCard;