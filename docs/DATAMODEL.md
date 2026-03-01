# Krammer Hidraulika – DATAMODEL

## Entitások

### 1. User

- `id: string`
- `email: string`
- `password: string` (Firebase kezeli)
- `name: string`
- `role: "user" | "admin"`
- `createdAt: timestamp`

### 2. Product (Termék)

- `id: string`
- `name: string`
- `description: string`
- `price: number`
- `imageUrl: string`
- `createdAt: timestamp`

### 3. Service (Szolgáltatás)

- `id: string`
- `title: string`
- `description: string`
- `icon: string`
- `order: number`

### 4. Employee (Munkatárs)

- `id: string`
- `name: string`
- `position: string`
- `imageUrl: string`

---

## Kapcsolatok

### User – Product

- Nincs közvetlen kapcsolat (admin kezeli a termékeket)
- Admin CRUD műveleteket végezhet

### User – Service

- Nincs közvetlen kapcsolat (public információ)

### Product – Admin

- 1 admin több terméket kezelhet → **1:N kapcsolat**

### Employee – Service

- Nincs közvetlen kapcsolat, de megjelenhetnek együtt a public oldalon

### ContactMessage – User

- Üzenet küldése nem igényel bejelentkezést → **Nincs kapcsolat**

---

## Kapcsolati diagram (szöveges)

- **User (admin)** → kezeli → **Product (1:N)**
- **User** → megtekinti → **Service (N:N, de csak olvasás)**
- **User** → megtekinti → **Employee (N:N, csak olvasás)**
- **ContactMessage** → független entitás
