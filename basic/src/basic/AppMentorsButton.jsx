import React, { useState } from "react";

export default function AppMentorsButton() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let current = "";
    let title = "";

    if (prev == null || !prev.trim()) {
      return;
    } else {
      person.mentors.forEach((mentor) => {
        if (mentor.name === prev) {
          current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          title = prompt(`변경할 직함은?`, mentor.title);
        }
      });
    }
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { name: current, title };
        }
        return mentor;
      }),
    }));
  };
  const handleCreate = () => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    let title = "";
    if (name == null || !name.trim()) {
      return;
    } else {
      title = prompt(`추가할 멘토의 직함을 입력하세요.`);
    }
    setPerson((person) => ({
      ...person,
      mentors: [
        ...person.mentors,
        {
          name,
          title,
        },
      ],
    }));
  };
  const handleDelete = () => {
    const name = prompt(`누구 삭제하고 싶은가요?`);
    if (name == null || !name.trim()) {
      return;
    } else {
      person.mentors.forEach((mentor) => {
        if (mentor.name !== name) {
          return;
        }
      });
    }
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토 수정하기" onClick={handleUpdate} />
      <Button text="멘토 추가하기" onClick={handleCreate} />
      <Button text="멘토 삭제하기" onClick={handleDelete} />
    </div>
  );
}

function Button({ text, onClick }) {
  const btnStyle = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    borderRadius: "20px",
    margin: "0.4rem",
    padding: "0.3rem 1rem",
  };
  console.log("Button", text, "re-rendering");
  return (
    <button onClick={onClick} style={btnStyle}>
      {text}
    </button>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
