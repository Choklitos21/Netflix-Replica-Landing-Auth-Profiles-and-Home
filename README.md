# Netflix-Replica-Landing-Auth-Profiles-and-Home

## Project Description
Build a simplified Netflix-style web application focused on logic and data handling, not design.
The goal is to practice JavaScript fundamentals using:

+ Variables
+ Functions
+ Control flow
+ Arrays
+ Objects
+ localStorage
+ Minimal DOM manipulation

## Functional Flow
The application follows a linear progression for new users, transitioning into a dashboard experience for returning users:

1.  **Landing Page:** The entry point introducing the platform's value proposition.
2.  **Register:** User creates an account (stored in `localStorage`).
3.  **Login:** Authentication against stored user data.
4.  **Profiles:** An intermediary step where users can select or create specific sub-profiles.
5.  **Home:** The main dashboard where the catalog and primary features are accessible.



---

## Data Models
The application structures data using the following schemas:

### Users
| Field | Type | Description |
| :--- | :--- | :--- |
| `email` | String | User login credential |
| `password` | String | Hashed/Encrypted password |

### Catalog
| Field         | Type | Description            |
|:--------------| :--- |:-----------------------|
| `id`          | UUID | Unique item identifier |
| `title`       | String | Name of the item       |
| `src`         | String | path for the img file  |

---

## localStorage Keys Used
To maintain state without a backend, the following keys are utilized:

* `users`: An array containing all registered user objects.
* `loggedUser`: A Object that controls when an user had logged in or not.


---

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Choklitos21/Netflix-Replica-Landing-Auth-Profiles-and-Home](https://github.com/Choklitos21/Netflix-Replica-Landing-Auth-Profiles-and-Home)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd Netflix-Replica-Landing-Auth-Profiles-and-Home
    ```
3.  **Run the project:**

    Open the index.html file on your browser

---

## Branching and Commit Strategy

### Branching
We follow a simplified **Git Flow** model:
* `main`: Production-ready code.
* `develop`: The integration branch for features.
* `feature/feature-name`: Specific tasks or components.

### Commit Strategy
We use the **Conventional Commits** specification:
* `feat:` A new feature.
* `fix:` A bug fix.
* `docs:` Documentation changes only.
* `refactor:` A code change that neither fixes a bug nor adds a feature.

### Coder

Diego Alejandro Morales Montoya - Turing
