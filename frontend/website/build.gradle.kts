import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsExec

plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        nodejs {
            binaries.executable()
        }
        compilations {
            getByName("main") {
                defaultSourceSet {
                    resources.srcDirs("src/jsMain/typescript")

                    dependencies {
                        // Extensions
                        implementation(devNpm("typescript", "latest"))

                        // Runtime Platform
                        implementation(npm("expo", "latest"))
                        implementation(npm("expo-cli", "latest"))
                        implementation(npm("expo-font", "latest"))
                        implementation(npm("expo-splash-screen", "latest"))

                        implementation(npm("@expo-google-fonts/outfit", "latest"))

                        implementation(devNpm("@expo/config-types", "latest"))

                        // React
                        implementation(kotlinw("react"))
                        implementation(kotlinw("react-dom"))

//                        implementation(devNpm("@types/react", "latest"))
                        implementation(devNpm("@types/react", "~17.0.21"))
                        implementation(devNpm("@types/react-dom", "latest"))

                        // React Native
                        implementation(npm("react-native", "latest"))
                        implementation(npm("react-native-web", "latest"))
                        implementation(npm("react-native-svg", "latest"))
//                        implementation(npm("react-native-reanimated", "latest"))
                        implementation(npm("react-native-screens", "latest"))
                        implementation(npm("react-native-gesture-handler", "latest"))
                        implementation(npm("react-native-safe-area-context", "latest"))

                        implementation(devNpm("@types/react-native", "latest"))

                        // React Navigation
                        implementation(npm("react-navigation", "latest"))
                        implementation(npm("react-navigation-stack", "latest"))

                        // React Navigation Native
                        implementation(npm("@react-navigation/native", "latest"))
                        implementation(npm("@react-navigation/native-stack", "latest"))

                        // UI Framework
                        implementation(npm("native-base", "latest"))
                    }
                }
            }
        }
        tasks {
            val build by getting {}

            NodeJsExec.create(compilations["main"], "jsExpoRun") {
                group = "Project Util"

                args(
                    nodeJs.rootPackageDir
                        .resolve("node_modules")
                        .resolve("expo-cli/bin/expo.js")
                        .path,
                    "start",
                    "--web"
                )
            }
            val jsExpoRun by getting {}

            val start by creating {
                group = "Project"

                dependsOn(build)
            }
        }
    }
}
