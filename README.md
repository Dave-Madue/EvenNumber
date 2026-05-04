# Conditional Array Mapper
A concise JavaScript snippet demonstrating how to use the .map() method to conditionally transform elements within an array based on their value.

## Logic Overview
The script iterates through a collection of integers and applies a transformation only to even numbers, while leaving odd numbers untouched.
- Condition: If the number is even ($num \pmod 2 = 0$). 
- Action: Multiply the value by 2. 
- Fallback: Return the original value if the condition is not met.

## Key Concepts
- Immutability: The original numbers array remains unchanged; .map() creates a new array (result).
- Transformation: This is a standard pattern for updating specific items in a list (like toggling a status or updating a price) while maintaining the order of the remaining items.
