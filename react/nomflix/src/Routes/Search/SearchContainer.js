import React from "react";
import SearchPresenter from "./SearchPresenter";
import { FALSE } from "node-sass";

export default class extends React.Component {
        state = {
            movieResults: null,
            tvResults: null,
            searchTerm: "",
            loading: false, // 디폴트로 아무것도 로딩하지 않는다.
            error: null
        };

        re nder() {
            const { movieResults, tvResults, searchTerm, loading, error } = this.state;
            return <SearchPresenter
            movieResults = { movieResults }
            tvResults = { tvResults }
            searchTerm = { searchTerm }
            loading = { loading }
            error = { error }
            / > ;
        }