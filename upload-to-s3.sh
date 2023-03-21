# Upload the contents of the `public` directory to the geodevlab.uk Amazon S3
# bucket.
aws s3 cp --recursive ./public s3://geodevlab.uk --acl public-read
