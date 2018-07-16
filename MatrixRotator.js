const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    
    console.log('');
    console.log('direction ---> ', direction);
    console.log('   *** this.matrix *** ');
    console.log(this.matrix);

    let theMatrix = this.matrix;
    let stageMatrix = [];
    let rotatedMatrix = [];

    if (direction === 'ClockWise') {
      while (theMatrix[0].length > 0) {
        console.log('');
        console.log('theMatrix[0].length ---> ', theMatrix[0].length + '  in each array!');
        for (let i = theMatrix.length-1; i >= 0; i--) {
          stageMatrix.push(theMatrix[i][0]);
          console.log('theMatrix[i][0]    ', theMatrix[i][0]);
          console.log('stageMatrix    ', stageMatrix);
          theMatrix[i].shift();
          console.log(' >>> theMatrix <<<');
          console.log(theMatrix);
        }
        rotatedMatrix.push(stageMatrix);
        console.log(' ^^^ stageMatrix ^^^');
        console.log(stageMatrix);
        stageMatrix = [];
        console.log('stageMatrix reset ---> ', stageMatrix);
      }
      this.matrix = rotatedMatrix;
      console.log('   $$$ this.matrix $$$');
      console.log(this.matrix);
      console.log('');
    }

    else if (direction === 'CounterClockWise') {
      while (theMatrix[0].length > 0) {
        console.log('');
        console.log('theMatrix[0].length ---> ', theMatrix[0].length + '  in each array!');
        for (let i = 0; i < theMatrix.length; i++) {
          stageMatrix.push(theMatrix[i][theMatrix[i].length-1]);
          console.log('theMatrix[i][theMatrix[i].length-1] ---> ', theMatrix[i][theMatrix[i].length-1]);
          console.log('stageMatrix    ', stageMatrix);
          theMatrix[i].pop();
          console.log(' >>> theMatrix <<<');
          console.log(theMatrix);
        }
        rotatedMatrix.push(stageMatrix);
        console.log(' ^^^ stageMatrix ^^^');
        console.log(stageMatrix);
        stageMatrix = [];
        console.log('stageMatrix reset ---> ', stageMatrix);
      }
      this.matrix = rotatedMatrix;
      console.log('   $$$ this.matrix $$$');
      console.log(this.matrix);
      console.log('');
    }

    // must be a valid Direction, see Direction.js

  }
};
