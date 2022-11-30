const shareButtons = document.querySelectorAll("title-share-button")
const description = document.getElementById("description")
const nameId = document.getElementById("name")
const name_descriptionID = document.getElementById("name_description")

initName = () => {
    transition_ = 25

    name_ = `@diegoCoianiz`
    nameToDOM = "<h1>"
    
    for (let i = 0; i < name_.length; i++) {
        setTimeout(() => {
            nameToDOM += name_[i] 
            nameId.innerHTML = nameToDOM
        }, transition_*3*i);
    }

    description_ = `Backend Dev. Rosario, Argentina<`
    descriptionToDOM = "<h6>"
    
    for (let i = 0; i < description_.length; i++) {
        setTimeout(() => {
            if(description_[i] == "<"){
                descriptionToDOM += `<h1 class="name-icon">🌎`
                name_descriptionID.innerHTML = descriptionToDOM
            }else {
                descriptionToDOM += description_[i] 
                name_descriptionID.innerHTML = descriptionToDOM
            }
        }, transition_*i);    
    }
}

initName()

copyText = (e) => {
    e.preventDefault()
}

shareButtons.forEach(shareButton => 
    shareButton.addEventListener("click", copyText))

englishDescription = true

const translator = () => {
    englishDescription = !englishDescription
    if (englishDescription) {
        description.innerHTML = `
            <div id="translator" onclick="translator()"><h1 class="expand">T</h1></div>
            <h3>Hola, soy Juan Diego Coianiz 👋</h4>
            <h3>Programador full-Stack. Actualmente cursando las tecnicaturas
            de desarrollo de aplicaciones digitales, ciencia de datos e inteligencia
            artificial en el <a href="https://www.ispc.edu.ar/institucional/" target="_blank" 
            style="color: rgb(211, 43, 43);">Institutlo Superior Politécnico 
            de Cordoba</a>. Al mismo tiempo, y como apasionado autodidacta que soy, siempre
            estoy aprendiendo por mi cuenta nuevas tecnologías.
            </h3>
            <h3>Me interesa el desarrollo Backend y me especializo en Python3,
            Node.Js y C#. Hechá un vistazo a mis links acontinuación y estemos
            en contacto!
            </h4>
        `
    } else {
        description.innerHTML = `
            <div id="translator" onclick="translator()"><h1 class="expand">T</h1></div>
            <h3>Hello there, I'm Juan Diego Coianiz 👋</h4>
            <h3>I'm a full-Stack progammer currently learning app developing, 
            data science & artifical intelligence at the 
            <a href="https://www.ispc.edu.ar/institucional/" target="_blank" 
            style="color: rgb(211, 43, 43);">Institutlo Superior Politécnico 
            de Cordoba</a>. At the same time, and as the self-educated enthusiast 
            student that I am, I'm always learning something new by my own.
            </h3>
            <h3>I'm interested in backend programming and I specialize in Python3,
            Node.Js and C#. Take a look at my links and lets keep in contact! 
            </h4>
        `
    }

}