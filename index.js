//christmas tree
function tree() {
  let hash = "#";
  let level = prompt("Please enter here, how long may be Your tree? \n Minimum is 1.");

  if (level >= 1 || typeof level === 'number') {
    for (i = 0; i < level; i++) {
      console.log(hash);
      for (j = 0; j < 1; j++) {
        hash += "#";
      };
    };
  }
  else {
    console.log("The tree must have at least 1 level and the number of level should be integer type.");
  };
};

//fizzBuzz
function fizzBuzz() {
  const fizz = "fizz";
  const buzz = "buzz";
  counter = 1;

  for (i = 0; i < 100; i++) {
    if (counter % 3 == 0 && counter % 5 == 0) {console.log(fizz,buzz);}
    else if (counter % 3 == 0) {console.log(fizz)}
    else if (counter % 5 == 0) {console.log(buzz)}
    else {console.log(counter)}
    counter++;
  }
};

//chessBoard
function chessBoard() {
  let board = "";
  let size = prompt( "How big cheesBoard should be?" );

  for ( i=0; i < size; i++ ) {
    for ( j=0; j < size; j++ ) {
      if ( ( i+j ) % 2 == 0 ) { board += "0"; }
      else { board += "X" }
    };
    board += "\n";
  };
  console.log( board );
}

tree();
fizzBuzz();
chessBoard();
