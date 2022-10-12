function telephoneCheck() {
    let str = document.querySelector("#input")
    let resultDOM = document.querySelector("#result")
    let pattern1 = /^1?\s?[0-9]{3}-?\s?[0-9]{3}-?\s?[0-9]{4}$/
    let pattern2 = /^1?\s?\s?\([0-9]{3}\)-?\s?[0-9]{3}-?\s?[0-9]{4}$/
    let pattern3 = /^[0-9]{10}$/
  
    if (pattern1.test(str.value)){
        resultDOM.innerHTML = `${str.value} is a valid number ! ` 
    }else if (pattern2.test(str.value)){
        resultDOM.innerHTML = `${str.value} is a valid number ! ` 
    }else if (pattern3.test(str.value)){
        resultDOM.innerHTML = `${str.value} is a valid number ! ` 
    }else {
        resultDOM.innerHTML = `${str.value} is not a valid number ` 
    }
  
  }