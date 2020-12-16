FROM openjdk:13

RUN mkdir -p /app

WORKDIR /app

COPY backend/target/*.jar ./app.jar

EXPOSE $PORT

CMD [ "java", "-jar", "./app.jar" ]
