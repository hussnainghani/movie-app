import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, ScrollView, StyleSheet } from "react-native";

import { requestMovieDetail, requestMovieCredit, requestMovieImage, requestMovieRecommendations } from "../api/api";

import MovieBackdrop from "../component/MovieDetail/MovieBackdrop";
import MovieOverview from "../component/MovieDetail/MovieOverview";
import MovieImages from "../component/MovieDetail/MovieImages";
import MovieCast from "../component/MovieDetail/MovieCast";
import MovieRecommendations from "../component/MovieDetail/MovieRecommendations";
import MovieGenres from "../component/MovieDetail/MovieGenres";
import MovieRating from "../component/MovieDetail/MovieRating";
import MoviePlayButton from "../component/MovieDetail/MoviePlayButton";
import MovieTitle from "../component/MovieDetail/MovieTitle";
import { black, white } from "../helper/Color";

class MovieDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
      credit: {},
      images: {},
      recommendations: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.requestInfoDetail();
  }

  requestInfoDetail = async () => {
    const { id } = this.props.route.params;
    console.log("movie id", id);
    try {
      const [movieData, credit, images, recommendations] = await Promise.all([
        requestMovieDetail(id),
        requestMovieCredit(id),
        requestMovieImage(id),
        requestMovieRecommendations(id),
      ]);
      this.setState({ movieData, credit, images, recommendations, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  };

  movieInfoGeneral = () => {
    const { movieData, isLoaded } = this.state;
    return (
      <MovieBackdrop backdrop={movieData.backdrop_path}>
        {isLoaded && (
          <View>
            <MovieTitle title={movieData.title} />
            <MovieRating rating={movieData.vote_average} />
          </View>
        )}
      </MovieBackdrop>
    );
  };

  movieInfoDetail = () => {
    const { movieData, credit, isLoaded, images, recommendations } = this.state;
    const { navigation } = this.props;
    return (
      <View style={Styles.movieDetailWrapper}>
        <View style={Styles.movieDetail}>
          {isLoaded && (
            <View>
              <MovieGenres genre={movieData.genres} />
              <MovieOverview overview={movieData.overview} />
              <MovieCast credit={credit} />
              <MovieImages images={images} />
              <MovieRecommendations recommendations={recommendations} navigation={navigation} />
            </View>
          )}
        </View>
        <MoviePlayButton />
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={Styles.scrollview}>
        <StatusBar translucent />
        {this.movieInfoGeneral()}
        {this.movieInfoDetail()}
      </ScrollView>
    );
  }
}

export default MovieDetailScreen;

MovieDetailScreen.propTypes = {
  route: PropTypes.any,
};

const Styles = StyleSheet.create({
  scrollview: {
    backgroundColor: white,
    flexGrow: 1,
  },

  movieDetailWrapper: {
    flex: 1,
    backgroundColor: black,
  },

  movieDetail: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: white,
  },
});