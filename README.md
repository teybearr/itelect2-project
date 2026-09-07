# itelect2-project

My IT Elective 2 backend web development project

## API Testing (for GT6)

### GET /api/tasks
![GET Endpoint Screenshot](./public/gt6/GET.png)

### POST /api/tasks
![POST Endpoint Screenshot](./public/gt6/POST.png)

### PUT /api/tasks/:id
![PUT Endpoint Screenshot](./public/gt6/PUT.png)

### DELETE /api/tasks/:id
![DELETE Endpoint Screenshot](./public/gt6/DELETE.png)

---

## API Testing (for GT8)

### GET /api/users
![GET Users Screenshot](./public/gt8/GET_users.png)

### GET /api/tasks
![GET Tasks Screenshot](./public/gt8/GET_tasks.png)

### GET /api/tasks/:id
![GET Task By ID Screenshot](./public/gt8/GET_tasks_id.png)

### POST /api/tasks
![POST Task Screenshot](./public/gt8/POST_task.png)

### GET /api/tasks (After POST)
![GET Tasks After POST Screenshot](./public/gt8/GET_after_post.png)

### PUT /api/tasks/:id
![PUT Task Screenshot](./public/gt8/PUT_task.png)

### GET /api/tasks (After PUT)
![GET Tasks After PUT Screenshot](./public/gt8/GET_after_put.png)

### DELETE /api/tasks/:id
![DELETE Task Screenshot](./public/gt8/DELETE_task.png)

### GET /api/tasks (After DELETE)
![GET Tasks After DELETE Screenshot](./public/gt8/GET_after_delete.png)

### Error Handling Sample
![Error Sample Screenshot](./public/gt8/Error_Sample.png)

---

## API Testing (for GT9)

### POST /api/auth/register
![Register New User Screenshot](./public/gt9/regNewUser.png)

### POST /api/auth/register (duplicate email → 409)
![Register Duplicate Email Screenshot](./public/gt9/regSameEmail.png)

### POST /api/auth/register (password under 8 chars → 400)
![Register Short Password Screenshot](./public/gt9/regXpw.png)

### POST /api/auth/login
![Login Screenshot](./public/gt9/loginUser.png)

### POST /api/auth/login (wrong password → 401)
![Login Wrong Password Screenshot](./public/gt9/loginXpw.png)

### Users table in pgAdmin (hashed passwords)
![Users Table Screenshot](./public/gt9/database.png)

### Decoded token on jwt.io
![JWT Payload Screenshot](./public/gt9/jwtio.png)