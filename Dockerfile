FROM  node:20-alpine
WORKDIR /yelpV2
COPY . . 
CMD ["npm" ,"run", "start"]