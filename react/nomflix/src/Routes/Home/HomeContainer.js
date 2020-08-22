import React from "react";
import HomePresenter from "./HomePresenter";
import { movies } from "../../api";

export default class extends React.Component {
  state = {
    loading: false,
    error: null,
    popular: [],
    upComing: [],
    nowPlaying: [],
  };

  componentDidMount = async () => {
    try {
      const {
        data: { results: popular },
      } = await movies.popular();
      console.log(popular);
      const {
        data: { results: upComing },
      } = await movies.upComing();
      const {
        data: { results: nowPlaying },
      } = await movies.NowPlaying();
      this.setState({
        popular,
        upComing,
        nowPlaying,
      });
    } catch {
      this.setState({
        error: "Could not  movies",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading, error, popular, upComing, nowPlaying } = this.state;
    return (
      <HomePresenter
        loading={loading}
        error={error}
        popular={popular}
        upComing={upComing}
        nowPlaying={nowPlaying}
      />
    );
  }
}
