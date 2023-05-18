"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <>
      <div className='mt-16 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </>
  );
};

// FUNCTIONAL COMPONENT

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  // const [searchedResults, setSearchedResults] = useState([]);

  const filteredData = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter((result) => regex.test(result.prompt));
  };

  console.log(filteredData);

  // HANDLING TEXT SEARCH IN THE POSTS

  const handleSearchChange = (e) => {
    // setSearchText(e.target.value);
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchResults(searchResult);
      }, 500)
    );
  };

  console.log(searchText);

  // HANDLING TAG SEARCHING

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchResults(searchResult);
  };
  //  TO CLEAR THE SEARCH BAR

  const handleClearSearch = () => {
    setSearchText("");
    setSearchResults([]);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    console.log(posts);

    setPosts(data);
  };

  // fetchPosts();
  // console.log(posts);
  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // Adding the 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />

        {searchText && (
          <button
            type='button'
            className='relative search_clear_button'
            onClick={handleClearSearch}
          >
            X
          </button>
        )}
      </form>

      {/* All Results / Posts */}

      {searchText ? (
        <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}

      {/* <PromptCardList data={posts} handleTagClick={() => {}} /> */}
    </section>
  );
};

export default Feed;
