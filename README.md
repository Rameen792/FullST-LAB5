# Project 0 — The Queue

## Overview

The Queue is a simple web-based queue management system developed using HTML, CSS, and JavaScript. It allows users to add people to a waiting board, assign them to different bays, and call the person with the longest waiting time.

## Features

* **Waiting Board:** Displays each person's name, waiting time, and assigned bay.
* **Join Queue:** Adds a person to the waiting list.
* **Same Bay Handling:** Adds the new minutes to an existing entry when the same person joins the same bay again.
* **Different Bay Handling:** Creates a separate entry when the same person joins another bay.
* **Input Validation:** Checks the name and waiting time before adding an entry.
* **Call Next:** Removes the person with the longest numeric waiting time. If multiple entries have the same time, the later entry is removed.
* **Queue Statistics:** Displays the total number of waiting entries and the longest waiting time.

## Technologies Used

* HTML5 — Page structure
* CSS3 — Styling and layout
* JavaScript — Queue logic and user interactions
* Git and GitHub — Version control and project hosting

## Project Files

| File         | Purpose                |
| ------------ | ---------------------- |
| `queue.html` | Main webpage structure |
| `style.css`  | Page styling           |
| `script.js`  | Queue functionality    |
| `README.md`  | Project documentation  |

## How to Run

1. Download or clone the project repository.
2. Open the project folder.
3. Open `queue.html` in a web browser.
4. Enter a name, waiting time, and bay, then click **Join**.
5. Use **Call Next** to remove the entry with the longest numeric waiting time.

## Student Information

* **Roll Number:** 247249
* **Project:** Project 0 — The Queue
* **Course:** Full Stack Development

## Conclusion

This project demonstrates the practical use of HTML, CSS, and JavaScript to build an interactive queue management system. It also provides experience with form handling, input validation, DOM manipulation, and Git-based version control.
