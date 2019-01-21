// I want you to create two functions:
// first function create a dollFactory that accepts an array as an argument
// -pass each item into the second function.
// second function hairMachine that accepts an item as an argument and adds hair to the item.
// - if the item has green or brown eyes add the property hairColor with the value "Brown"
// - if blue eyes "blonde"
// also change the hasHair value appropriately

const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
]

const dollFactory = dolls => {
    dolls.forEach(doll  => {
        hairMachine(doll);
    })
    return dolls;
}

const hairMachine = doll => {
    doll.hasHair = true;
    if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
        doll.hairColor = "Brown";
    } else {
        doll.hairColor = "Blond";
    }
}

dollFactory(dollBin);

console.log(dollBin);

// 1. Define a `createDollComponent` function that takes one argument, the completed doll object (with hair), and returns a HTML representation of that doll (must look like screenshot) :dolls:
// 2. Define a `printDoll` function that takes the HTML representation of the doll and prints it to the DOM :printer:
// 3. Hint: you may need FlexBox to make the cards to line up nicely

const createDollComponent = dolls => {
    dollList = "";
    dolls.forEach(doll => {
        dollList += `<section class="dollBox">
            <h2>${doll.name}</h2>
            <p class="${doll.eyeColor}">${doll.eyeColor} eyes</p>
            <p>${doll.hairColor} hair</p>
        </section>`;
    });
}

const printDoll = () => {
    createDollComponent(dollBin);
    let dollStore = document.querySelector("#dollList");
    dollStore.innerHTML = dollList;
}

printDoll();


////

// Jenna's code
const dollFactory = dolls => {
    dolls.forEach(doll => {
      hairMachine(doll)
    })
    return dolls
  }
  
  const hairMachine = doll => {
      doll.hasHair = true
    if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
      doll.hairColor = "Brown"
    } else {
      doll.hairColor = "Blonde"
    }
  }

  // Meg's code

  const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
  ]
  
  const dollFactory = dolls => {
    dolls.forEach(doll => {
      hairMachine(doll)
  
      const dollHTML = createDollComponent(doll)
      printDoll(dollHTML)
      //printDoll(createDollComponent(doll))
    })
  }
  
  const hairMachine = doll => {
    if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
      doll.hasHair = true
      doll.hairColor = "Brown"
    } else {
      doll.hasHair = true
      doll.hairColor = "Blonde"
    }
  }
  
  const createDollComponent = completedDoll => {
      return `
      <div class="dollCard">
          <h2>${completedDoll.name}</h2>
          <p class=${completedDoll.eyeColor}>${completedDoll.eyeColor} eyes</p>
          <p>${completedDoll.hairColor} hair</p>
      </div>
      `
  }
      
  const printDoll = dollHTML => {
      document.querySelector("#dollListing").innerHTML += dollHTML
  }
  
  dollFactory(dollBin)