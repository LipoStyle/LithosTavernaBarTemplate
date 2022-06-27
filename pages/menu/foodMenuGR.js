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
      // ΟΡΕΚΤΙΚΑ
      appesiters: [
        {
          name: "ΤΖΑΤΖΙΚΙ ΣΠΙΤΙΚΟ ΧΕΙΡΟΠΟΙΗΤΟ",
          discription: "",
          price: "4.70"  
        },
        {
          name: "ΧΤΥΠΗΤΗ",
          discription: "",
          price: "5.00"  
        },
        {
          name: "ΦΑΒΑ ΣΠΙΤΙΚΗ ΧΕΙΡΟΠΟΙΗΤΗ",
          discription: "φαβα με καρε ντοματα, κρεμμυδι ξερο, ελαιολαδο και καπαροφυλλα",
          price: "5.00"  
        },
        {
          name: "ΨΗΤΑ ΛΑΧΑΝΙΚΑ NAPOLEON ΜΕ ΚΥΠΡΙΑΚΟ ΧΑΛΟΥΜΙ",
          discription: "μελιτζανα, κολοκυθι, πιπεριες, μανιταρια πλευρωτους, ντοματα, κρεμμυδι και τυρι χαλουμι",
          price: "7.60"  
        },
        {
          name: "ΠΙΠΕΡΙΑ ΦΛΩΡΙΝΗς ΜΕ ΓΕΜΙΣΤΗ ΦΕΤΑ",
          discription: " ",
          price: "5.00"  
        },
        {
          name: "ΧΟΡΤΑ ΦΡΕΣΚΑ",
          discription: "",
          price: "6.00"  
        },
        {
          name: "ΓΙΓΑΝΤΕΣ ΠΛΑΚΙ ΜΕ ΦΡΕΣΚΙΑ ΝΤΟΜΑΤΑ",
          discription: "",
          price: "6.00"  
        },
        {
          name: "ΠΑΤΑΤΕΣ ΤΗΓΑΝΙΤΕΣ",
          discription: " ",
          price: "6.50"  
        },
        {
          name: "ΚΡΟΚΕΤΕΣ 4 ΤΥΡΙΩΝ",
          discription: "τηγανητες μπουκιτσες τυριων",
          price: "6.50"  
        },
        {
          name: "ΡΟΛΑΚΙΑ ΓΕΜΙΣΤΑ",
          discription: "τηγανιτα ρολακια γεμιστα με τυρι - σπανακι - κρεμα τυριων",
          price: "6.50"  
        },
        {
          name: "ΣΚΟΡΔΟΨΩΜΟ ΦΡΕΣΚΟΩΗΜΕΝΟ",
          discription: " ",
          price: "4.50"  
        },
        {
          name: "ΦΕΤΑ ΤΗΓΑΝΙΤΗ ΜΕ ΜΕΛΙ ΚΑΙ ΣΟΥΣΑΜΙ ΧΕΡΟΠΟΙΗΤΗ",
          discription: "",
          price: "5.50"  
        },
        {
          name: "ΓΑΡΙΔΕΣ ΣΑΓΑΝΑΚΙ ΜΕ ΦΕΤΑ ΚΑΙ ΣΟΥΣΑΜΙ",
          discription: "",
          price: "8.50"  
        },
        {
          name: "ΧΤΑΠΟΔΙ ΞΥΔΑΤΟ ΜΕ ΧΕΙΡΟΠΟΙΗΤΗ ΦΑΒΑ",
          discription: "",
          price: "7.00"  
        },
        {
          name: "ΓΑΥΡΟΣ ΜΑΡΙΝΑΤΟΣ",
          discription: "",
          price: "6.00"  
        },
        {
          name: "ΘΡΑΨΑΛΑΚΙΑ ΤΗΓΑΝΙΤΑ",
          discription: "",
          price: "8.50"  
        },
        {
          name: "ΜΥΔΙΑ ΑΧΝΙΣΤΑ",
          discription: " ",
          price: "8.50"  
        }
      ],
      // ΣΑΛΑΤΕΣ
      salads: [
        {
          name: "ΜΑΡΟΥΛΙ",
          discription: "μαρουλι, φρεσκο κρεμμυδι, ανηθος",
          price: "6.80"  
        },
        {
          name: "ΧΩΡΙΑΤΙΚΗ",
          discription: "ντοματα, αγγουρι, πιπεριες, κρεμμυδι, ελιες, καπαρη, φετα, ελαιολαδο",
          price: "8.50"  
        },
        {
          name: "ΣΠΑΝΑΚΙ ΜΕ ΜΑΝΟΥΡΙ ΨΗΤΟ",
          discription: "διαλεχτα φυλλα σπανακι, λιαστη ντοματα, μανουρι ψητο, κρεμα βαλσαμικο, καβουρδισμενο κουκουναρι και σουσαμι",
          price: "9.00"  
        },
        {
          name: "ΛΙΘΟΣ",
          discription: "ροκα, πρασινη αναμεικτη σαλατα, κατσικισιο τυρι, σταφυλι, καραμελωμενα φουντουκια, κρεμα βαλσαμικο",
          price: "10.00"  
        },
        {
          name: "ΚΑΙΣΑΡΑ",
          discription: "πρασινη αναμοικτη σαλατα, καλαμποκι, τραγανο μπεικον, νιφαδες παρμεζανας, φιλετακια κοτοπουλο, χειροποιητα κρουτον, αυθεντικη χειροποιητη caesar sauce",
          price: "9.50"  
        },
        {
          name: "ΝΗΣΙΩΤΙΚΗ",
          discription: "ντοματινια, χτυπητη, κριθαενια παξιμαδια, ελιες, καπαρη,καπαροφυλλα, ελαιολαδο",
          price: "9,00"  
        },
        
      ],
      // ΖΥΜΑΡΙΚΑ
      pasta: [
        {
          name: "(Vegan) ΣΠΑΓΓΕΤΙ ΛΑΧΑΝΙΚΩΝ",
          discription: "με καροτο, κολοκυθι, πιπεριες, μανιταρια, κρεμμυδι, σκορδο, ελιες και φρεσκια σαλτσα νοτματας",
          price: "9,50"  
        },
        {
          name: "ΛΙΘΟΣ Spice Linguine",
          discription: "με γαριδες, πιπεριες chili, σκορδο, σβησμενα με ουζο, bisque γαριδαςκαι σαλτσα φρεσκιας ντοματας",
          price: "13.50"  
        },
        {
          name: "ΚΑΡΜΠΟΝΑΡΑ",
          discription: "με σπαγετι, καπνιστο μπεικον, αυγο, παρμεζανα και κρεμα γαλακτος",
          price: "10.00"  
        }
      ],
      // ΡΙΖΟΤΟ
      risotto: [
        {
          name: "ΡΙΖΟΤΟ ΓΑΡΙΔΑΣ",
          discription: "με σαφραν, κρεμμθδι και σκορδο σβησμενα με ουζο, bisque γαριδας, κρεμα γαλακτος και παρμεζανα",
          price: "12.00"  
        },
        {
          name: "(Vegan) ΡΙΖΟΤΟ ΛΑΧΑΝΙΚΩΝ",
          discription: "με σπεραγγια, καροτο, αρακα, ανηθο, φρεσκο κρεμμυδι και σκορδο σβησμενα με λευκο κρασι και κρεμα γαλακτος 'φυτικη'",
          price: "10.00"  
        },
        {
          name: "ΡΙΖΟΤΟ ΛΙΘΟΣ",
          discription: "με κοτοπουλο, μπεικον, μανιταρια πλευρωτους, σκορδο, κρεμμυδι σβησμενα με λευκο κρασι και κρεμα παρμεζανας",
          price: "13.50"  
        }
      ],
      // ΜΑΓΕΙΡΕΥΤΑ
      trHMGRDishes: [
        {
          name: "ΠΑΡΑΔΟΣΙΑΚΟΣ ΜΟΥΣΑΚΑΣ ΣΕ ΠΗΛΙΝΟ",
          discription: "φετες πατατας και μελιτζανας σε στωσεις με κιμα μοσχαρισιο σιγοβρασμενα σε σαλτσα ντοματας και απαλη κρεμα μπεσαμελ",
          price: "11.50"  
        },
        {
          name: "ΣΠΙΤΙΚΟ ΓΙΟΥΒΕΤΣΙ ΜΟΣΧΑΡΙ",
          discription: "κριθαρακι με τρυφερα κομματια μοσχαριου μαζι με μυρωδικα σιγομαγειρεμενα σε σπιτικη σαλτζα ντοματας και τριμμενη παραδοσιακη φετα",
          price: "11.00"  
        },
        {
          name: "ΝΗΣΙΟΤΙΚΟ ΓΙΟΥΒΕΤΣΙ ΓΑΡΙΔΑΣ",
          discription: "κριθαρακι με γαριδες σωταρισμενες μαζι με ντοματινια, ψιλοκκομενο κρεμμυδι και σκορδο σβησμενα με ουζο, bisque γαριδας, φρεσκια σαλτσα ντοματας, παρμεζανα τριμμενη και φρεσκο μαϊντανο",
          price: "13.00"  
        },
        {
          name: "ΑΡΝΙ ΚΟΤΣΙ",
          discription: "σιγομαγειρεμενο κοτσι αρνιου σε κοκκινο κρασι με δενδρολιβανο και θυμαρι συνοδευομενο με χειροποιητο δελουδινο πουρε πατατας, σαλτσα demi glase και καβουρδισμενο κουκουναρι",
          price: "14.50"  
        },
        {
          name: "ΑΡΝΙ ΚΛΕΦΤΙΚΟ",
          discription: "αρνακι γαλακτος με πατατες, κρεμμυδι, σκορδο, πιπεριες, φρεσκα μυρωδικα και κεφαλοτυρι με κυβους σιγοσβησμενο στη λαδοκολλα",
          price: "14.00"  
        }
      ],
      // ΨΑΡΙΑ ΚΑΙ ΘΑΛΑΣΣΙΝΑ
      seaFood: [
        {
          name: "ΤΣΙΠΟΥΡΑ ΨΗΤΗ",
          discription: "συνεοδευεται με χορτα εποχης, σαλατα πατζαρια και dip λαδολεμονο",
          price: "17.00"  
        },
        {
          name: "ΛΑΒΡΑΚΙ ΨΗΤΟ",
          discription: "συνεοδευεται με χορτα εποχης, σαλατα πατζαρια και dip λαδολεμονο",
          price: "17.50"  
        },
        {
          name: "ΓΑΡΙΔΕΣ ΨΗΤΕΣ",
          discription: "συνοδεθονται με πρασινη αναμεικτη σαλατα / ντοματινια με dressing  βαλσαμικο-μελι και dip λαδολεμονο",
          price: "16.50"  
        },
        {
          name: "ΧΑΠΟΔΙ ΨΗΤΟ",
          discription: "συνοδευεται με σπιτικη φαβα, ντοματινια, λαδι βασιλικου και κρεμα βαλσαμικο",
          price: "15.00"  
        }
      ],
      // ΤΗΣ ΩΡΑΣ
        fromTheGrill: [
        {
          name: "ΜΠΡΙΖΟΛΑ ΧΟΙΡΙΝΗ",
          discription: "συνοδευεται με κυδωνατες πατατες τηγανητες, πρασινη αναμεικτη σαλατα και dip γιαουρτιου",
          price: "12.00"  
        },
        {
          name: "ΜΠΙΦΤΕΚΙΑ ΧΕΙΡΟΠΟΙΗΤΑ'",
          discription: "συνοδευονται με κυδωνατες πατατες τηγανητες, πρασινη αναμεικτη σαλατα και dip γιαουρτιου",
          price: "12.00"  
        },
        {
          name: "ΦΙΛΕΤΑΚΙΑ ΧΟΙΡΙΝΑ",
          discription: "συνοδευονται με κυδωνατες πατατες τηγανητες, πρασινη αναμεικτη σαλατα και dip BBQ SAUCE",
          price: "12.00"  
        },
        {
          name: "ΦΙΛΕΤΑΚΙΑ ΧΟΙΡΙΝΑ",
          discription: "a la creme/ πιπερατα, συνοδευονται με αρωματικο ρυζι basmati",
          price: "12.00"  
        },
        {
          name: "ΦΙΛΕΤΟ ΚΟΤΟΠΟΥΛΟ",
          discription: "συνοδευονται με κυδωνατες πατατες τηγανητες, πρασινη αναμεικτη σαλατα και dip creamy honey mustard sauce",
          price: "12.50"  
        },
        {
          name: "ΦΙΛΕΤΟ ΚΟΤΟΠΟΥΛΟ",
          discription: "a la creme/ πιπερατα, συνοδευονται με αρωματικο ρυζι basmati",
          price: "12.50"  
        },
        {
          name: "ΣΟΥΒΛΑΚΙ ΧΟΙΡΙΝΟ ΨΑΡΟΝΕΦΡΙ",
          discription: "συνοδευεται με κυδωνατες πατατες τηγανιτες, ντοματα, πιτα κομμενη και dip τζατζικι",
          price: "11.50"  
        },
        {
          name: "ΣΟΥΒΛΑΚΙ ΚΟΤΟΠΟΥΛΟ ΜΠΟΥΤΙ",
          discription: "συνοδευεται με κυδωνατες πατατες τηγανιτες, ντοματα, πιτα κομμενη και dip creamy honey mustard sauce",
          price: "12.00"  
        },
        {
          name: "ΑΡΝΙΣΙΑ ΠΑΪΔΑΚΙΑ",
          discription: "συνοδευονται με πρασινη σαλατα, κυδυνατες πατατες τηγανιτες, dip γιαουρτιου και dip BBQ SAUCE",
          price: "13.50"  
        },
        {
          name: "ΦΙΛΕΤΟ ΜΟΣΧΑΡΙ TAGLIATA",
          discription: "συνοδευεται με σπαραγια σωτε και γλυκια σαλτσα κρασιου με demi glase και κρεμα γαλατος",
          price: "23.50"  
        }
      ],
      // ΕΠΙΔΟΡΠΙΑ ΧΕΙΡΟΠΟΙΗΤΑ
      desserts: [
        {
          name: "ΠΑΡΑΔΟΣΙΑΚΟΣ ΧΑΛΒΑΣ ΣΙΜΙΓΔΑΛΕΝΙΟΣ",
          discription: "με καβουρδισμενα αμυγδαλα και σταφιδες",
          price: "6.00"  
        },
        {
          name: "ΔΡΟΣΕΡΗ ΤΑΡΤΑ ΛΕΜΟΝΙ",
          discription: "με παγωτο σορμπε φραουλας",
          price: "6.50"  
        },
        {
          name: "ΙΤΑΛΙΚΗ ΠΑΝΑΚΟΤΑ",
          discription: "με φρουτα του δασους και μαρμελαδα βυσσινο",
          price: "6.50"  
        },
        {
          name: "ΣΟΚΟΛΑΤΟΠΙΤΑ",
          discription: "με παγωτο βανιλια και σιροποι φραουλα",
          price: "6.50"  
        }
      ],
      // ΠΑΙΔΙΚΟ ΜΕΝΟΥ
      childrensMenu: [
        {
          name: "ΨΗΤΑ ΜΠΙΦΤΕΚΙΑ",
          discription: "με πατατες τηγανιτες Ή ρυζι basmati και dip γιαουρτιου",
          price: "8.00"  
        },
        {
          name: "ΚΟΤΟΜΠΟΥΤΚΙΕΣ",
          discription: "με πατατες τηγανιτες και dip μαγιονεζας",
          price: "7.50"  
        },
        {
          name: "Mini Pizza ΜΑΡΓΑΡΙΤΑ",
          discription: "με σαλτσα ντοματας και τυρι",
          price: "6.00"  
        },
        {
          name: "Mini Pizza Special",
          discription: "με σαλτσα ντοματα, τυρι, μπεικον, πιπεριες και μανιταρια",
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
        headerName={"ΟΡΕΚΤΙΚΑ"}
        list={this.state.appesiters}
         />
        <CategoryOption 
        nameForClass={"salads"}
        headerName={"ΣΑΛΑΤΕΣ"}
        list={this.state.salads}
         />
        <CategoryOption 
        nameForClass={"pasta"}
        headerName={"ΖΥΜΑΡΙΚΑ"}
        list={this.state.pasta}
         />
         <CategoryOption 
        nameForClass={"risotto"}
        headerName={"ΡΙΖΟΤΟ"}
        list={this.state.risotto}
         />
        <CategoryOption 
        nameForClass={"trHMGRDishes"}
        headerName={"ΜΑΓΕΙΡΕΥΤΑ"}
        list={this.state.trHMGRDishes}
         />
         <CategoryOption 
        nameForClass={"seaFood"}
        headerName={"ΨΑΡΙΑ & ΘΑΛΑΣΣΙΝΑ"}
        list={this.state.seaFood}
         />
        <CategoryOption 
        nameForClass={"fromTheGrill"}
        headerName={"ΤΗΣ ΩΡΑΣ"}
        list={this.state.fromTheGrill}
         />
         <CategoryOption 
        nameForClass={"desserts"}
        headerName={"ΕΠΙΔΟΡΠΙΑ ΧΕΙΡΟΠΟΙΗΤΑ"}
        list={this.state.desserts}
         />
         <CategoryOption 
        nameForClass={"childrensMenu"}
        headerName={"ΠΑΙΔΙΚΟ ΜΕΝΟΥ"}
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