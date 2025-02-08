# TypeScript Type Error: Adding Number and String

This example demonstrates a common type error in TypeScript that can occur when performing arithmetic operations with variables of different types.  The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call the function with a number and a string, resulting in a type error.

**Solution:** Ensure all arguments passed to the `add` function are of type number. Type checking can help to catch errors like this at compile time, before runtime errors occur.