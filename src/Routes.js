import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/notFound";
import Note from "./containers/Note";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/">
        <Home />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <SignUp />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/new">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <Note />
      </AuthenticatedRoute>
      <AuthenticatedRoute>
        <NotFound />
      </AuthenticatedRoute>
    </Switch>
  );
}
