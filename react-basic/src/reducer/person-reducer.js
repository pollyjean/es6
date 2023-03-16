export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current, title } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { name: current, title };
          }
          return mentor;
        }),
      };
    }
    case "created": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [
          ...person.mentors,
          {
            name,
            title,
          },
        ],
      };
    }
    case "deleted": {
      const { name, title } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`Unknown Action Type : ${action.type}`);
    }
  }
}
