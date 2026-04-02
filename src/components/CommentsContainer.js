import React from "react";
import Comment from "./Comment";
const CommentsContainer = () => {
  const commentData = [
    {
      name: "Aarav",
      text: "This tutorial finally made recursion click for me 🔥",
      replies: [
        {
          name: "Sneha",
          text: "Same!! I was struggling for weeks 😭",
          replies: [
            {
              name: "Aarav",
              text: "Glad it helped! Practice is key 👍",
              replies: [],
            },
            {
              name: "Rohan",
              text: "Any good problems to practice?",
              replies: [
                {
                  name: "Sneha",
                  text: "Try factorial, fibonacci, and backtracking problems",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Dev",
          text: "Recursion still confuses me 😅",
          replies: [],
        },
      ],
    },
    {
      name: "Priya",
      text: "The UI part was super clean and easy to follow 💯",
      replies: [
        {
          name: "Kiran",
          text: "Yeah Tailwind usage was neat!",
          replies: [
            {
              name: "Meena",
              text: "Do you have Tailwind resources?",
              replies: [
                {
                  name: "Kiran",
                  text: "Check official docs + some YouTube tutorials",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Rahul",
      text: "Can you make a video on system design?",
      replies: [
        {
          name: "Author",
          text: "Yes! Planning one soon 🚀",
          replies: [
            {
              name: "Rahul",
              text: "Waiting for it 🙌",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Ananya",
      text: "This deserves way more views!",
      replies: [
        {
          name: "Arjun",
          text: "Totally underrated channel",
          replies: [],
        },
        {
          name: "Dev",
          text: "Shared with my friends 👍",
          replies: [
            {
              name: "Ananya",
              text: "Same here!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Suresh",
      text: "There’s a small bug at 6:10 in the code",
      replies: [
        {
          name: "Author",
          text: "Oh thanks! Will fix it soon 🙏",
          replies: [
            {
              name: "Suresh",
              text: "No problem 😊",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Vikram",
      text: "Can you explain closures next?",
      replies: [
        {
          name: "Neha",
          text: "Yes please! That topic is confusing",
          replies: [],
        },
        {
          name: "Author",
          text: "Adding it to my list 👍",
          replies: [],
        },
      ],
    },
    {
      name: "Ritika",
      text: "Loved the animations in this video 😍",
      replies: [
        {
          name: "Kunal",
          text: "Framer Motion?",
          replies: [
            {
              name: "Ritika",
              text: "Yes looks like it!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Manoj",
      text: "Beginner friendly content 🙌",
      replies: [],
    },
    {
      name: "Pooja",
      text: "Can you share GitHub repo?",
      replies: [
        {
          name: "Author",
          text: "Link is in description 👍",
          replies: [],
        },
      ],
    },
    {
      name: "Aditya",
      text: "The explanation at 10:45 was gold 🔥",
      replies: [
        {
          name: "Rohit",
          text: "Timestamp saved!",
          replies: [],
        },
      ],
    },
    {
      name: "Sneha",
      text: "How long did it take you to learn all this?",
      replies: [
        {
          name: "Author",
          text: "Around 1.5 years of consistent practice",
          replies: [
            {
              name: "Sneha",
              text: "That’s motivating 🙌",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Harsha",
      text: "Can you make more React projects?",
      replies: [
        {
          name: "Author",
          text: "Yes more coming soon 🚀",
          replies: [],
        },
      ],
    },
    {
      name: "Nikhil",
      text: "Audio quality could be better",
      replies: [
        {
          name: "Author",
          text: "Noted! Will improve in next videos",
          replies: [],
        },
      ],
    },
    {
      name: "Divya",
      text: "This helped me in my interview prep 🙏",
      replies: [
        {
          name: "Aarav",
          text: "Same here! Got asked recursion question",
          replies: [
            {
              name: "Divya",
              text: "Nice! Hope you nailed it",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  const CommenList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment key={index} data={comment} />
        <div className="pl-5 border-l-black border m-2">
          <CommenList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    // <div className="m-5 p-2 text-2xl font-bold "></div>
    <div>
      <CommenList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
