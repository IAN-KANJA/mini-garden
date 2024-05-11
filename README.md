# AddPlant
this is among the components that are made
The AddPlant component is a React functional component that provides an interface for users to add new plant listings to a database. It maintains a form state using React's useState hook, which includes fields for plant name, image URL, and price. Users input data into these fields, which is then submitted to a server using a POST request. The handleChange function dynamically updates the form's state as the user types. Upon form submission handled by handleSubmit, the component sends the collected data to http://localhost:3000/plants. If the addition is successful, the form resets to its initial state.


# GardenCard
The GardenCard component in React displays garden plant information such as name, image, and price. It uses React's useState to manage an availability state, initially set to "AVAILABLE IN STOCK". Upon clicking a button on the card, the state updates to "Not in Stock", reflecting the change in availability. Styled using Tailwind CSS for a responsive and visually appealing design, the component structures its content with images and text neatly organized in layered divs. However, the image lacks alt text, missing a chance to enhance accessibility. The component provides a functional and attractive way to manage and display plant stock information.

# GardenCollection
The GardenCollection component in React serves as a container for displaying a collection of plants using the GardenCard component. It accepts a plants prop, which is an array of plant data. The component uses a grid layout with Tailwind CSS to arrange multiple GardenCard components into four columns, ensuring a clean and responsive presentation. The overall styling includes a vibrant green background and yellow italicized text for the heading, enhancing visual appeal. Each GardenCard is rendered with a unique key from the plant's id, ensuring efficient DOM reconciliation and updates in React when the list changes

# logo
The Logo component in React is a simple and stylistic display element that renders a bold and italicized heading within a div container. The text "MINI-GARDEN 🪴💐🌷🌿" is styled with a large font size (text-6xl), bold weight, and centered alignment, set against a green background with yellow text, adhering to the component's aesthetic theme. The use of emojis in the logo adds a playful, visually engaging element that underscores the gardening theme. This component is ideal for use as a prominent header or banner in a gardening-related web application, providing both branding and visual appeal.

# PlantCard

The GardenCard component is a basic React functional component designed to represent individual garden plant items. It accepts properties such as id, image, name, and price, dynamically populating each card with corresponding data. Within the card layout, an image of the plant is displayed, accompanied by its name and price. The component follows a simple and clean design, with font weights and styles applied for emphasis and readability. A button labeled "IN STOCK" is included, suggesting the availability of the item. This component provides a foundational structure for presenting plant items in a garden or nursery-themed web application.

# SearchPlant
The SearchPlant component in React provides a search input field for filtering plant items based on user input. It renders a bold and italicized heading "Search Plants:" atop a green background for visual emphasis. The input field allows users to type plant names for filtering purposes, with a placeholder guiding their input. Styling is applied to ensure readability and consistency, while the onChange event handler dynamically updates the searchInput state to reflect user input. This component serves as a user-friendly interface element, enhancing the search functionality within a garden or nursery-themed web application.

# App
In this React app, users can add new plants, search existing ones, and view them in a collection. Plant data is fetched from a local server. The Search component filters plants based on user input. Components include Logo, AddPlant, SearchPlant, and GardenCollection.

# Styling 
We used tailwind to style the project

# Test
 fork and clone this repository
 npm i / npm install then
 npm start to open broswe

 # contributions
 Ian Njau
 lynn wanaina
 Anwar Yassin
Jason  Okingo