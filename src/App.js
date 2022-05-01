import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import { fetchTechnologies } from "./redux/reducers/actionCreators";
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from "./components/Loader";

function App() {
  const technology = useSelector(state => state.technology)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTechnologies())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {technology.isLoading
          ?
          <Loader />
          :
          <div className="row">
            <Navbar technologies={technology.technologies} />
            <AppRouter/>
          </div>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
