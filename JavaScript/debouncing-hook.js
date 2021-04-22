import {useState, useEffect} from 'react';

function useDebouce(val, timeout = 500) {
  let [deboucedVal, setDevoucedVal] = useState(val);
  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setDevoucedVal(val)
    }, timeout)
    
    // clean up
    return () => {
      clearTimeout(timeoutID)
    }
  }, [value])
  return deboucedVal; 
}
