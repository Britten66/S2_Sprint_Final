import { useEffect, useState } from "react";import GameCard from "../../Components/GameCard/GameCard.jsx";
import { useCart } from "../../Components/Context/CartContext.jsx";
import "./store.css";

function StorePage() {
  const { handleAddToCart } = useCart();
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

// Fetch products from API
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  // SNOWFALL EFFECT - Creates falling snowflakes on store page
  useEffect(() => {
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

      const snowfallContainer = document.querySelector(".snowfall");
      if (snowfallContainer) {
        snowfallContainer.appendChild(snowflake);
      }

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    }

    const snowInterval = setInterval(createSnowflake, 100);

    return () => {
      clearInterval(snowInterval);
    };
  }, []);

  return (
    <>
      {/* SNOW EFFECTS - Background pattern and falling flakes */}
      <div className="snow"></div>
      <div className="snowfall"></div>

      <div className="store-page">
        <h1>Browse Games</h1>

<<<<<<< HEAD
        <div className="games-grid">
          <GameCard
            image="/assets/Images/barkraider.png"
            title="Bark Raiders"
            description="New Release - A multiplayer extraction adventure, set in a lethal future earth."
            price={58.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "1",
                image: "/assets/Images/barkraider.png",
                title: "Bark Raiders",
                description:
                  "Gameplay flows between the surface ruled by lethal machines, and the vibrant underground society of Speranza.",
                price: 58.99,
              })
            }
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
            title="Baldur's Gate 3"
            description="Story-rich, party-based RPG set in the universe of Dungeons & Dragons."
            price={59.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "2",
                image:
                  "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
                title: "Baldur's Gate 3",
                description:
                  "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
                price: 59.99,
              })
            }
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
            title="Elden Ring"
            description="An epic action RPG adventure in a vast open world."
            price={59.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "3",
                image:
                  "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
                title: "Elden Ring",
                description:
                  "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
                price: 59.99,
              })
            }
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"
            title="Dota 2"
            description="The most-played game on Steam."
            price={0.0}
            onAddToCart={() =>
              handleAddToCart({
                id: "4",
                image:
                  "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
                title: "Dota 2",
                description:
                  "When it comes to diversity of heroes, abilities, and powerful items, Dota boasts an endless array—no two games are the same.",
                price: 0.0,
              })
            }
          />

          <GameCard
            image="/assets/Images/bloodshed.png"
            title="BloodShead"
            description="Bloodshed is a Roguelite Survivors FPS."
            price={12.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "5",
                image: "/assets/Images/bloodshed.png",
                title: "BloodShed",
                description:
                  "an exhilarating fusion of Roguelite elements merged with retro-styled visuals and first-person “Survivors-like” frenetic combat action!",
                price: 12.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/Hades.png"
            title="Hades"
            description="Rugue-like dungeon crawler hack and slasher."
            price={13.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "6",
                image: "/assets/Images/Hades.png",
                title: "Hades",
                description:
                  "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
                price: 13.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/hogwarts.png"
            title="Hogwarts: Legacy"
            description="Hogwarts Legacy is an immersive, open-world action RPG."
            price={22.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "7",
                image: "/assets/Images/hogwarts.png",
                title: "Hogwarts Legacy",
                description:
                  "Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
                price: 22.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/keeper.png"
            title="Kepper"
            description="An atmospheric puzzle adventure in which a long-forgotten lighthouse is awakened."
            price={5.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "8",
                image: "/assets/Images/keeper.png",
                title: "Kepper",
                description:
                  "joined by a spirited seabird, embark upon a heartening tale of unlikely companionship, and an unexpected journey into realms beyond understanding.",
                price: 19.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/kingdom.png"
            title="Kingdom"
            description="A 2D sidescrolling strategy/resource management hybrid with a minimalist feel."
            price={9.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "9",
                image: "/assets/Images/kingdom.png",
                title: "Kingdom",
                description:
                  "In Kingdom, each coin spent can tip the balance between prosperity and decay. Attend to your domain, border to border, or venture into the wild to discover its wonders and its threats.",
                price: 0.0,
              })
            }
          />

          <GameCard
            image="/assets/Images/marvel.png"
            title="Marvel Rivals"
            description="Super Hero Team-Based PVP Shooter!"
            price={0.0}
            onAddToCart={() =>
              handleAddToCart({
                id: "10",
                image: "/assets/Images/marvel.png",
                title: "Marvel Rivals",
                description:
                  "Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!",
                price: 0.0,
              })
            }
          />

          <GameCard
            image="/assets/Images/pathofexile2.png"
            title="Path of Exile 2"
            description="A next generation Action RPG from Grinding Gear Games."
            price={6.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "11",
                image: "/assets/Images/pathofexlie2.png",
                title: "Path of Exile 2",
                description:
                  "Set years after the original Path of Exile, you will return to the dark world of Wraeclast and seek to end the corruption that is spreading.",
                price: 6.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/satisfactory.png"
            title="Satisfactory"
            description="A first-person open-world factory building game with a dash of exploration and combat."
            price={19.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "12",
                image: "/assets/Images/satisfactory.png",
                title: "Satisfactory",
                description:
                  "Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!",
                price: 19.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/snow.png"
            title="Snow"
            description="The only open world, winter sports game."
            price={17.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "13",
                image: "/assets/Images/snow.png",
                title: "Snow",
                description:
                  "Explore a massive mountain, customize your character with clothing and equipment, compete in events to be the best.",
                price: 17.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/starfield.png"
            title="StarField"
            description="Next generation role-playing game set amongst the stars."
            price={13.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "14",
                image: "/assets/Images/starfield.png",
                title: "StarField",
                description:
                  "In the year 2330, humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people.",
                price: 13.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/thecube.png"
            title="The Cube"
            description="The CUBE is a multiplayer RPG-shooter that blends unique world-building."
            price={14.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "14",
                image: "/assets/Images/thecube.png",
                title: "the cube",
                description:
                  " A living world full of memorable characters, diverse biomes, and tons of enemies, including powerful bosses, awaits you.",
                price: 14.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/trainwreck.png"
            title="Train Wreck"
            description="A 3D top-down, local co-op base defense game."
            price={7.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "15",
                image: "/assets/Images/trainwreck.png",
                title: "Train Wreck",
                description:
                  "Where players become train operators delivering cargo across multiple stations while fending off train robbers set in the wildwest.",
                price: 7.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/valhiem.png"
            title="Valhem"
            description="A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory."
            price={9.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "16",
                image: "/assets/Images/valhiem.png",
                title: "valhem",
                description:
                  "Craft powerful weapons, construct longhouses, and slay mighty foes to prove yourself to Odin!",
                price: 14.99,
              })
            }
          />
          <GameCard
            image="/assets/Images/vrising.png"
            title="Vrising"
            description="Vampire Survival Action RPG adventure like no other."
            price={21.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "17",
                image: "/assets/Images/vrising.png",
                title: "Vrising",
                description:
                  "Awaken as a weakened Vampire after centuries of slumber. Hunt for blood to regain your strength while hiding from the scorching sun to survive.",
                price: 21.99,
              })
            }
          />

          <GameCard
            image="/assets/Images/warframe.png"
            title="WarFrame"
            description="Story-driven free-to-play online action game."
            price={19.99}
            onAddToCart={() =>
              handleAddToCart({
                id: "18",
                image: "/assets/Images/warframe.png",
                title: "WarFrame",
                description:
                  "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe.",
                price: 0.0,
              })
            }
          />
        </div>
=======
       <div className="games-grid">
  {loading ? (
    <h2>Loading games...</h2>
  ) : (
    products.map((product) => (
      <GameCard
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        onAddToCart={() => handleAddToCart(product)}
      />
    ))
  )}
</div>
>>>>>>> dev
      </div>
    </>
  );
}

export default StorePage;
