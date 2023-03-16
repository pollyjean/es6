import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let current = "";
    let title = "";

    if (prev == null || !prev.trim()) {
      return;
    } else {
      person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          title = prompt(`변경할 직함은?`, mentor.title);
        } else {
          return;
        }
      });
    }
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
      mentor.title = title;
    });
  };
  const handleCreate = () => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    let title = "";
    if (name == null || !name.trim()) {
      return;
    } else {
      title = prompt(`추가할 멘토의 직함을 입력하세요.`);
    }
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구 삭제하고 싶은가요?`);
    if (name == null || !name.trim()) {
      return;
    } else {
      person.mentors.map((mentor) => {
        if (mentor.name !== name) {
          return;
        }
      });
    }
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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
      <button onClick={handleUpdate}>멘토 수정하기</button>
      <button onClick={handleCreate}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
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
