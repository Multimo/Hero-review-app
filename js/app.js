//TODO: add alret to call hero so that it sends an alert that tells user to wait "arrvingin any second"
//TODO: add altneraivt alert to say hero will be back in 5min or something if out of stock...
//TODO: organize data into modules
//TODO: Add css hover effects to tabs and buttons
///TODO: add another form that allows user to temp produce hero profile


(function(){
	var app = angular.module("store", []); //sets it to be first run on html tag

app.controller("StoreController", function(){
	this.products = gems; //set gem to be StoreController.product.gem
});

app.controller("TabController", function(){ //uses clicks to set tab var and checks it for ng-show in html
	this.tab = 1;

	this.setTab = function(setTab){
		this.tab = setTab;
	}
	this.isSet = function(checkedTab){
		return this.tab === checkedTab;
	}

});

app.controller("ReviewController", function(){ //pushes review sumits to products json
	this.review = {};
	this.addReview = function(products){
		products.reviews.push(this.review);
		this.review = {};
	};
});

//series of element dirrectives that template the index.html page

app.directive("tabDescription", function(){
	return{
		restrict: "E",
		templateUrl:"html/tab-descriptions.html",
		
	};
});
app.directive("namesImages", function(){
	return{
		restrict: "E",
		templateUrl:"html/names-images.html",
		
		
	};
});
app.directive("tabButtons", function(){
	return{
		restrict: "E",
		templateUrl:"html/tab-buttons.html",
		
		
	};
});
app.directive("tabSets", function(){
	return{
		restrict: "E",
		templateUrl:"html/tab-sets.html",
		
		
	};
});

app.directive("reviewForm", function(){
	return{
		restrict: "E",
		templateUrl:"html/review-form.html",
		controller: function (){
		this.review = {};

		this.addReview = function(products){
			products.reviews.push(this.review);
			this.review = {};
		};
		controlerAs: "reviewCtrl"
	}
}
});

app.directive("summonButton", function(){ //summon hero button + back in 5 <h3>
	return{
		restrict: "E",
		templateUrl:"html/summon-button.html",
		controller: function (){
			this.count += 1;

		    this.summon = function(){
			alert("Hero on route!")			
		};
		controlerAs: "summonCtrl"
	}
}
});

var gems = [ //creates gem with contents as a json usally stored in a api etc
	{ 
	name:"Dodecahedron",
	price: 2.95,
	description: "this is a description this is a description this is a description this is a description vthis is a description",
	canPurchase: true,
	soldOut: false,
	images : [
		"images/Dodecahedron.jpg",
	],
	reviews :[{
		author : "Batman@bat.com",
		text : "Really good perfect for the batcave!",
		stars : "5",
	}, 
	{
		author: "CatDog@house.com",
		text: "woof woof meow meow",
		stars : 3,
	}],
	},
	{
	name:"Pentagonal Gem",
	price: 5.95,
	description: "this is a description",
	canPurchase: true,
	soldOut: true,
	images : [
		"images/Pentagonal.jpg",
		],	
	reviews :[{
		author : "Batman@bat.com",
		text : "Really good perfect for the batcave!",
		stars : 5,
		},
		{
			author: "CatDog@house.com",
			text: "woof woof meow meow",
			stars : 3,
		}],	
	},
	{
	name:"Circle Gem",
	price: 9.95,
	description: "this is a description",
	canPurchase: true,
	soldOut: false,
	images : [
		"images/Circle_gem.jpg",
		],
	reviews :[{
		author : "Batman@bat.com",
		text : "Really good perfect for the batcave!",
		stars : "5",
	},
	{
			author: "CatDog@house.com",
			text: "woof woof meow meow",
			stars : 3,
		}],	
	}
	];

})();

