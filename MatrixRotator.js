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
    console.log('this.matrix ---> ')
    console.log(this.matrix);
    // console.log('matrixRotator ---> ' + matrixRotator);
    console.log('direction ---> ', direction);
    let myMatrix = this.matrix;
    let matrixArr = [];
    let newMatrix = [];

    // console.log('this.matrix[4][0] ---> ', this.matrix[4][0]);
    // console.log('this.matrix[3][0] ---> ', this.matrix[3][0]);
    // console.log('this.matrix[2][0] ---> ', this.matrix[2][0]);
    // console.log('this.matrix[1][0] ---> ', this.matrix[1][0]);
    // console.log('this.matrix[0][0] ---> ', this.matrix[0][0]);
    // console.log('');

    if (direction === 'ClockWise') {
      while (myMatrix[0].length > 0) {
        console.log('myMatrix[0].length ---> ', myMatrix[0].length);
        for (let i = myMatrix.length-1; i >= 0; i--) {
          matrixArr.push(myMatrix[i][0]);
          myMatrix[i].shift();
        }
        newMatrix.push(matrixArr);
        matrixArr = [];
      }
      // console.log('myMatrix.length ---> ', myMatrix.length);
      // console.log('myMatrix ---> ', myMatrix);
      // console.log('matrixArr ---> ', matrixArr);
      console.log('newMatrix ---> ')
      console.log(newMatrix);
      this.matrix = newMatrix;
      console.log('this.matrix ---> ')
      console.log(this.matrix);
    }

    else if (direction === 'CounterClockWise') {
      while (myMatrix[0].length > 0) {
        console.log('myMatrix[0].length ---> ', myMatrix[0].length);
        for (let i = 0; i < myMatrix.length; i++) {
          // console.log('myMatrix[i] ---> ', myMatrix[i]);
          matrixArr.push(myMatrix[i][myMatrix[i].length-1]);
          myMatrix[i].pop();
        }
        newMatrix.push(matrixArr);
        matrixArr = [];
      }
      // console.log('myMatrix.length ---> ', myMatrix.length);
      // console.log('myMatrix ---> ', myMatrix);
      // console.log('matixArr ---> ', matrixArr);
      console.log('newMatrix ---> ', newMatrix);
      this.matrix = newMatrix;
      console.log('this.matrix ---> ', this.matrix);
    }
    
    
    // this.matrix = rotatedMatrix;

    // must be a valid Direction, see Direction.js
  }
};
