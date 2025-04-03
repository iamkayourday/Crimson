import React from "react";

const FoodPairing = () => {
  const foods = [
    {
      image: "/merlot.jpeg",
      name: "Merlot",
      description:
        "Merlot is known for its soft, velvety texture and flavors of black cherry, plum, and hints of cocoa or vanilla. It’s medium-bodied with mild tannins, making it approachable and versatile.",
      pairings: [
        "Spaghetti with Meatballs",
        "Grilled Lamb Chops",
        "Margherita Pizza",
        "Mushroom Risotto",
        "BBQ Beef",
      ],
    },
    {
      image: "/cabernet.jpeg",
      name: "Cabernet Sauvignon",
      description:
        "Cabernet Sauvignon has bold flavors of blackcurrant, blackberry, and oak, often with hints of tobacco and vanilla. It has firm tannins, making it ideal for pairing with hearty dishes.",
      pairings: [
        "Grilled Ribeye Steak",
        "Roasted Duck",
        "Pepperoni Pizza",
        "Beef Bourguignon",
        "Aged Cheddar Cheese",
      ],
    },
    {
      image: "/pinot-noir.jpeg",
      name: "Pinot Noir",
      description:
        "Pinot Noir is light-bodied with bright acidity and flavors of red berries, cherries, and earthy undertones. It pairs well with a wide range of foods due to its balanced profile.",
      pairings: [
        "Roast Chicken",
        "Salmon with Herb Butter",
        "Margherita Pizza",
        "Wild Mushroom Pasta",
        "Goat Cheese Salad",
      ],
    },
    {
      image: "/zinfandel.jpeg",
      name: "Zinfandel",
      description:
        "Zinfandel is bold and fruit-forward, with flavors of blackberry, plum, and spice. It often has a smoky finish, making it great for barbecued and spicy dishes.",
      pairings: [
        "BBQ Ribs",
        "Spicy Tacos",
        "Pepperoni Pizza",
        "Grilled Sausages",
        "Burgers",
      ],
    },
    {
      image: "/syrah.jpeg",
      name: "Syrah (Shiraz)",
      description:
        "Syrah is a bold, full-bodied wine with intense flavors of dark berries, black pepper, and smoky, spicy notes. It has firm tannins and a rich, robust character.",
      pairings: [
        "Grilled Sausages",
        "BBQ Ribs",
        "Spicy Beef Tacos",
        "Dark Chocolate Cake",
        "Pepperoni Pizza",
      ],
    },
  ];

  return (
    <section
      id="food-pairings"
      className="bg-[#8B0000] text-[#f0ead6] min-h-screen flex flex-col items-center w-full py-10"
    >
      <h2 className="text-center text-[#f0ead6] text-4xl md:text-5xl lg:text-[55px] italic mt-10">
        Savor the Pairings
      </h2>

      <div className="w-full max-w-6xl px-4 mt-12">
        {foods.map((food, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-style mb-4">{food.name}</h3>
              <p className="mt-2 text-lg font-semibold text-[#f0ead6] mb-4">
                Grape Characteristics:
              </p>
              <p className="mt-1 text-[#f0ead6] font-bold md:text-md">{food.description}</p>

              <div className="border-t border-gray-300 my-4"></div>

              <p className="text-lg font-semibold text-[#f0ead6]">Pairings:</p>
              <ul className="mt-2 grid grid-cols-3 gap-2 text-[#f0ead6]">
                {food.pairings.map((pair, i) => (
                  <li
                  key={i}
                  className="bg-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-md text-[#f0ead6] px-3 py-1 rounded-md text-left text-sm"
                >
                  {pair}
                </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodPairing;
