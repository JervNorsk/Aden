plugins {
    kotlin("multiplatform")
}

kotlin {
    jvm()
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(ktor("server-core"))
                implementation("ch.qos.logback:logback-classic:latest.release")
            }
        }
        val commonTest by getting {
            dependencies {}
        }
    }
}
