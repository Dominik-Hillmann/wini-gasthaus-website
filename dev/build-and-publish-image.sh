#! /bin/bash

image_name="dominikhillmann/wini-gasthaus-website:$(cat VERSION)"

docker login \
  && docker build -t "${image_name}" . \
  && docker push "${image_name}"
