
var colors = ['#fd0e35', '#cc3336', '#e12c2c', '#fe4c40', '#fe6f5e', '#ffb97b', '#e77200', '#fbe7b2', '#f2c649', '#fcd667', '#fed85d', '#fafa37', '#ffff99', '#9de093', '#63b76c', '#33cc99', '#1ab385', '#29ab87', '#00cc99', '#00755e', '#8dd9cc', '#01786f', '#30bfbf', '#00cccc', '#2d383a', '#76d7ea', '#93ccea', '#003366', '#a9b2c3', '#c3cde6', '#3c69e7', '#7a89b8', '#8d90a1', '#3f26bf', '#652dc1', '#6b3fa0', '#d6aedd', '#e667ce', '#ebb0d7', '#a50b5e', '#e30b5c', '#fdd7e4', '#fc80a5', '#ff91a4', '#e97451', '#87421f', '#926f5b', '#dea681', '#d27d46', '#664228', '#fa9d5a', '#edc9af', '#ffcba4', '#805533', '#fdd5b1', '#eed9c4', '#665233', '#837050', '#e6bc5c', '#d9d6cf', '#c88a65'];

var names = ["Scarlet", "Madder Lake", "Permanent Geranium Lake", "Sunset Orange", "Bittersweet", "Macaroni and Cheese", "Mango Tango", "Banana Mania", "Maize", "Goldenrod", "Dandelion", "Maximum Yellow", "Canary", "Granny Smith Apple", "Fern", "Shamrock", "Mountain Meadow", "Jungle Green", "Caribbean Green", "Tropical Rain Forest", "Middle Blue Green", "Pine Green", "Maximum Blue Green", "Robin\'s Egg Blue", "Outer Space", "Sky Blue", "Cornflower", "Midnight Blue", "Cadet Blue", "Periwinkle", "Bluetiful", "Wild Blue Yonder", "Manatee", "Ultramarine Blue", "Purple Heart", "Royal Purple", "Purple Mountains\' Majesty", "Brilliant Rose", "Thistle", "Jazzberry Jam", "Razzmatazz", "Piggy Pink", "Tickle Me Pink", "Salmon", "Burnt Sienna", "Fuzzy Wuzzy", "Beaver", "Tumbleweed", "Raw Sienna", "Van Dyke Brown", "Tan", "Desert Sand", "Peach", "Burnt Umber", "Apricot", "Almond", "Raw Umber", "Shadow", "Raw Sienna (I)", "Timberwolf", "Antique Brass"];
  
        function randomColor() { 
            var index = Math.floor( 
                    Math.random() * colors.length);
          
            // selecting random color 
            var random_color = colors[index];
            var random_name = names[index];
              
            var text = document.getElementById('random-text'); 
            var bg = document.getElementById('random-text-bg'); 
            bg.style.backgroundColor = random_color; 
            text.innerHTML = "<mark>" + random_name + "</mark>";
        }  

randomColor();