# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build product-manager`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t product-manager`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system product-manager && \
          adduser --system -G product-manager product-manager

COPY dist/apps/product-manager product-manager/
RUN chown -R product-manager:product-manager .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix product-manager --omit=dev -f install

CMD [ "node", "product-manager" ]
