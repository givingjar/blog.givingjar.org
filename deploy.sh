#!/bin/bash

exit_usage()
{
  echo "usage: $0 [qa|prod] gruntfile_dir"
  exit 1
}

if [ "$#" -ne 2 ]; then
  exit_usage
fi

. ~/.bash_profile
cd $2
grunt $1
