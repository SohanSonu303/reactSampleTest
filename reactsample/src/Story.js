import React, { useEffect, useState } from 'react';

function Story() {
  const [stories, setStories] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch('/story.txt');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const text = await response.text();

        const sampleData = [
          {
            id: 1,
            title: "The Hidden Garden",
            content: text,
            author: "Emily Rose",
            createdAt: "2023-07-12T12:00:00",
            updatedAt: "2023-07-12T12:00:00",
            images: [
              {
                id: 1,
                imageUrl: "/uploads/garden1.jpg"
              },
              {
                id: 2,
                imageUrl: "/uploads/garden2.jpg"
              }
            ]
          }
        ];

        setStories(sampleData);
        setEditTitle(sampleData[0].title);
        setEditContent(sampleData[0].content);
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    };

    fetchStory();
  }, []);

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleSave = () => {
    const updatedStories = stories.map(story => {
      if (story.id === 1) {
        return { ...story, title: editTitle, content: editContent };
      }
      return story;
    });
    setStories(updatedStories);
  };

  return (
    <div className="App">
      <div className="stories">
        {stories.map(story => (
          <div key={story.id} className="story">
            <h2>{story.title}</h2>
            <input
              type="text"
              value={editTitle}
              onChange={handleTitleChange}
            />
            <textarea
              style={{ whiteSpace: 'pre-wrap', width: '70%', height: '200px' }}
              value={editContent}
              onChange={handleContentChange}
            />
            <button onClick={handleSave}>Save</button>
            <div className="images">
              {story.images.map(image => (
                <img key={image.id} src={image.imageUrl} alt="Story" />
              ))}
            </div>
            <p><em>By {story.author}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
