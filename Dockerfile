FROM betterweb/hugo:extended-0.115.4-18-1.20.6 as build

WORKDIR /app
COPY . /app
RUN npm install
RUN hugo

EXPOSE 80

FROM nginx:1.25.2-alpine

# Copy the built website over
COPY --from=build /app/public /usr/share/nginx/html
# Put configuration files in the correct places
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
