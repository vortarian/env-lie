#!/bin/bash

ENVIRONMENTS='acc acceptance dev development stage staging prod production local'

for i in $ENVIRONMENTS; do echo Running with env $i; NODE_ENV=$i node ./server.js; echo ; done;
