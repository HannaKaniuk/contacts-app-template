export const markupContact = ({ id, name, number }) => {
  return `
      <li class="list-item" id="${id}">
      <p>Name: ${name}</p>
      <p>Number: ${number}</p>
      <button class="delete-btn">Delete</button>
      </li>
     `;
};
