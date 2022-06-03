function CategoryOption(props){
  return (
    <div class={props.nameForClass}>
      <h2>{props.headerName.toUpperCase()}</h2>
      <ol>
        {props.list.map((name) => 
        <li key={name.name}>
          <p>{name.name} (<span>{name.discription}</span>)</p>
          <p class="price">{name.price}</p>
        </li>
        )}
      </ol>
    </div>
  )
}

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      // appesiters
      appesiters: [
        {
          name: "Homemade Tzatziki",
          discription: "Yoghurt,grated cucumber and garlic",
          price: "4.70"  
        },
        {
          name: "Spicy Cheese Dip",
          discription: " ",
          price: "5.00"  
        },
        {
          name: "Fava",
          discription: "yellow split pea dip with cubes of tomato,onion,olive oil caper leaves",
          price: "5.00"  
        },
        {
          name: "Grilled Vegetables Napoleon with Cypriot Hallumi Cheese",
          discription: "Layered vegetables-eggplant,zuccini,peppers,pleurotus mushrooms,tomato,onion and Cypriot Halloumi Cheese",
          price: "7.60"  
        },
        {
          name: "Florina Red Paper stuffed with Feta Cheese",
          discription: " ",
          price: "5.00"  
        },
        {
          name: "Horta",
          discription: "Boild fresh with greens",
          price: "6.00"  
        },
        {
          name: "Gigantes",
          discription: "Baked large beans with fresh tomato sauce and herbs",
          price: "6.00"  
        },
        {
          name: "Homemade fresh fried Potatoes",
          discription: " ",
          price: "6.50"  
        },
        {
          name: "Cheese Croquettes",
          discription: " ",
          price: "6.50"  
        },
        {
          name: "Filo Pastry Rolls",
          discription: "tuffed with cheese and spinach",
          price: "6.50"  
        },
        {
          name: "Fresh Baked Garlic Breadi",
          discription: " ",
          price: "4.50"  
        },
        {
          name: "Fried Feta Cheese Filo parcel ",
          discription: "with honey and sesame",
          price: "5.50"  
        },
        {
          name: "Shrimp Saganaki",
          discription: "Shrimps in fresh tomato sauce with Feta cheese and sesame",
          price: "8.50"  
        },
        {
          name: "Octapus in vinegar",
          discription: "with homemade Fava",
          price: "7.00"  
        },
        {
          name: "Gavros",
          discription: "white Bait Fish marinated in vinegar",
          price: "6.00"  
        },
        {
          name: "Thrapsala",
          discription: "fried small squid",
          price: "8.50"  
        },
        {
          name: "Streamed Mussels",
          discription: " ",
          price: "8.50"  
        }
      ],
      // salads
      salads: [
        {
          name: "Lettuce Salad",
          discription: "lettuce, fresh onion and Dill",
          price: "6.80"  
        },
        {
          name: "Greek Salad",
          discription: "Tomato,Cucumber, Pepper, Onion, Olives, Capers, Feta and local Olive Oil",
          price: "8.50"  
        },
        {
          name: "Spinash Salad",
          discription: "Hand picked Spinash leaves, sun dried tomatoes,Grilled Manouri cheese, toasted Sesame seeds,toasted Pine Nuts and Balsamic cream",
          price: "9.00"  
        },
        {
          name: "Lithos Salad",
          discription: "Rocket, mixed Greem Salad, Goat Cheese, Grapes,carameuzed Hazeinuts and Balsamic Cream",
          price: "10.00"  
        },
        {
          name: "Caesar Salad",
          discription: "Mixed Green Salad, Sweetcorn, Crunchy Bakon, Parmezan Flakes, Chicken fillet, Original Caesar sauce and Homemade Croutons",
          price: "9.50"  
        },
        {
          name: "Island Salad",
          discription: "Cherry Tomatoes,Spicy Cheese dip, Rusk pieces, Olives, Capers, Caper leaves and local Olive Oil",
          price: "10.00"  
        },
        
      ],
      // pasta
      pasta: [
        {
          name: "(Vegan) Vegetable Spaghetti",
          discription: "with Carrots, Courgette, Peppers, Mushrooms,Onion, Garlic, Olives and homade tomato sause",
          price: "21"  
        },
        {
          name: "Lithos Spice Linguine",
          discription: "with Shrimps, Chill Peppers and garlic flamed with Ouzo, Shrim Bisque and homemade tomato sauce",
          price: "13.50"  
        },
        {
          name: "Carbonara",
          discription: "Sauce made from egg, Parmeson and Cream, with smoked bacon and served with spaghetti",
          price: "10.00"  
        }
      ],
      // risotto
      risotto: [
        {
          name: "Shrimp risotto",
          discription: "with Saffran, Onion and Garlic flamed with Ouzo, Shrimp Bisque and Parmesan cream",
          price: "12.00"  
        },
        {
          name: "(Vegan) Vegetable Risotto",
          discription: "with Asparagus, Carrots, Peas, Dill, Fresh onion and Garlic flamed with white wine and vegetable cream",
          price: "10.00"  
        },
        {
          name: "Lithis Risotto",
          discription: "with Chicken, smoked Bacon, Pleurotus mushrooms, Garlic and Onion flamed with white Wine and Parmesan Cream",
          price: "13.50"  
        }
      ],
      // traditional homemade greek dishes
      trHMGRDishes: [
        {
          name: "Moussaka",
          discription: "Potato and Aubergine slices with Beef minceand fresh Tomato salsa topped with Bechamel souce",
          price: "11.50"  
        },
        {
          name: "Beef Giouvetsi",
          discription: "slow cooked Beef with Herbs, Tomato salsa ond 'Orzo' pasta topped with small pieces of Feta",
          price: "11.00"  
        },
        {
          name: "Shrimp Giouvetsi",
          discription: "Souteed Shrimps,Onion,Garlic and Tomato flamed with Ouzo, shrimp Bisque, Fresh Tomato salsa, 'Orzo' Pasta, grated Parmezan and Fresh Parsley",
          price: "13.00"  
        },
        {
          name: "Lamp Shank",
          discription: "Slow cooked in Red Wine with Rosemary and Thyme, Served with fresh Potato puree, Demi-Glace Sauce and Toasted Pine Nuts",
          price: "14.50"  
        },
        {
          name: "Kleftiko",
          discription: "Slow cooked Lamp with Patatoes,Onion,Garlic,Peppers, fresh Herbs and Kefalotyri cheese, all cooked and Served inside a 'Baking' paper parcel",
          price: "14.00"  
        }
      ],
      // seaFood
      seaFood: [
        {
          name: "Tsipoura 'Sea Bream' ",
          discription: "served with boild Wild Greens, Beetroot salad and dip Olive Oil-lemon",
          price: "17.00"  
        },
        {
          name: "Lavraki 'Sea Bass'",
          discription: "served with boild Wild Greens, Beetroot salad and dip Olive Oil-lemon",
          price: "17.50"  
        },
        {
          name: "Prawns from the grill",
          discription: "served with mixed Green Salad, Cherry Tomatoes, dressing Balsamic-Honey and Oil-lemon dip",
          price: "16.50"  
        },
        {
          name: "Octapus from the grill",
          discription: "served with Homemade Fava, Cherry Tomatoes, Basil Oil abd Balsamic cream",
          price: "15.00"  
        }
      ],
      // fromTheGrill
        fromTheGrill: [
        {
          name: "Pork Chop",
          discription: "served with Wedges fried Potatoes, mixed Green Salad and Yogurt dip",
          price: "12.00"  
        },
        {
          name: "Burger 'homemade burger made of a mix Beef and Pork'",
          discription: "served with Wedges fried Potatoes, mixed Green Salad and Yogurt dip",
          price: "12.00"  
        },
        {
          name: "Pork Fillet 'small slices'",
          discription: "served with Wedges fried Potatoes, mixed Green Salad and BBQ dip",
          price: "12.00"  
        },
        {
          name: "Pork Fillet a la crème or Pepper Sauce",
          discription: "served with Aromatic Basmati Rice",
          price: "12.50"  
        },
        {
          name: "Chicken Fillet",
          discription: "served with Wedges fried Potatoes, mixed Green Salad and Honey-Mustard dip",
          price: "11.50"  
        },
        {
          name: "Chicken Fillet a la crème or Pepper Sauce",
          discription: "served with Aromatic Basmati Rice",
          price: "12.00"  
        },
        {
          name: "Pork Souvlaki 'Tenderion'",
          discription: "served with Wedges fried Potatoes, Tomatoes, Pitta Bread and Tzatziki",
          price: "13.50"  
        },
        {
          name: "Chicken Souvlaki",
          discription: "served with Wedges fried Potatoes, Tomatoes, Pitta Bread and Honey-Mustard dip",
          price: "13.00"  
        },
        {
          name: "Lamp Chops",
          discription: "served with Wedges fried Potatoes, mixed Green Salad and Yogurt dip",
          price: "14.00"  
        },
        {
          name: "Beef Fillet 'Tagliata'",
          discription: "served with souteed Asparagus and a Sweet Wine, Cream and Demi-Glace Souce",
          price: "23.50"  
        }
      ],
      // desserts
      desserts: [
        {
          name: "Halva",
          discription: "with roasted Almonds and Raisins",
          price: "6.00"  
        },
        {
          name: "Lemon Pie",
          discription: "with strawberry",
          price: "6.50"  
        },
        {
          name: "Italian Panna Cotta",
          discription: "with wild Berries and Cherry jam",
          price: "6.50"  
        },
        {
          name: "Chocolate Pie",
          discription: "with Vanilla Ice-Cream and Strawberry Syrup",
          price: "6.50"  
        }
      ],
      // childrensMenu
      childrensMenu: [
        {
          name: "Burger",
          discription: "with fried Potatoes, Basmati rice, and Yoghurt dip",
          price: "8.00"  
        },
        {
          name: "Chicken Nuggets",
          discription: "with fried Potatoes and Mayonnaise dip",
          price: "7.50"  
        },
        {
          name: "Mini Margarita Pizza",
          discription: "with fresh Tomato salsa and Cheese",
          price: "6.00"  
        },
        {
          name: "Mini Special Pizza",
          discription: "with fresh Tomato salsa, Cheese, Bacon, Peppers and Mashrooms",
          price: "6.50"  
        }
      ]
    }
  }
  render(){
    return (
        <>
        <CategoryOption 
        nameForClass={"appetisers"}
        headerName={"appetisers"}
        list={this.state.appesiters}
         />
        <CategoryOption 
        nameForClass={"salads"}
        headerName={"salads"}
        list={this.state.salads}
         />
        <CategoryOption 
        nameForClass={"pasta"}
        headerName={"pasta"}
        list={this.state.pasta}
         />
         <CategoryOption 
        nameForClass={"risotto"}
        headerName={"risotto"}
        list={this.state.risotto}
         />
        <CategoryOption 
        nameForClass={"trHMGRDishes"}
        headerName={"traditional homemade greek dishes"}
        list={this.state.trHMGRDishes}
         />
         <CategoryOption 
        nameForClass={"seaFood"}
        headerName={"sea food"}
        list={this.state.seaFood}
         />
        <CategoryOption 
        nameForClass={"fromTheGrill"}
        headerName={"from the grill"}
        list={this.state.fromTheGrill}
         />
         <CategoryOption 
        nameForClass={"desserts"}
        headerName={"desserts"}
        list={this.state.desserts}
         />
         <CategoryOption 
        nameForClass={"childrensMenu"}
        headerName={"children's menu"}
        list={this.state.childrensMenu}
         />
         </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#mainBody")
)