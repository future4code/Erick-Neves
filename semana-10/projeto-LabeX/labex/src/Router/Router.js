import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginAdmPage from "../pages/LoginAdmPage/LoginAdmPage";
import AdmPage from "../pages/LoginAdmPage/AdmPage";

import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import ListTripsAdmPage from "../pages/ListTripsAdmPage/ListTripsAdmPage";


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
