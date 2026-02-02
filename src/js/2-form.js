let formData = {
    email: "",
    message: ""
}

const keyValues = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const data = JSON.parse(localStorage.getItem(keyValues));
if (data) {
    formData = data;

    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
}


form.addEventListener("input", event => {
    formData.email = event.currentTarget.email.value;
    formData.message = event.currentTarget.message.value;
    
    localStorage.setItem(keyValues, JSON.stringify(formData))
})

form.addEventListener("submit", event => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields")
    }

    console.log(formData);
    localStorage.removeItem(keyValues)
    formData = { email: "", message: "" };
    form.reset();
})