import Main from "../layouts/main";
import { courses } from "../lib/data";
import { useCart } from "../hooks/useCart";
import Prismic from "prismic-javascript";
import shortid from "shortid";

const HomePage = ({ hero_title, hero_description, course }) => {
  const { items, addItem, removeItem } = useCart();

  return (
    <Main>
      <h1>{hero_title}</h1>
      <p>{hero_description}</p>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {course.items.map((course, idx) => (
        <div
          key={idx}
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
            <div>{course.title}</div>
            <div>{course.description}</div>
            <div>
              <strong>${course.price}</strong>
            </div>
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

const apiEndpoint = "https://the-ideas-academy.cdn.prismic.io/api/v2";
const apiToken =
  "MC5Yb0hnTEJJQUFLcHd2VFJs.YlZ977-9JTnvv71a77-977-9YB8Y77-9Mjzvv70BWzNjSTtb77-977-9BB8ZPCB9";

HomePage.getInitialProps = async ctx => {
  // Do these here so its available on server-side
  const api = await Prismic.getApi(apiEndpoint, { accessToken: apiToken });
  const { data } = await api.getSingle("homepage");
  const hero_title = data.hero_title[0].text;
  const hero_description = data.hero_description[0].text;
  const course_slices = data.body[0];
  const course = {
    title: course_slices.primary.title[0].text,
    description: course_slices.primary.description[0].text,
    items: course_slices.items.map(item => ({
      id: shortid.generate(),
      title: item.title[0].text,
      description: item.description[0].text,
      price: item.price
    }))
  };
  return { hero_title, hero_description, course };
};

export default HomePage;
