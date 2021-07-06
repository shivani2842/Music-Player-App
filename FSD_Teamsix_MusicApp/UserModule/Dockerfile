FROM openjdk
WORKDIR /usr/src
ENV MYSQL_HOST=localhost
ENV MYSQL_DATABASE=testdb
ENV MYSQL_USER=dbuser1
ENV MYSQL_PASSWORD=pass
COPY ./target/UserModule-0.0.1-SNAPSHOT.jar UserModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8082
ENTRYPOINT ["java","-jar","/usr/src/UserModule-0.0.1-SNAPSHOT.jar"]