import org.gradle.api.Project
import org.gradle.kotlin.dsl.extra
import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

fun Project.ktor(module: String): String =
    "io.ktor:ktor-$module:${extra["ktor.version"]}"
