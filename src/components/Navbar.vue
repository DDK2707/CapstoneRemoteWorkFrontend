<template>
    <nav>
		<div class="row">
			<div class="col-sm-6">
	<p>TUNEz</p>
			</div>
			<div class="col-sm-6">
	<button id="burger" class="burger">
		<div class="bar"></div>
		<div class="bar"></div>
	</button>
	
	<ul>
		<li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/userProfile">Your Profile</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>

	</ul>
			</div>
		</div>
	
</nav>
</template>

<script>
export default {
    mounted() {
        const burger = document.getElementById('burger');
        const ul = document.querySelector('nav ul');

        burger.addEventListener('click', () => {
	        burger.classList.toggle('show-x');
	        ul.classList.toggle('show');
        });
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

* {
	box-sizing: border-box;
}

body {
	background-color: #EFEFEF;
	color: #2C405E;
	font-family: 'Poppins', sans-serif;
	margin: 0;
}

nav {
	background-color: #fff;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 15px;
}

nav p {
	color: #7692ff;
	font-weight: bold;
	margin: 5px 10px;
	letter-spacing: 1px;
	float: left;
	
}

.burger {
	border: 0;
	cursor: pointer;
	display: none;
	font-size: 22px;
	position: relative;
	padding: 0;
	outline: none;
	height: 30px;
	width: 30px;
}

.burger:active {
	color: #0594EC;
	outline: none;
}

.burger .bar {
	background-color: #0594EC;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%) rotate(0deg);
	height: 3px;
	width: 20px;
	transition: transform 0.2s ease;
}

.burger .bar:first-of-type {
	top: 40%;
}

.burger .bar:last-of-type {
	top: 60%;
}

ul {
	display: flex;
	margin: 0 10px;
	padding: 0;
	list-style-type: none;
	float: right;
}

ul li {
	margin: 0 10px;
}

ul li a {
	color: #2C405E;
	position: relative;
	text-decoration: none;
}

ul li a::after {
	content: '';
	background-color: #2C405E;
	position: absolute;
	bottom: -18px;
	left: 0;
	opacity: 0;
	height: 2px;
	width: 100%;
	transition: transform 0.2s ease;
}

ul li a:hover::after {
	opacity: 1;
	transform: translateY(-15px);
}

@media screen and (max-width: 1000px) {
	header h1 {
		font-size: 2em;
	}
	
	.burger {
		display: block;
		position: fixed;
		right: 15px;
		top: 15px;
	}
	
	.burger.show-x .bar:first-of-type {
		transform: translate(-50%, 50%) rotate(225deg);
	}
	
	.burger.show-x .bar:last-of-type {
		transform: translate(-50%, -150%) rotate(-225deg);
	}
	
	ul {
		background-color: #fff;
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
		flex-direction: column;
		text-align: center;
		position: fixed;
		top: 80px;
		left: 10%;
		transform: translateX(120%);
		width: 80%;
		transition: transform 0.3s ease-in;
		z-index: 100;
	}
	
	ul.show {
		transform: translateX(0);
	}
	
	ul li {
		margin: 15px;
	}
}
</style>