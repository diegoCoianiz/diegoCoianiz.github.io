let shareButtons = document.querySelectorAll(".title-share-button")
const section = document.getElementById("section")

preventAndCopy = (e) => {
    e.preventDefault()
}

const display = (sect) => {
    section.innerHTML = sect
    shareButtons = document.querySelectorAll(".title-share-button")
    copyText()
}

const copyText = () => {
    shareButtons.forEach(shareButton =>
        shareButton.addEventListener("click", preventAndCopy))
}

copyText()

const link_bot = `
    <a href="https://github.com/diegoCoianiz" target="_blank" class="title">
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
            viewBox="0 0 16 16">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
    </div>
    <h3 class="expand">GitHub</h3>
    <div class="title-share-button"></div>
    </a>
    <a href="https://www.linkedin.com/in/juan-diego-coianiz-2b4561165/" target="_blank" class="title">
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book"
            viewBox="0 0 16 16">
            <path
                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
        </svg>
    </div>
    <h3 class="expand">Linkedin</h3>
    <div class="title-share-button"></div>
    </a>
    <a href="https://www.facebook.com/juandiego.coianiz" target="_blank" class="title">
    <div class="icon">
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                fill="white"></path>
        </svg>
    </div>
    <h3 class="expand">Facebook</h3>
    <div class="title-share-button"></div>
    </a>
`

const cont_bot = `
    <div class="title">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"> 
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/> 
            </svg>
        </div>
        <h3 class="mail-title expand">diego.c.coianiz @ gmail.com</h3>
        <div class="title-share-button"></div>
    </div>
    <div class="title">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                class="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/> 
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> 
            </svg>
        </div>
        <h3 class="expand">Arg (+54) 341 3 751398</h3>
        <div class="title-share-button"></div>
</div>
`