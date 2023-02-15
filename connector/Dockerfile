FROM openjdk:11-jdk as deps

ARG OPENHOSPITAL_CORE_VERSION=1.12.0

WORKDIR /deps

COPY mvnw .
COPY .mvn .mvn

RUN sed -i 's/\r$//' mvnw

RUN --mount=type=cache,target=/root/.m2 git clone https://github.com/informatici/openhospital-core.git \
    && cd openhospital-core \
    && git checkout v${OPENHOSPITAL_CORE_VERSION} \
    && ./mvnw -B clean install -DskipTests 

FROM openjdk:11-jdk as build

ARG OPENHOSPITAL_CORE_VERSION=1.12.0

WORKDIR /app

COPY --from=deps /deps/mvnw .
COPY --from=deps /deps/.mvn .mvn
COPY pom.xml .
COPY src src

RUN sed -i 's/\r$//' mvnw

RUN --mount=type=cache,target=/root/.m2 ./mvnw -Doh.version=${OPENHOSPITAL_CORE_VERSION} clean package -B spring-boot:repackage -DskipTests \
    && mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:11-jre-slim

WORKDIR /app

ARG DEPENDENCY=/app/target/dependency
COPY --from=build /app/target/*.jar /app/
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF

COPY mvnw .

CMD ["java", "-jar", "connector-0.0.1-SNAPSHOT.jar"]