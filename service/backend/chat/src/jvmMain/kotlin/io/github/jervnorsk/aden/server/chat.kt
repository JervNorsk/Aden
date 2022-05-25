package io.github.jervnorsk.aden.server

import io.ktor.server.application.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.defaultheaders.*
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import kotlinx.coroutines.channels.*
import java.time.*

class AdenChatModule : AdenServerModule {

    override fun Application.load() {
        log.info("AdenChatModule")

        install(DefaultHeaders)

        install(CallLogging)

        install(WebSockets) {
            pingPeriod = Duration.ofMinutes(1)
        }

        routing {
            webSocket("/chat") {
                // Join
                try {
                    incoming.consumeEach { frame ->
                        println(frame)
                    }
                } finally {
                    // Left
                }
            }
        }
    }
}
