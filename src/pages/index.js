import Detail from "../components/home/Detail";
import Header from "../components/layouts/Header";
import HomePage from "../components/home";

export default function Home(props) {
  return (
    <div>
      <Header />
      <HomePage />
      <Detail />
    </div>
  );
}
