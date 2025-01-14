```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: the function is defined within the useEffect dependency array,
    // leading to infinite re-renders.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setCount]); // Incorrect dependency array

  return <div>Count: {count}</div>;
}
```