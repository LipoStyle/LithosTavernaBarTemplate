function CategoryOption(props){
  return (
    <div class={props.nameForClass}>
      <h2>{props.headerName.toUpperCase()}</h2>
      <ol>
        {props.list.map((name) => 
        <li key={name.name}>
          <p>{name.name} <span>{name.discription}</span></p>
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
      draftBeer: [
        {
          name: "Small",
          discription: " ",
          price: "3.00"  
        },
        {
          name: "Large",
          discription: " ",
          price: "5.00"  
        }
      ],
      bottlesOfBeer: [
        {
          name: "Amstel 330ml",
          discription: " ",
          price: "3.50"
        },
        {
          name: "Heineken 330ml",
          discription: " ",
          price: "3.50"
        },
        {
          name: "Mythos 330ml/500ml",
          discription: " ",
          price: "3.50"
        },
        {
          name: "Red Mythos 330ml/500ml",
          discription: " ",
          price: "3.50"
        },
        {
          name: "Fix 500ml",
          discription: " ",
          price: "3.50"
        },
        {
          name: "Corona",
          discription: " ",
          price: ""
        },
        {
          name: "Guinness",
          discription: " ",
          price: ""
        },
        {
          name: "Amstel Radler",
          discription: " ",
          price: ""
        },
        {
          name: "Alcohol free beer",
          discription: " ",
          price: ""
        },
        {
          name: "Kaiser",
          discription: " ",
          price: ""
        }
      ],
      ciders: [
        {
          name: "Kopparberg",
          discription: "Mixed fruit, strawberry-lime",
          price: " "
        },
        {
          name: "Somersby",
          discription: "apple",
          price: " "
        }
      ],
      softDrinks: [
        {
          name: "Coca-Cola",
          discription: "",
          price: "2.50"
        },
        {
          name: "Coca-Cola Light",
          discription: "",
          price: "2.50"
        },
        {
          name: "Coca-Cola Zero",
          discription: "",
          price: "2.50"
        },
        {
          name: "Sprite",
          discription: "",
          price: "2.50"
        },
        {
          name: "Fanta lemon",
          discription: "",
          price: "2.50"
        },
        {
          name: "Fanta orange",
          discription: "",
          price: "2.50"
        },
        {
          name: "Soda Water",
          discription: "",
          price: "2.50"
        },
        {
          name: "Sparkling water",
          discription: "",
          price: "2.50"
        },
        {
          name: "Epsa orange without gas",
          discription: "",
          price: "2.50"
        }
      ],
      schweppes: [
        {
          name: "Soda Water",
          discription: "",
          price: "2.50"
        },
        {
          name: "Bitter lemon",
          discription: "",
          price: "2.50"
        },
        {
          name: "Ginger ALE",
          discription: "",
          price: "2.50"
        }
      ],
      nationalDrinks: [
        {
          name: "Ouzo",
          discription: "",
          price: "2.50"
        },
        {
          name: "Tsipouro",
          discription: "",
          price: "2.50"
        },
        {
          name: "Rakomelo",
          discription: "",
          price: "2.50"
        }
      ],
      classicCocktails: [
        {
          name: "Melograno",
          discription: "martini,squeezed lime, strawberry juice",
          price: "2.50"
        },
        {
          name: "Black Russian",
          discription: "vodka, kahlua",
          price: "2.50"
        },
        {
          name: "White Russian",
          discription: "vodka, kahlua, cream",
          price: "2.50"
        },
        {
          name: "Tsipouro",
          discription: "",
          price: "2.50"
        },
        {
          name: "B-52",
          discription: "kahlua, baileys, grand marnier",
          price: "2.50"
        },
        {
          name: "B-53",
          discription: "kahlua, baileys, vodka",
          price: "2.50"
        },
        {
          name: "Balalaika",
          discription: "lime, triple sec, vodka",
          price: "2.50"
        },
        {
          name: "Cuba Libre",
          discription: "rum, squeezed lime, coca cola",
          price: "2.50"
        },
        {
          name: "Long Island Iced Tea",
          discription: "um, vodka, gin, white tequila, Cointreau, lemon juice, coca cola",
          price: "2.50"
        },
        {
          name: "Sex On The Beach",
          discription: "vodka, peach schnapps, orabge juice, grenadine",
          price: "2.50"
        },
        {
          name: "Mai Tai",
          discription: "white rum, black rum, malibu, orabge and pineapple juice, grenadine",
          price: "2.50"
        },
        {
          name: "Espresso Martini",
          discription: "sugar syrop, κρύο espresso, kahlua, vodka",
          price: "2.50"
        },
        {
          name: "Dry martini",
          discription: "gin, martini extra dry, olive",
          price: "2.50"
        },
        {
          name: "Apple martini",
          discription: "vodka, apple liqueur, apple, syrop",
          price: "2.50"
        },
        {
          name: "Pornstar Martini",
          discription: "vanilla syrup, passion fruit, lime juice, liquer passion fruit, vanilla vodka",
          price: "2.50"
        },
        {
          name: "Ginger Martini",
          discription: "vodka, ginger, simple syrop, orange bitters, lemongrass",
          price: "2.50"
        },
        {
          name: "Cucumber Martini",
          discription: "syrop sugar, lime, gin",
          price: "2.50"
        },
        {
          name: "Blue Hawaiian",
          discription: "rum, vodka, blue curacao, pineapple juice",
          price: "2.50"
        },
        {
          name: "Blue Lady",
          discription: "gin, blue curacao, fresh lemon juice",
          price: "2.50"
        },
        {
          name: "Bubblegum",
          discription: "bubblegum vodka, fresh lemon juice, fresh lime juice, strawberry, simple syrop",
          price: "2.50"
        },
        {
          name: "Mojito",
          discription: "white rum, squeezed lime, mint leaves, soda water, brown sugar",
          price: "2.50"
        },
        {
          name: "Caipirinha",
          discription: "cacha a, squeezed lime, brown sugar",
          price: "2.50"
        },
        {
          name: "Caipirinha Ursus",
          discription: "cacha a, ursus, squeezed lime, brown sugar",
          price: "2.50"
        },
        {
          name: "Caipirissima",
          discription: "rum, squeezed lime, brown sugar",
          price: "2.50"
        },
        {
          name: "Caipiroska",
          discription: "vodka, squeezed lime, brown sugar",
          price: "2.50"
        },
        {
          name: "Caipigreek",
          discription: "ouzo, squeezed lime , brown sugar",
          price: "2.50"
        },
        {
          name: "Orgasm",
          discription: "baileys, kahlua, vodka, cream",
          price: "2.50"
        },
        {
          name: "Bethel's double Orgasm",
          discription: "vodka, kahlua, baileys, whiskey, malibu, cream",
          price: "2.50"
        },
        {
          name: "Tequilinha",
          discription: "tequila, squezzed lime, brown sugar",
          price: "2.50"
        },
        {
          name: "Squeeze",
          discription: "tequila, squeezed lime, lime liquer, lemonade",
          price: "2.50"
        },
        {
          name: "Bramble",
          discription: "sugar syrop, lemon juice, gin, creme de mure",
          price: "2.50"
        },
        {
          name: "Manhatan Dry",
          discription: "Angostura, extra dry vermouth, american whiskey",
          price: "2.50"
        },
        {
          name: "Manhatan Sweet(classic)",
          discription: "Cherry syrup, angostura, sweet rosso vermouth, american whiskey",
          price: "2.50"
        },
        {
          name: "Negroni",
          discription: "sweet rosso vermouth, campari , gin",
          price: "2.50"
        },
        {
          name: "Pina Colada",
          discription: "rum, malibu, batida de cocco, pineapple juice",
          price: "2.50"
        },
        {
          name: "Tom Collins",
          discription: "gin, fresh lemon juice, soda water, brown sugar",
          price: "2.50"
        },
        {
          name: "Gin Fizz",
          discription: "gin, fresh lemon juice, sugar, soda water",
          price: "2.50"
        },
        {
          name: "White Lady",
          discription: "gin, Cointreau, fresh lemon juice",
          price: "2.50"
        },
        {
          name: "Cosmopolitan",
          discription: "vodka, Cointreau, lime, cranberry juice",
          price: "2.50"
        },
        {
          name: "Cointreaupolitan",
          discription: "Cointreau, lemon juice, cranberry juice",
          price: "2.50"
        },
        {
          name: "Kamikaze",
          discription: "vodka, Cointreau, fresh lemon juice",
          price: "2.50"
        },
        {
          name: "WaterMelon",
          discription: "southern comfort, amaretto, orange adn pineapple juice, grenadine",
          price: "2.50"
        },
        {
          name: "Daquiri",
          discription: "white rum, fresh lime juice, sugar",
          price: "2.50"
        },
        {
          name: "Margarita",
          discription: "tequila, Cointreau, fresh lemon juice, salt",
          price: "2.50"
        },
        {
          name: "Bloody Mary",
          discription: "vodka, tomato juice, fresh lemon juice, angostura bitters, tabasco, black pepper, salt",
          price: "2.50"
        },
        {
          name: "Aperol Spritz",
          discription: "aperol, sparkling white wine, soda water, orange",
          price: "2.50"
        },
        {
          name: "Irish coffee",
          discription: "espresso, Jameson, whipped cream",
          price: "2.50"
        },
        {
          name: "Citrus Tango",
          discription: "vodka, squeezed lime, squeezed orange, lemonade",
          price: "2.50"
        }
      ],
      sunrises: [
        {
          name: "Tequila Sunrise",
          discription: "tequila, orange juice, grenadine",
          price: "2.50"
        },
        {
          name: "Amaretto Sunrise",
          discription: "amaretto, orange juice, grenadine",
          price: "2.50"
        },
        {
          name: "Southern Sunrise",
          discription: "southern comfort, orange juice, grenadine",
          price: "2.50"
        }
      ],
      froCockFlavors:[
        {
          name: "Mojito",
          discription: "strawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: "2.50"
        },
        {
          name: "Daquiri",
          discription: "strawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: "2.50"
        },
        {
          name: "Margarita",
          discription: "strawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: "2.50"
        },
        {
          name: "Caipiroska",
          discription: "strawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: "2.50"
        }
      ],
      virginCocktails: [
        {
          name: "Tropical Frozen",
          discription: "",
          price: ""
        },
        {
          name: "Daquiri Frozen",
          discription: "strawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: ""
        },
        {
          name: "Mojito  Frozen",
          discription: "trawberry, cherry, lemon, lemon-lime, peach, passion fruit, mango, banana, pineapple, watermelon, pomegranate",
          price: ""
        }
      ],
      wine: [
        {
          name: "Glass of red/white/rose wine",
          discription: "",
          price: ""
        },
        {
          name: "Glass of medium sweet red/white/rose wine",
          discription: "",
          price: ""
        }
      ],
      botOfWine: [
        {
          name: "Bios Hellenic",
          discription: "red win",
          price: ""
        },
        {
          name: "Dogmatikos",
          discription: "white wine - 750ml",
          price: ""
        },
        {
          name: "Damascenos",
          discription: "red wine - 750ml",
          price: ""
        },
        {
          name: "Imeros",
          discription: "white wine - 750ml",
          price: ""
        },
        {
          name: "Entechnos",
          discription: "red wine - 750ml",
          price: ""
        },
        {
          name: "MoshoFilero Boutari",
          discription: "white wine - 750ml",
          price: ""
        },
        {
          name: "Queen of Hearts Rose Lazaridi",
          discription: "750ml",
          price: ""
        },
        {
          name: "king of Hearts Red Lazaridi",
          discription: "750ml",
          price: ""
        },
        {
          name: "Rose demi-sec Boutari",
          discription: "750ml",
          price: ""
        },
        {
          name: "Rose sec Boutari",
          discription: "750 ml",
          price: ""
        },
        {
          name: "Gerovasili white",
          discription: "750ml",
          price: ""
        }
      ],
      sagriaHomemade: [
        {
          name: "Sagria red glass",
          discription: "half liter",
          price: ""
        },
        {
          name: "Sagria white glass",
          discription: "half liter",
          price: ""
        }
      ],
      sparklingWine: [
        {
          name: "Moscato d'Asti",
          discription: "",
          price: ""
        },
        {
          name: "Prosecco",
          discription: "",
          price: ""
        }
      ]
    }
  }
    render(){
      return (
          <>
          <CategoryOption 
            nameForClass={"draftBeer"}
            headerName={"Draft Beer"}
            list={this.state.draftBeer}
           />
           <CategoryOption 
            nameForClass={"bottlesOfBeer"}
            headerName={"Bottles of Beer"}
            list={this.state.bottlesOfBeer}
           />
           <CategoryOption 
            nameForClass={"ciders"}
            headerName={"Ciders"}
            list={this.state.ciders}
           />
          <CategoryOption 
            nameForClass={"softDrinks"}
            headerName={"Soft Drinks"}
            list={this.state.softDrinks}
           />
           <CategoryOption 
            nameForClass={"schweppes"}
            headerName={"Schweppes"}
            list={this.state.schweppes}
           />
           <CategoryOption 
            nameForClass={"nationalDrinks"}
            headerName={"National Drinks"}
            list={this.state.nationalDrinks}
           />
           <CategoryOption 
            nameForClass={"classicCocktails"}
            headerName={"Classic Cocktails"}
            list={this.state.classicCocktails}
           />
           <CategoryOption 
            nameForClass={"sunrises"}
            headerName={"Sunrises"}
            list={this.state.sunrises}
           />
           <CategoryOption 
            nameForClass={"froCockFlavors"}
            headerName={"Frozen cocktails with flavors"}
            list={this.state.froCockFlavors}
           />
           <CategoryOption 
            nameForClass={"virginCocktails"}
            headerName={"Virgin cocktails"}
            list={this.state.virginCocktails}
           />
           <CategoryOption 
            nameForClass={"wine"}
            headerName={"Wine"}
            list={this.state.wine}
           />
           <CategoryOption 
            nameForClass={"botOfWine"}
            headerName={"Bottles of wine"}
            list={this.state.botOfWine}
           />
           <CategoryOption 
            nameForClass={"sagriaHomemade"}
            headerName={"Sagria Homemade"}
            list={this.state.sagriaHomemade}
           />
           <CategoryOption 
            nameForClass={"sparklingWine"}
            headerName={"Sparkling wine"}
            list={this.state.sparklingWine}
           />
          </>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.querySelector("#mainBody")
  )