import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component

const cardData = [
	{
		cardTitle: "Título de la tarjeta",
		imageSource: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
		cardDescription: "Esta es la descripción de mi tarjeta",
	},
	{
		cardTitle: "Otra tarjeta",
		imageSource: "https://plus.unsplash.com/premium_photo-1724654643848-ab19f6ec1c79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D",
		cardDescription: "Descripción diferente",
	},
	//https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/dossier/773/01-intro-773.jpg
	{
		cardTitle: "Tercera tarjeta",
		imageSource: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_640.jpg",
		cardDescription: "Otra descripción más",
	},
	{
		cardTitle: "Cuarta tarjeta",
		imageSource: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-2181662163.jpg",
		cardDescription: "Y otra descripción",
	}
];

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="d-flex">
				{cardData.map((card, index) => (
					<div key={index} className="col-3 d-flex">
						<Card
							cardTitle={card.cardTitle}
							imageSource={card.imageSource}
							cardDescription={card.cardDescription} />
					</div>
				))}
			</div>
		</div>
	);
};



export default Home;