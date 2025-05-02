class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header>
            <h1 id="nav-title">Learning GSAP Site</h1>
             <nav id="main-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
                </nav>
            </header>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header style="background: #222; color:white; padding: 1rem;">
            <h1>Learning GSAP Site</h1>
             <nav id="main-nav">
            <a href="/">Home</a>
                </nav>
            </header>`
    }
}

customElements.define('special-header', SpecialHeader)