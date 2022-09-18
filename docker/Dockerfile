FROM openjdk:17-alpine as build

WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

#RUN --mount=type=cache,target=/root/.m2 ./mvnw install -DskipTests
RUN --mount=type=cache,target=/root/.m2 ./mvnw clean package spring-boot:repackage -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:17-jdk-alpine
VOLUME /tmp

WORKDIR /app

ARG DEPENDENCY=/app/target/dependency
COPY --from=build /app/target/*.jar /app/
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app


COPY mvnw .

CMD ["java", "-jar", "patientportal-0.0.1-SNAPSHOT.jar"]