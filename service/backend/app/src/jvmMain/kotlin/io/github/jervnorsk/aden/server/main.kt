@file:JvmName("Application")

package io.github.jervnorsk.aden.server

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.reflections.Reflections

fun main(args: Array<String>) {
    Reflections("io.github.jervnorsk.aden.server")
        .getSubTypesOf(AdenServerModule::class.java)
        .forEach {
            println(it)
            AdenServerApplication.module(it.getConstructor().newInstance())
        }

    embeddedServer(Netty, port = 8080) {
        AdenServerApplication.apply { main() }
    }.start(wait = true)
}

object AdenServerApplication {

    private val modules = mutableListOf<AdenServerModule>()

    fun module(module: AdenServerModule) {
        modules.add(module)
    }

    internal fun Application.main() {
        log.info("AdenServerApplication")

        for (module in modules) {
            module.apply { load() }
        }
    }
}
