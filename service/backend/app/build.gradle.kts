plugins {
    kotlin("multiplatform")
    application
}

application {
    mainClass.set("io.github.jervnorsk.aden.server.Application")
}

kotlin {
    jvm {
        withJava()
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":backend:core"))
                implementation(project(":backend:chat"))

                implementation(ktor("server-netty"))
            }
        }
        val commonTest by getting {
            dependencies {}
        }
        val jvmMain by getting {
            dependencies {
                implementation("org.reflections:reflections:latest.release")
            }
        }
    }
}
