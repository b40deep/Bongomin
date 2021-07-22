import Post from "./Post";
import Post2 from "./Post2";

const AllPosts = () => {
  const getBackendResponse = async () => {
    fetch("http://localhost:3001/testing")
      .then((res) => res.json())
      .then((data) => console.log(data));

    // console.log(`API is ${res.ok ? "" : "not "}on`, res.json())
  };
  let samplePosts = [];
  for (let index = 0; index < 6; index++) {
    index % 2 === 0
      ? samplePosts.push(
          <li key={index}>
            <Post />
          </li>
        )
      : samplePosts.push(
          <li key={index}>
            <Post2 />
          </li>
        );
  }
  return (
    <div className="container ">
      <div className="row-cols-1">
        <button className="btn btn-primary" onClick={getBackendResponse}>
          API status (check console log).
        </button>
        {/* <button className="btn btn-primary" onClick={() => navigate('/gallery')}>
						try catch
					</button> */}
        {/* <Link to="/gallery">try catch</Link> */}
        <ul className="list-unstyled m-auto col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
          {samplePosts}
        </ul>
        <div className="m-5" />
      </div>
    </div>
  );
};

export default AllPosts;
