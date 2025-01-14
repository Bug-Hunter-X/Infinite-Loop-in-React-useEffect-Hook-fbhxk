# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by including the state update function in the dependency array.  The incorrect `useEffect` creates a continuous loop because every change in the count triggers another render and execution of the `useEffect` again.

## How to Reproduce

Clone this repository and run `npm start`.

## Solution

The solution involves removing the `setCount` function from the dependency array, allowing the effect to only run once after mounting.