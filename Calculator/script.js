let string = "";
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".button");
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (evt) => {
      try 
      {
        if(evt.target.value === "=")
        {
            string = eval(string);
            result.value = string;
        }
        else if(evt.target.value === "AC")
        { 
            string = "";
            result.value = string;
        }
        else if(evt.target.value === "DE")
        { 
            string = string.substring(0, string.length-1);
            result.value = string;
        }
        else
        {
            console.log(evt.target.value);
            string += evt.target.value;
            result.value = string;
        }
      } 
      catch (error) 
      {
        console.log("error", error);
      }

    });
    
});
