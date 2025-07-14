ARG NODE_VERSION=23.11.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

FROM base as deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM base as final
ENV NODE_ENV production

RUN apk add --no-cache tzdata
RUN cp /usr/share/zoneinfo/America/Chicago /etc/localtime \
    && echo "America/Chicago" > /etc/timezone \
    && apk del tzdata

USER node

COPY package.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules

# 👇 Copy your raw JS files (no dist)
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
