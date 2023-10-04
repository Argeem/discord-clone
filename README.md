# Discord Clone
[Video](https://youtu.be/ZbX4Ok9YX94?si=sNoGdJXfb-vtpKex)
## Tech Stack
- Next.js
- React
- Shadcn-UI
- Socket.io
- Prisma
- Tailwind
- MySQL
- Clerk.com (authentication)

## Install tool ofr develop
1. Create **Next.Js** project with **tailwind** and **eslint**
```text
npx create-next-app@latest discord-clone --typescript --tailwind --eslint
```
2. Install ui package **Shadcn-ui**
```
npx shadcn-ui@latest init
```
> This package can import components for use on project for more detail [Link](https://ui.shadcn.com/docs)
3. Install Clerk authentication
```
npm install @clerk/nextjs
```
> [Link](http://clerk.com/) for detail

## Run project server on localhost
```
npm run dev
```

## Run PostgreSQL database
```
version: '3'

services:
  postgres:
    image: postgres:latest
    container_name: postgres-container
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: discord-clone
    volumes:
      - D:\learn\database:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - pgadmin-network

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin-container
    environment:
      PGADMIN_DEFAULT_EMAIL: sitthisakbannob@gmail.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "8080:80"
    networks:
      - pgadmin-network

networks:
  pgadmin-network:
    driver: bridge

```

## Prisma
Migrate database with prisma file by using
```
npx prisma db push
```
and can monitor data base with
```
npx prisma studio
```


1.26.07
