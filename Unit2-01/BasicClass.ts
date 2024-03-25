/*
 * This class creates a list of strings
 * @author Kaitlyn Ip
 * @version 1.0
 * @since 2024-03-07
 */

export class BasicClass {
    // Array that contains all of the string
    private array: string[]

    // Creates the array
    public constructor() {
      this.array = []
    }

    // Pushes the strings to the arary
    public push(string: string) {
      this.array.push(string)
    }

    // Prints the array to the console
    public showStack() {
      let stackValues = this.array[0]

      for (let counter = 1; counter < this.array.length; counter++) {
        stackValues = stackValues + ", " + this.array[counter]
      }

      return stackValues
  }
}
