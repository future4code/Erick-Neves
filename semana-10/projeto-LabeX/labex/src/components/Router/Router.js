import React from "react";
import HomePage from "../HomePage/HomePage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginAdmPage from "../LoginAdmPage/LoginAdmPage";
import AdmPage from "../LoginAdmPage/AdmPage";
import AproveAndReproveTrips from "../LoginAdmPage/AproveAndReproveTrips";
import DeleteTrips from "../LoginAdmPage/DeleteTrips";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";



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
        <Route exact path={"/loginAdm"}>
          <LoginAdmPage />
        </Route>
        <Route exact path={"/admPage"}>
          <AdmPage />
        </Route>
        <Route exact path={"/trips/aproveAndReprove"}>
          <AproveAndReproveTrips />
        </Route>
        <Route exact path={"/trips/delete"}>
          <DeleteTrips />
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
