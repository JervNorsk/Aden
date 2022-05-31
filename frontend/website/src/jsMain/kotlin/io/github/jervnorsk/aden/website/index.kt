package io.github.jervnorsk.aden.website

import kotlinext.js.require

fun main() {
    require("expo").registerRootComponent {
        require("./io/github/jervnorsk/aden/website/App").default()
    };
}
