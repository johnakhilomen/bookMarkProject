export let generateForm = () => {
    return "generate form";
}

export let generateTextField = (label, id) => {
    let textField = `<input type="text" id="${id}" name="${id}">`;
   return `
   <div class = "fieldClass">
   <label for="${id}">${label} </label>
   ${textField}
   </div>
   `
}

export let generateButton = (text, id, uid) => {
   let button = `<center><button type="submit" id="${id}${uid}" name="${id}" data-id="${uid}"> ${text} </button></center>`;
   return button;
}

