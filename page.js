var Card = Vue.extend({
	template: "<div class='card'></div>",
});
var Navbar = Vue.extend({
	template: "<div class='navbar'><slot></slot></div>",
})

var Navbtn = Vue.extend({
	props: ['loc', 'currentView'],
	template: "<button class='nav-btn' :class='{active : loc.name == currentView}' @click='updateView(loc.name)'><i :class='loc.fa_name'></i><span>{{loc.name}}</span></button>",
	methods:{
		updateView: function(view){
			this.$emit('change-view', view);
		}
	}
});

var MainWrapper = Vue.extend({
	template:"<div id='main-wrapper'><slot name='heading'>Default</slot><slot name='content'><span style='font-size: 50px;color: transparent;' class='ghost'>coming soon.</span></slot></div>",
});

new Vue({
	el: '#vue',
	data: {
		view: 'home',
		preview: '',
		locations:[
			{ name: 'home', fa_name: 'fa fa-home', desc: 'the home page'},
			{ name: 'bikes', fa_name: 'fa fa-bicycle'},
			{ name: 'coding', fa_name: 'fa fa-code'},
			{ name: 'beers', fa_name: 'fa fa-beer'},
			{ name: 'social', fa_name: 'fa fa-users'}
		]
	},
	components:{
		card: Card,
		navBar: Navbar,
		navBtn: Navbtn,
		mainWrapper: MainWrapper,
	},
	methods:{
		changeView: function(view){
			this.view = view;
		},
	}
});
