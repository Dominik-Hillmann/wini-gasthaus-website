FROM betterweb/hugo:extended-0.115.4-18-1.21.5 as build

# VERSION is to be passed from outside during build so that it can be displayed in the footer.
ARG VERSION_OUTER
ENV VERSION=${VERSION_OUTER}

ARG SHORT_COMMIT_HASH
ENV SHORT_COMMIT_HASH=${SHORT_COMMIT_HASH}

WORKDIR /app
COPY . /app
RUN npm install
RUN hugo

FROM nginx:1.27.0-alpine
COPY --from=build /app/public /usr/share/nginx/html
# Put configuration files in the correct places
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
