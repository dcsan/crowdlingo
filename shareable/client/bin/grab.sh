# webkit2png http://google.com/            # screengrab google
# webkit2png -W 1000 -H 1000 http://google.com/ # bigger screengrab of google
# webkit2png -T http://google.com/         # just the thumbnail screengrab
# webkit2png -TF http://google.com/        # just thumbnail and fullsize grab
# webkit2png -o foo http://google.com/     # save images as "foo-thumb.png" etc
# webkit2png -                             # screengrab urls from stdin
# webkit2png /path/to/file.html            # screengrab local html file
# webkit2png -h | less                     # full documentation

webkit2png \
  -W 640 -H 1000 \
  -o grabs/free-time.png \
  --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1" \
  -z 2 \
  file:///Users/dc/Google%20Drive/static-data/uploader/assets/topics/index.html

