#!/bin/bash

#TODO Download package in a local cache
mvn clean package

mv target/benchmark-1.0-jar-with-dependencies.jar ./benchmark.jar

echo "ok"
