/* eslint-disable */

function ListItem(props) {
    const { data } = props;
  return (
    <li className="task">
      <h2>{data.title}</h2>
      <p>Description: {data.description}</p>
      <p>Time: {data.time}</p>
    </li>
  );
}

export default ListItem;
