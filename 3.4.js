const myCar = { 
    make: "Toyota", 
    model: "Camry", 
    tires: 4, 
    doors: 4, 
    color: "niebieski", 
    forSale: false 
  }; 
  let propColor = "color"; 
  myCar[propColor] = "czerwony"; 
  propColor = "forSale"; 
  myCar[propColor] = true; 
  console.log(myCar.make + " " + myCar.model); 
  console.log(myCar.forSale);