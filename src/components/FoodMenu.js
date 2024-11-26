import { NavLink } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import '../App.css';

import avocado from '../assets/images/img1.jpg';
import pancakes from '../assets/images/img2.jpg';
import salad from '../assets/images/img3.jpg';
import pasta from '../assets/images/img4.jpg';
import salmon from '../assets/images/img6.webp';
import steak2 from '../assets/images/1.jpg';
import baked from '../assets/images/2.jpg';
import Ribs from '../assets/images/3.jpg';
import Eggplant from '../assets/images/4.jpg';
import Tofu from '../assets/images/5.jpg';
import Shrimp from '../assets/images/6.jpg';
import Beef from '../assets/images/7.jpg';


//ТРЯБВА ДА СЕ ДОПЪЛНИ С ОЩЕ СНИМКИ И ДА СЕ НАПРАВИ ОПИСАНИЕТО НА БЪЛГАРСКИ
const foodItems = [
  {
    id: 1,
    category: "Breakfast",
    items: [
      { id: 101, name: "Chicken Burger", price: 20, description: "Juicy grilled chicken breast layered with fresh lettuce, tomatoes, and a tangy mayo sauce, served in a toasted sesame bun.", image: "img/menu-1.jpg" },
      { id: 102, name: "Oatmeal with Honey and Fruits", price: 15, description: " A warm and comforting bowl of oatmeal, topped with a drizzle of honey and a mix of fresh fruits like berries, bananas, and apples.", image: "img/menu-2.jpg" },
      { id: 103, name: "Avocado Toast", price: 10, description: " Creamy mashed avocado spread over crispy toasted bread, lightly seasoned with salt, pepper, and a drizzle of olive oil. Perfect for a light and healthy meal!", image: avocado },
      { id: 104, name: "Pancakes with Maple Syrup and Berries", price: 8, description: " Soft and fluffy pancakes served warm, topped with fresh berries (strawberries, blueberries) and a drizzle of sweet maple syrup.", image: pancakes },
      { id: 105, name: "Scrambled Eggs with Toast and Avocado Slices", price: 8, description: "  Creamy scrambled eggs paired with toasted whole-grain bread and ripe avocado slices, lightly seasoned with salt and pepper.", image: pancakes },
      { id: 106, name: "Smoothie Bowl", price: 8, description: "  A refreshing and nutritious smoothie made from blended frozen bananas, berries, and almond milk, topped with granola, coconut flakes, and chia seeds for a crunchy finish.", image: pancakes },
      { id: 107, name: "Bagel with Cream Cheese and Smoked Salmon", price: 8, description: "  A toasted bagel spread with rich cream cheese, layered with delicate smoked salmon, capers, and a sprinkle of fresh dill for a classic and savory breakfast.", image: pancakes },
      { id: 108, name: "Spinach and Cheese Pastry", price: 8, description: "  Creamy scrambled eggs paired with toasted whole-grain bread and ripe avocado slices, lightly seasoned with salt and pepper.", image: pancakes },
    ],
  },
  {
    id: 2,
    category: "Lunch",
    items: [
      { id: 201, name: "Tuna Salad with Egg", price: 28, description: " Свежа салата, приготвена с крехко риба тон, сварени яйца, хрупкава зелена салата, домати, краставици и лек дресинг от лимонов сок и зехтин. Перфектна комбинация за лек и здравословен обяд.", image: "img/menu-3.jpg" },
      { id: 202, name: "Chicken with Quinoa and Vegetables", price: 26, description: " Крехко пилешко филе, приготвено на скара, сервирано с пухкава киноа и свежи сезонни зеленчуци, подправени с билки и леко масло.", image: "img/menu-4.jpg" },
      { id: 203, name: "Grilled Chicken Salad", price: 15, description: "Свежи листа ромен, настърган пармезан и хрупкави крутони, гарнирани с перфектно гриловано пилешко филе и кремообразен Цезар дресинг.", image: salad },
      { id: 204, name: "Spaghetti Bolognese", price: 14, description: "Класическа италианска паста със спагети, обилно покрити с ароматен сос Болонезе, приготвен с говеждо месо, домати и свежи подправки.", image: pasta },
      { id: 205, name: "Beef Teriyaki Bowl", price: 14, description: "Сочни парчета говеждо месо, сотирани в сладко-солен терияки сос, поднесени върху пухкав бял ориз и гарнирани с сусам и зелен лук.", image: pasta },
      { id: 206, name: "Vegetarian Quinoa Bowl", price: 14, description: "Здравословна комбинация от киноа, печено сладко картофче, броколи, авокадо и нахут, подправена с лек лимонов дресинг.", image: pasta },
      { id: 207, name: "Honey Glazed Salmon with Vegetables", price: 14, description: " Сочно филе от сьомга с глазура от мед и соев сос, поднесено с гарнитура от задушени зеленчуци – броколи, моркови и аспержи.", image: pasta },
      { id: 208, name: "Chicken Alfredo Pasta", price: 14, description: "Кремообразна паста с пилешко месо, приготвена с богат сос Алфредо от пармезан и чесън, гарнирана с магданоз и сервирана с чеснов хляб.", image: pasta },
    ],
  },
  {
    id: 3,
    category: "Dinner",
    items: [
      { id: 301, name: "Grilled Steak with Herb Butter", price: 40, description: "Сочно телешко стек, перфектно изпечено на скара, гарнирано с топящо се масло с билки и чесън. Поднесено със запечени картофи и свежа зелена салата.", image: steak2 },
      { id: 302, name: "Baked Salmon with Asparagus", price: 35, description: "Филе от сьомга, изпечено с лимоново масло и подправки, сервирано със задушени аспержи и кремообразно картофено пюре.", image: salmon },
      { id: 303, name: "Chicken Alfredo Pasta", price: 18, description: "Кремообразна паста фетучини с пилешки филенца, приготвени в сос от пармезан, чесън и сметана, гарнирана с пресен магданоз.", image: baked },
      { id: 304, name: "Vegetable Stir-Fry with Tofu", price: 18, description: "Ароматно азиатско ястие със свежи зеленчуци и тофу, сотирани в соев сос и джинджифил, поднесено върху пухкав ориз басмати.", image: Tofu },
      { id: 305, name: "Barbecue Ribs with Coleslaw", price: 18, description: "Класически ребра на барбекю, обвити в домашен сос BBQ, сервирани с кремообразна салата колслоу и печени картофи.", image: Ribs },
      { id: 306, name: "Shrimp Scampi", price: 18, description: "Пресни скариди, приготвени с масло, чесън и бяло вино, сервирани с паста лингвини и поръсени с магданоз.", image: Shrimp  },
      { id: 307, name: "Eggplant Parmesan", price: 18, description: "Печени патладжани, покрити с доматен сос, моцарела и пармезан, запечени до златисто, сервирани с хрупкава чеснова багета.", image: Eggplant },
      { id: 308, name: "Beef Bourguignon", price: 18, description: "Традиционно френско ястие с нежно телешко, бавно готвено в червено вино, с лук, гъби и моркови, поднесено с картофено пюре.", image: Beef  },
    ],
  },
];


function FoodMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="container-xxl position-relative p-0">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className={({ isActive }) => `navbar-brand p-0 ${isActive ? "active" : ""}`}>
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restorant
            </h1>
            <img src="img/logo.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <Header />
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>
            <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                {foodItems.map((category, index) => (
                  <li className="nav-item" key={category.id}>
                    <a
                      className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === index ? "active" : ""}`}
                      onClick={() => setActiveTab(index)}
                      href={`#tab-${category.id}`}
                    >
                      <i className="fa fa-coffee fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small className="text-body">{category.category}</small>
                        <h6 className="mt-n1 mb-0">{category.category}</h6>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content row">
                {foodItems[activeTab]?.items.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded-circle"
                        src={item.image}
                        alt={item.name}
                        style={{ width: "90px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{item.name}</span>
                          <span className="text-primary">${item.price}</span>
                        </h5>
                        <small className="fst-italic">{item.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodMenu;