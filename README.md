# Project: Learning Prisma

## Overview
This project focuses on learning Prisma, a modern database toolkit that simplifies database access for developers. The primary objectives include mastering CRUD (Create, Read, Update, Delete) operations and understanding database migrations using Prisma.

## Goals
1. **Understand Prisma Basics:**
   - Learn about Prisma's role in simplifying database interactions.
   - Explore the Prisma schema definition language.

2. **CRUD Operations:**
   - Implement Create, Read, Update, and Delete operations using Prisma.
   - Gain proficiency in querying and manipulating data.

3. **Prisma Migrations:**
   - Comprehend the concept of database migrations.
   - Practice creating and applying migrations with Prisma.

## Project Structure
```
learning-prisma/
│
├── src/
│   ├── index.js
│   ├── models/
│   │   ├── user.js
│   │   └── ...
│   └── migrations/
│       ├── 20240304120000_initial.js
│       └── ...
│
├── prisma/
│   ├── schema.prisma
│   └── ...
│
├── .gitignore
├── README.md
└── package.json
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd learning-prisma
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your database connection in `prisma/schema.prisma`.

4. Apply initial migration:
   ```bash
   npx prisma migrate dev --name initial
   ```

## Usage
- Update the Prisma schema in `prisma/schema.prisma` as you progress with your learning.
- Implement CRUD operations in the `src/models/` directory.
- Create and apply migrations as needed in the `prisma/migrations/` directory.

## Resources
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma GitHub Repository](https://github.com/prisma/prisma)

Feel free to modify this README as you make progress in your learning journey with Prisma. Happy coding!
