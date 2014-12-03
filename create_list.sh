#!/usr/bin/bash

tree -Q -d >> output.txt
grep -o '"[^"]\+"' output.txt >> Movies.txt
cat Movies.txt |  while read line; do echo -n "$line, "; done >> Final.txt
rm output.txt
rm Movies.txt
