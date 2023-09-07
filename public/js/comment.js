// Handle comment submission
document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const commentBody = document.querySelector('.commentInput').value;
  
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ commentBody, post_id: `{{id}}` }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Reload the page or update the comment section
        location.reload();
      } else {
        // Handle error
        console.error('Comment submission failed');
      }
    } catch (error) {
      console.error('Comment submission failed', error);
    }
  });
  