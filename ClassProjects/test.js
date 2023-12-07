var unitedStates = {
  population : 331900000,
  states : {
    nd : {
      capital: 'Bismark',
      population : 774948,
      largestCity : {
        name: 'Fargo',
        population : 126748
      }
    },
    tx : {
      capital : 'Austin',
      population : 29530000,
      largestCity : {
        name: 'Houston',
        population : 2326000
      }
    }
  }
}

for (key in unitedStates){
  for (subKey in unitedStates[key]){
    console.log(unitedStates[key][subKey]);
  }
}