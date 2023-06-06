FROM openjdk:17-alpine as build

ARG ENVIRONMENT_NAME
ARG BASE_DOMAIN

WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN sed -i 's/\r$//' mvnw
RUN sed -i "s/ENVIRONMENT_NAME/${ENVIRONMENT_NAME}/g" src/main/resources/application.properties
RUN sed -i "s/BASE_DOMAIN/${BASE_DOMAIN}/g" src/main/resources/application.properties
RUN --mount=type=cache,target=/root/.m2 ./mvnw install -DskipTests
RUN --mount=type=cache,target=/root/.m2 ./mvnw -B clean package spring-boot:repackage -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:17-jdk-alpine
VOLUME /tmp

WORKDIR /app

ARG DEPENDENCY=/app/target/dependency
COPY --from=build /app/target/*.jar /app/
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
# COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app/classes


COPY mvnw .

CMD ["java", "-jar", "patientportal-0.0.1-SNAPSHOT.jar"]