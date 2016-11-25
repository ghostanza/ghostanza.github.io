var Card = Vue.extend({
	template: "<div class='card'></div>",
});
var Navbar = Vue.extend({
	props: ['menuOpen'],
	template: "<div :class=\"[menuOpen ? 'open' : '', 'navbar']\"><div id='sm-trigger'><span @click='toggleMenu'><i :class=\"[menuOpen ? 'fa-times' : 'fa-bars', 'fa']\"></i></span></div><slot></slot></div>",
	methods: {
		toggleMenu: function(){
		this.$emit('toggle');
		}
	}
})

var Navbtn = Vue.extend({
	props: ['loc', 'currentView'],
	template: "<button class='nav-btn' :class='{active : loc.name == currentView}' @click='updateView(loc.name)'><i :class='loc.fa_name'></i><span class='name'>{{loc.name}}</span></button>",
	methods:{
		updateView: function(view){
			this.$emit('change-view', view);
		}
	}
});

var MainWrapper = Vue.extend({
	template:"<div id='main-wrapper'><slot name='heading'>Default</slot><slot name='content'><div class='coming-soon'><span style='font-size: 50px;color: transparent;' class='ghost'>coming soon.</span></div></slot></div>",
});

new Vue({
	el: '#vue',
	data: {
		view: 'home',
		preview: '',
		menuOpen: false,
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
			this.menuOpen = false;
		},
		toggleMenu: function(){
			this.menuOpen = this.menuOpen ? false : true;
		}
	}
});
