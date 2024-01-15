#!/usr/bin/env bash

git tag "v$(cat VERSION)" && git push --tags
