package io.github.jervnorsk.aden.server

import io.ktor.server.application.*

interface AdenServerModule {

    fun Application.load()
}

val modules = mutableListOf<AdenServerModule>()

fun module(block: Application.() -> Unit) {
//    modules.add(block)
}
