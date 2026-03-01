# Krammer Hidraulika — SPECIFICATION

## Projekt leírás

A Krammer Hidraulika egy hidraulikai rendszerekkel foglalkozó vállalkozás modern webes felülete. Az alkalmazás célja, hogy a látogatók megismerjék a cég szolgáltatásait, munkatársait, kapcsolatba léphessenek velük, valamint bejelentkezés után saját profiladatokat kezelhessenek. Az adminisztrátorok számára külön felület biztosítja a termékek kezelését (CRUD).

A célközönség:

- érdeklődők és ügyfelek (public)
- regisztrált felhasználók (user)
- adminisztrátorok (admin)

---

## Funkcionális követelmények

### Public funkciók

- Kezdőlap megtekintése
- Rólunk oldal megtekintése
- Szolgáltatások listázása
- Kapcsolat oldal megtekintése
- Termékek megtekintése
- Munkatársak megtekintése
- Bejelentkezés/Regisztrációs oldal

### User funkciók

- Saját profil megtekintése
- Profiladatok módosítása
- Kijelentkezés

### Admin funkciók

- Admin dashboard
- Terméklista megtekintése
- Új termék hozzáadása
- Termék szerkesztése
- Termék törlése

---

## Nem‑funkcionális követelmények

### Technológiai követelmények

- **Frontend:** React + Vite
- **Stílus:** Tailwind/CSS + SCSS design token rendszer
- **Állapotkezelés:** React Context (AuthContext)
- **Backend:** Firebase Authentication + Firestore
- **Routing:** React Router

### Teljesítmény

- Gyors betöltés Vite segítségével
- Optimalizált képek és assetek
- Minimális újratöltés (SPA)

### UX követelmények

- Mobile‑first reszponzív design
- Egységes vizuális arculat (design token rendszer)
- Letisztult, könnyen navigálható felület
- Touch‑barát interakciók mobilon

### Akadálymentesség

- Szemantikus HTML elemek használata
- ARIA címkék a navigációban
- Látható fókuszállapot
- Megfelelő színkontraszt

---

## Felhasználói szerepkörök

### Guest (nem bejelentkezett felhasználó)

A guest felhasználó az oldal alapvető, mindenki számára elérhető tartalmait látja.  
Jogosultságok:

- Public oldalak megtekintése (Kezdőlap, Rólunk, Szolgáltatások, Kapcsolat, Munkatársaink)
- Bejelentkezés oldal elérése

Korlátozások:

- Nem fér hozzá a profil oldalhoz
- Nem fér hozzá admin funkciókhoz
- Nem végezhet módosításokat

### User (bejelentkezett felhasználó)

A user a public tartalmak mellett saját fiókjához kapcsolódó funkciókat is elér.  
Jogosultságok:

- Public oldalak megtekintése
- Saját profil megtekintése
- Profiladatok módosítása
- Kijelentkezés

Korlátozások:

- Nem fér hozzá admin funkciókhoz
- Nem kezelhet termékeket

### Admin (rendszergazda)

Az admin a teljes alkalmazást felügyeli, beleértve a termékek kezelését is.  
Jogosultságok:

- Public oldalak megtekintése
- Saját profil megtekintése
- Admin dashboard elérése
- Termékek teljes körű kezelése (CRUD)
- ADMIN menüpont megjelenítése

Korlátozások:

- Nincs korlátozás a felhasználói és admin funkciók között

---

## Képernyőlista / Sitemap

### Public oldalak

- `/` — Kezdőlap
- `/rolunk` — Rólunk
- `/szolgaltatasok` — Szolgáltatások
- `/kapcsolat` — Kapcsolat
- `/munkatarsaink` — Munkatársaink
- `/login` — Bejelentkezés

### User oldalak

- `/profil` — Profil
- `/profil/beallitasok` — Profil beállítások

### Admin oldalak

- `/admin` — Admin dashboard
- `/admin/termekek` — Terméklista
- `/admin/termekek/uj` — Új termék
- `/admin/termekek/:id` — Termék szerkesztése
