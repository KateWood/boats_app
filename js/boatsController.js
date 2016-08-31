angular.module('boatsApp')
	.controller('BoatsController', BoatsController)

function BoatsController($log) {
	var self = this
	self.add = addBoat
	self.newBoat = {name: "", type: "", sold:false, image: ""}

	self.all = [
		{name: "Banana Sit", type: "Banana Boat", sold: true, image: "../images/banana_boat.png"},
		{name: "Lost Island Express", type: "Ferry", sold: false, image: "../images/ferry.png"},
		{name: "Yacht's Go!", type: "Yacht", sold: true, image: "../images/yacht.png"},
		{name: "I Hardly Know 'Er", type: "Cutter", sold: false, image: "../images/cutter.png"},
		{name: "Uber dell'acqua", type: "Water Taxi", sold: true, image: "../images/water_taxi.png"}
	]

	$log.log(self.all)

	function addBoat() {
		self.all.push(self.newBoat)
		self.newBoat = {name: "", type: "", sold:false, image: ""}
	}
}
