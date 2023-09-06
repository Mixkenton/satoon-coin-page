

const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}

const clearBtn = document.getElementById("clear-btn");

if(clearBtn){
  clearBtn.addEventListener("click", clearInput);
}


export {}