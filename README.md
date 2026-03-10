# 🐳 Docker Compose Guide

Docker Compose is like a **"recipe book" 📖 for running multiple Docker containers together as one application**.

Imagine you're building a **web application**. You might need:

* 🌐 **Web Server** – Nginx
* 🗄️ **Database** – MySQL
* ⚙️ **Backend Application** – Node.js / Flask / Django

Instead of starting each container separately using long `docker run` commands, **Docker Compose** allows you to define everything inside a single file called:

```
docker-compose.yml
```

With **one command**, Docker Compose sets up the entire application environment for you — just like preparing a full **kitchen 🍳 from a recipe**.

---

# 🚀 Why Use Docker Compose?

### 1️⃣ Simplicity

📄 One configuration file controls your entire application.

No need to remember long `docker run` commands.

---

### 2️⃣ Reproducibility

👥 Share the same `docker-compose.yml` with your team.

Everyone gets **the exact same environment setup**.

---

### 3️⃣ Easy Management

⚡ Manage your application using simple commands:

```bash
docker compose up
docker compose down
docker compose restart
docker compose ps
```

---

# 🖥️ Where Docker Compose Runs

Docker Compose can run on:

* 💻 Local Development Machines
* ☁️ Cloud Servers
* 🧪 Testing Environments
* 🚀 Production Servers

⚠️ **Requirement:**
Docker must be installed first.

👉 Download Docker: https://www.docker.com/

---

# 📄 Basic Structure of `docker-compose.yml`

Docker Compose files use **YAML format**, which is easy to read and based on indentation.

Example:

```yaml
version: "3.8"

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
```

---

# 🔑 Important Sections in Docker Compose

### 📌 `version`

Defines the Compose file format.

```yaml
version: "3.8"
```

---

### 📌 `services`

Defines the containers in your application.

Each service represents **one container**.

```yaml
services:
  web:
  db:
```

---

### 📌 `image`

Pulls an image from **Docker Hub**.

```yaml
image: nginx:latest
```

---

### 📌 `build`

Builds a container image using a **local Dockerfile**.

```yaml
build: .
```

---

### 📌 `ports`

Maps container ports to host ports.

```yaml
ports:
  - "80:80"
```

Meaning:

```
Host Port 80 → Container Port 80
```

---

### 📌 `environment`

Sets environment variables inside the container.

```yaml
environment:
  MYSQL_ROOT_PASSWORD: example
```

---

### 📌 `depends_on`

Controls startup order between services.

Example: Web starts **after database**.

```yaml
depends_on:
  - db
```

---

### 📌 `volumes`

Used to store persistent data.

```yaml
volumes:
  - db_data:/var/lib/mysql
```

This ensures data **remains even if the container stops**.

---

### 📌 `networks`

Creates a **custom network** so containers can communicate.

```yaml
networks:
  app-network
```

Think of it as a **private chat room 💬 for containers**.

---

# 📦 Example Docker Compose Setup

Example: **Web + Database application**

```yaml
version: "3.8"

services:

  web:
    image: nginx
    ports:
      - "80:80"
    depends_on:
      - db

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: password

volumes:
  db_data:
```

---

# ▶️ Running Docker Compose

Start containers:

```bash
docker compose up
```

Run in background:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

View running services:

```bash
docker compose ps
```

---

# 🎯 Key Benefits

✅ Easy multi-container setup
✅ Simple configuration file
✅ Perfect for development environments
✅ Reproducible infrastructure
✅ Easy container orchestration

---

# 📚 Learn More

* Docker Documentation: https://docs.docker.com/compose/
* Docker Hub: https://hub.docker.com/

---

# 👨‍💻 Author

**Sumeru Chougule**
DevOps | Cloud | Docker | Kubernetes
