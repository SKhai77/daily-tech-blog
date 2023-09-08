// Function to handle the submission of a new post form
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get the title and content values from the form
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  // Get the user_id from the hidden input field
  const user_id = document.querySelector('#user-id').value;

  if (title && content) {
    // Send a POST request to create a new post
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content, user_id }), // Include user_id
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If successful, redirect to the user's profile page
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

// Function to handle the click event on delete buttons
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Send a DELETE request to delete a post by its ID
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If successful, redirect to the user's profile page
      document.location.replace('/profile');
    } else {
      // Display an alert if post deletion fails
      alert('Failed to delete post');
    }
  }
};

// Add event listeners for form submission and delete button clicks
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
