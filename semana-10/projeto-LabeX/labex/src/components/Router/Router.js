import React from "react";
import HomePage from "../HomePage/HomePage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginAdmPage from "../LoginAdmPage/LoginAdmPage";
import AdmPage from "../LoginAdmPage/AdmPage";

import CreateTripPage from "../CreateTripPage/CreateTripPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import ListTripsAdmPage from "../ListTripsAdmPage/ListTripsAdmPage";


export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/application-form"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/admPage/trips/list"}>
          <ListTripsAdmPage />
        </Route>
        <Route exact path={"/loginAdm"}>
          <LoginAdmPage />
        </Route>
        <Route exact path={"/admPage"}>
          <AdmPage />
        </Route>
        
        <Route exact path={"/trips/create"}>
          <CreateTripPage />
        </Route>


        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
