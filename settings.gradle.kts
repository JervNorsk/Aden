pluginManagement {
   resolutionStrategy {
      plugins {
         kotlin("multiplatform") version(extra["kotlin.version"] as String)
      }
   }
}

dependencyResolutionManagement {
   repositories {
      mavenCentral()
   }
}

include(":backend")
project(":backend").apply {
    projectDir = file("service/backend")
}.let { project ->
    project.projectDir.listFiles()
        ?.filter { it.isDirectory }
        ?.forEach {
            val path = "${project.path}:${it.name}"

            include(path)
            project(path).apply {
                projectDir = it
            }
        }
}


//include(":frontend")
//project(":frontend").apply {
//    projectDir = file("service/frontend")
//}.let { project ->
//    project.projectDir.listFiles()
//        ?.filter { it.isDirectory }
//        ?.forEach {
//            val path = "${project.path}:${it.name}"
//
//            include(path)
//            project(path).apply {
//                projectDir = it
//            }
//        }
//}
