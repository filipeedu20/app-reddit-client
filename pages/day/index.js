import Link from "next/link";
const axios = require("axios");

axios.get("https://www.reddit.com/r/javascript.json").then(console.log);

export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);
