import React from "react";
import { useState,useEffect } from "react";

/**
 * 
 * @param {*} ref 
 */
export const useOutside = (ref)=> {

    const [resultVisible,setResultVisible] = useState(false);

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //console.log('sortie')
          setResultVisible(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return {resultVisible,setResultVisible};
  }