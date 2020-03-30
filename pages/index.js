import Main from "../layouts/main";
import { courses } from "../lib/data";
import { useCart } from "../hooks/useCart";

const HomePage = ({ courses }) => {
  const { items, addItem, removeItem } = useCart();
  return (
    <Main>
      <h1>Learn useful information about project management</h1>
      <h2>Courses</h2>
      {courses.map(course => (
        <div
          key={course.id}
          style={{
            width: "30rem",
            marginBottom: "0.3rem",
            padding: "1rem",
            border: "1px solid #efefef",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div>{course.name}</div>
            <div>${course.price}</div>
          </div>
          <div>
            {items.find(item => item.id === course.id) ? (
              <button
                onClick={e => {
                  e.preventDefault();
                  removeItem(course);
                }}
              >
                Remove
              </button>
            ) : (
              <button
                onClick={e => {
                  e.preventDefault();
                  addItem(course);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </Main>
  );
};

HomePage.getInitialProps = async ctx => {
  // Do this here so its available on server-side
  return { courses };
};

export default HomePage;
