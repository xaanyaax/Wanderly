import React from "react";
import Form from "../components/Form/Form";
import Posts from "../components/Posts/Posts";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex px-1 py-8 gap-8">
      <div className="flex-1">
        <Posts />
      </div>

      <div className="pr-10 py-5">
        <Form />
      </div>
    </div>
  );
}

export default Home;
