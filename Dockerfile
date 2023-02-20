FROM registry.redhat.io/ubi8/nodejs-14 as build
USER root

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

FROM registry.redhat.io/ubi8/nginx-120

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/test-routing-domain /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]