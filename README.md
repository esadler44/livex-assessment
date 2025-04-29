# Frontend Development Challenge: Chatbot Website

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn or bun

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

## Design Decisions

- **Framework:** **Next.js** with **React**
- **Styling:** **Tailwind CSS**
- **State Management:** **React Context**
- **Chatbot:** **Custom Implementation**

I used **Next.js** with **React** because it is a production-ready framework for building server-side rendered and statically generated web applications.

I used **Tailwind CSS** for styling because it is a utility-first CSS framework that provides a set of pre-built classes for common UI components.

I used **React Context** for state management because it is a built-in state management library that provides a way to share values between components.

I used **Custom Implementation** for chatbot because it is a custom implementation of a chatbot that provides a way to handle user input and display responses.

To highlight the matching text within the paragraphs in the view, I used **react-highlight-words**.

P.S. This was kind of a lot for a take home assessment, especially with the search functionality, and I don't think there was much value in including that.

## Initially Provided Document as Follows

**Objective:**  
Create a responsive website using **React JS** with a chatbot interface, navigation elements, and dynamic content handling.

## Requirements:

### Layout:
- **Navbar:** 
  - Positioned at the top of the screen.
  - On the left side, include a "Logo".
  - On the right side, include a search bar input.

- **Side Menu:** 
  - Positioned on the left side of the screen.
  - Contains menu items: "Apps", "Documents".
  - When an item is selected, content corresponding to "Apps Page" or "Documents Page" should be displayed on the right side of the screen.

- **Content Area:**
  - Each page ("Apps", "Documents") should contain multiple paragraphs of text (using Lorem Ipsum) to ensure the page is scrollable for testing purposes.

### Chatbot:
- **Icon Button:** 
  - Positioned at the bottom right of the screen, visible on all pages.
  - Clicking this button opens the chatbot.

- **Chatbot Window:**
  - **Dimensions:** Width 400px, Height 600px on desktop views.
  - **Mobile View:** Full screen when opened on mobile devices.
  
  - **Components:**
    - **Header:** 
      - Contains two buttons:
        - **Reset:** Clears all conversation history.
        - **Close:** Closes the chatbot window.
      - Displays elapsed time in seconds since opening, updating every second. Reset the timer when the 'Reset' or 'Close' button is clicked.
    
    - **Message View:** 
      - Displays messages in a chat format:
        - User messages on the right side.
        - Bot responses on the left side. 
      - For bot responses, you can use placeholder text or random responses.

    - **Input View:** 
      - Allows users to type messages.
      - Messages should be displayed in the message view when the user presses the "Enter" key or clicks the send button.

## Functionality:
- **Interactivity:** 
  - Menu selection should update the content area.
  - Chatbot should handle sending messages and responding with mock data or placeholders.
  - **Search Bar:** 
    - As the user types text into the search bar, only paragraphs containing the typed text should be shown in the content area.
    - Highlight the matching text within the paragraphs in the view.

## Technical Specifications:
- **Frameworks/Libraries:** Use **React JS**.
- **Version Control:** Create a public repository on GitHub for this project. Include a README with setup instructions, how to run the project, and any decisions you made during development.