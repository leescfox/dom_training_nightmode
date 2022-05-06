function buildPage() {
    night_off()
    createHeader()
    createMain()
    createFooter()
}

function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')
    header.textContent = 'Header'
    document.body.prepend(header)
}

function createMain() {
    const main = document.createElement('main')
    main.classList.add('main')

    const left_aside = document.createElement('aside')
    left_aside.classList.add('left_aside')
    left_aside.textContent = 'Aside'
    main.append(left_aside)

    const main_section = document.createElement('section')
    main_section.classList.add('main_section')
    main_section.textContent = 'Main'
    main.append(main_section)

    const theme_button = document.createElement('button')
    theme_button.classList.add('theme_button')
    theme_button.innerHTML = `Night mode<div class="on_off">OFF</div>`
    theme_button.addEventListener('click', changeTheme)
    main_section.append(theme_button)

    const right_aside = document.createElement('aside')
    right_aside.classList.add('right_aside')
    right_aside.textContent = 'Aside'
    main.append(right_aside)

    document.body.append(main)
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.classList.add('footer')
    footer.textContent = 'Footer'
    document.body.append(footer)
}

function night_off() {
    document.querySelector('.night_theme').setAttribute('href', ' ')
}

function night_on() {
    document.querySelector('.night_theme').setAttribute('href', 'css/night.css')
}

function changeTheme() {
    const state = document.querySelector('.on_off')
    if (state.textContent === 'OFF') {
        state.textContent = 'ON'
        night_on()
    } else {
        state.textContent = 'OFF'
        night_off()
    }
}

document.addEventListener('DOMContentLoaded', buildPage)